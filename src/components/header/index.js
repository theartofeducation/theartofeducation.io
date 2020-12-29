import React from "react"
import PropTypes from "prop-types"
import { useTranslations } from "next-intl"
import Link from "next/link"
// import { AOEULogo } from "@aoeu/logos"
import { ReactComponent as AOEULogo } from "@aoeu/logo-svgs/aoeu-logo-horizontal.svg"
import { Container } from "../container"
import styles from "./styles.module.scss"

export const Header = ({ siteTitle }) => {
  const t = useTranslations("components.header")

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">
          <a>
            <AOEULogo className={styles.logo} />
            {/* <AOEULogo variant="horizontal" size="xl" className={styles.logo} /> */}
            <h1>{t("heading")}</h1>
          </a>
        </Link>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}
