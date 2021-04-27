import '../styles/globals.css'
import Head from 'next/head'
import { NextSeo } from 'next-seo'



function MyApp({ Component, pageProps }) {
  return (
    <>
<Head>
<link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            />
          </noscript>
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta
          name="description"
        />
      </Head>
  <NextSeo
   title="BNB Rocket"
   description=" "
       canonical="http://localhost:3000"
        openGraph={{
          url: 'http://localhost:3000',
          title: 'BNB Rocket',
          description:
            ' ',
          images: [
            {
              url: 'http://localhost:3000/logo.png',
              width: 1280,
              height: 720,
              alt: 'BNB Rocket'
            }
          ],
          site_name: 'BNB Rocket'
        }}
      />
  <Component {...pageProps} />
    </>
      )
}

export default MyApp
