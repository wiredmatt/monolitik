import { AppProps } from 'next/app'
import 'ui-kit/dist/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
