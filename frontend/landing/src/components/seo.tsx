import { Helmet } from 'react-helmet-async'
import config from '../App.config'

const SEO = () => (
  <Helmet>
    <title>
      {config.header} - Tokenized {config.asset}
    </title>
    <meta
      name="description"
      content="RT-Estate is a real estate marketplace that allows you to buy and sell tokenized assets using blockchain technology."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="" />
    <meta
      name="twitter:title"
      content={`${config.header} - Tokenized ${config.asset}`}
    />
    <meta
      name="twitter:creator"
      content={config.twitter.creator}
    />
    <meta name="twitter:site" content={config.twitter.site} />
    <meta
      name="twitter:description"
      content={config.twitter.description}
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={config.url} />
    <meta
      property="og:title"
      content={`${config.header} - Tokenized ${config.asset}`}
    />
    <meta
      property="og:description"
      content={config.twitter.description}
    />
    <meta property="og:image" content="" />
  </Helmet>
)

export default SEO
