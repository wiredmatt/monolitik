<p align="center">
  <img width="240" height="180" src="https://cdn.dribbble.com/users/702032/screenshots/3410973/media/de2f03b8916a47de0291b41a21ced8c5.png?compress=1&resize=400x300&vertical=top"/>
</p>

<h1 align="center">Monolitik</h1>

🚀 Powered by [Turborepo](https://turborepo.org/)

## Motivation

Having the code split up in multiple repositories is definitely a good practice, having the backend and the frontend on their own repositories is certainly a clean approach. But this ends up complicating things for agile development, where prototypes need to **ship** fast, and this is even more noticeable in small development teams, where usually one person takes care of each side of the project, so having everything in one place ends up being for the best, everyone can easily know how things look like both in the backend and in the frontend, without having to head over to their Organization and look for the other side of the project, just to know what an API endpoint does.

## About monorepos

[Uber Technology Day: Monorepo to Multirepo and Back Again](https://www.youtube.com/watch?v=lV8-1S28ycM)


[Big JavaScript Projects - Code Sharing](https://www.youtube.com/watch?v=MflUMIeADZU)

## Usage

There are 6 main packages in this monorepo: 

* backend
  - **db**: Prisma models & DB interface
  - **api**: REST API

* frontend
  - **landing**: landing page
  - **dashboard**: user dashboard
  - **ui-kit**: reusable react components

You can interact with them through the following scripts:

```json
"scripts": {
  "db": "yarn workspace db",
  "api": "yarn workspace api",
  "landing": "yarn workspace landing", 
  "dashboard": "yarn workspace dashboard", 
  "ui": "yarn workspace ui-kit" 
},
```

### Examples

- Run the api in dev mode:

```bash
yarn api dev
```

- Adding the web3 and web3-utils dependencies to the api

```bash
yarn api add web3 web3-utils
```

- Adding the **db** package to the api as a dependency

```bash
yarn api add "db@*"
```

### Extra

#### _config


`tsconfig`: A collection of tsconfig files

- **base**: Generic TS code
- **next**: For NextJS apps
- **react-library**: For React Apps and component libraries 


`linter-*`: Presets for eslint rules and configuration

- **base**: Generic rules
- **nest**: For NestJS apps
- **next**: For NextJS apps
- **react**: For React Apps 

If you want to create a new linter, duplicate one of the existing directories and override the `index.js` file as needed.

`.platform`: not really a package, but I didn't like having it in the root of the project. An elastic beanstalk-specific prebuild hook, that will install yarn and build the prisma client.

#### CI/CD

Github actions that'll run and check if your changes broke everything

```yml
env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
```

Make sure to configurate your secrets and fill in the variables above. [Guide](https://turborepo.org/docs/ci/github-actions#remote-caching)

Talking about secrets, you should also add the following ones:

- DATABASE_URL_PROD
- DATABASE_URL_MOCK
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

### Deployments

#### Deploy a microfrontend to a serverless

```bash
cd frontend/landing
```

Create a `netlify.toml` config file:

```toml
[build]
  ignore = "git diff --quiet HEAD^ . ../ui-kit/"
  command = "yarn build"
  publish = "build"

[build.environment]
  NETLIFY_USE_YARN = "true"
```

Install netlify

```bash
npm i -g netlify-cli
netlify init
```

Choose:

1. Create and configure a new site
2. Select your team
3. Choose a site name
4. Set the base directory to `frontend/landing`
5. For build command, input `yarn build`
6. For directory to deploy, choose the output directory that the build command generates. Nextjs outputs to `.next` and react does so to `build`. Following the landing example, you will input `frontend/landing/build`
7. Leave blank for functions

Make sure to enable notifications in the site settings (in the netlify dashboard). That's it, every time you push to origin netlify will make a new deployment.

#### Deploy a service to Elastic Beanstalk

1. Create a new app in EB, and set the DATABASE_URL environment variable
2. Update [ci-backend.yml](.github/workflows/ci-backend.yml),make build and deploy steps for the new service, for example:

At the end of `build_test/steps`, add:

```yaml
- name: Build and test cart-service
  if: contains(needs.get_file_changes.outputs.all_changed_files, 'backend/cart-service/') || contains(needs.get_file_changes.outputs.all_changed_files, 'backend/db/')
  run:  yarn db build && yarn cart-service build
```

And then you can copy-paste the existing `eb_deploy` job, just replace it according to the parameters of the new service you want to create.

You should also play around with the conditional building and deployments for the affected services on push. At the time of writing this, the repo uses only one service (`api`), but for future releases it might include more.
