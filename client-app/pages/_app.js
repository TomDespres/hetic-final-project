import '../styles/globals.scss'

import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ViteMaTable</title>
        <meta name="description" content="description HERE -------------------" />
        <link rel="icon" href="/favicon.ico" />

        {/* P W A */}
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#171717' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#171717' />

        <link rel='manifest' href='/manifest.json' />

        {/* F A V I C O N */}
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>

        {/* F O N T S */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
