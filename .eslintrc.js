module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `code-styling`
  extends: ['prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
