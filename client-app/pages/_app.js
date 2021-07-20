import '../styles/globals.scss'

import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vite Ma Table</title>
        <meta name="description" content="description HERE -------------------" />
        <link rel="icon" href="/favicon.ico" />

        {/* P W A */}
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#0000FF' />

        <link rel='manifest' href='/manifest.json' />

        {/* F O N T S */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
