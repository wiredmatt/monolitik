import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { AppConfig } from '../utils/AppConfig'

const IndexNoSSR = dynamic(() => import('../components/Index'), {
  ssr: false
})

const Index = () => (
  <>
    <NextSeo
      title={AppConfig.site_name}
      description={AppConfig.description}
      canonical={AppConfig.site_url}
    />
    <IndexNoSSR />
  </>
)

export default Index
