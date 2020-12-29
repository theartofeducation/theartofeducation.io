import { useTranslations } from "next-intl"
import PropTypes from "prop-types"
import Head from "next/head"
import { Header } from "../header"
import { NotificationCenter } from "@aoeu/notification"
import { isNotEmpty } from "@aoeu/util"
import styles from "./layout.module.scss"

const resolvePageTitle = ({ t, title }) => {
  const mainTitle = t("mainTitle")

  if (isNotEmpty(title)) {
    return `${title} - ${mainTitle}`
  }

  return mainTitle
}

export default function Layout({ title, children }) {
  const t = useTranslations("components.layout")
  const pageTitle = resolvePageTitle({ t, title })

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <NotificationCenter />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ])
}
