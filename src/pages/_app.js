import NextApp from "next/app"
import Head from "next/head"
import PropTypes from "prop-types"
import { NextIntlProvider } from "next-intl"
import { getTranslations } from "../lang"
import "../styles/main.global.scss"
import "../styles/external-styles.scss"

function onIntlError(error) {
  if (error.code === "MISSING_MESSAGE") {
    console.warn(`⚠️ i18n MESSAGE MISSING: ${error.originalMessage}`)
  } else {
    // TODO log to Sentry
  }
}

export default function App({ Component, pageProps, translations }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/aoeu-logo-mark.svg" type="image/svg" />
      </Head>
      <NextIntlProvider messages={translations} onError={onIntlError}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

App.getInitialProps = async context => {
  const { router } = context
  const { locale, defaultLocale } = router

  const translations = await getTranslations({
    locale,
    defaultLocale
  })

  const appProps = await NextApp.getInitialProps(context)

  return {
    ...appProps,
    locale,
    translations
  }
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  locale: PropTypes.string,
  translations: PropTypes.object
}
