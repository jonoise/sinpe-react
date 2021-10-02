import '../styles/globals.css'
import type { AppProps } from 'next/app'

// @SINPE-REACT-STYLES: importar estilos predeterminados en el root de la aplicación.
import "sinpe-react/dist/sinpe-react.cjs.development.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
