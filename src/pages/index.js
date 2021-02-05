import clsx from "clsx"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/icon"
import Layout from "@/components/layout"
import { ExternalLink } from "@/components/external-link"
import { List, ListItem } from "@/components/list"
import { Container } from "@/components/container"
import { Card } from "@/components/card"
import styles from "@/styles/home.module.scss"

export default function Home() {
  const t = useTranslations("pages.index")

  const eduSiteLink = (
    <ExternalLink url="https://theartofeducation.edu" key="edu-site-link">
      {t("siteLinkText")}
    </ExternalLink>
  )

  return (
    <Layout title={t("title")}>
      <Container>
        <section className={styles.intro}>
          <p>{t("introParagraph1", {
            siteLink: eduSiteLink
          })}</p>
          <p>{t("introParagraph2")}</p>
        </section>
        <h2 className={styles.resourcesHeading}>{t("resourcesHeading")}</h2>
        <List orientation="centered" className={styles.resourceList}>
          <ListItem className={styles.resource}>
            <Card className={styles.resourceCard}>
              <header>{t("styleGuideHeading")}</header>
              <article>{t("styleGuideContent")}</article>
              <footer>
                <List layout="flex" orientation="right">
                  <ListItem className={styles.resourceLink}>
                    <ExternalLink url="https://github.com/theartofeducation/ui-common">
                      <Icon
                        iconSet="social"
                        iconName="github"
                        color="64748b"
                        className={styles.linkIcon} />
                    </ExternalLink>
                  </ListItem>
                  <ListItem className={styles.resourceLink}>
                    <ExternalLink url="https://theartofeducation.github.io/ui-common">
                      <Icon
                        iconSet="hero-outline"
                        iconName="external-link"
                        color="64748b"
                        className={clsx([styles.linkIcon, styles.externalLinkIcon])} />
                    </ExternalLink>
                  </ListItem>
                </List>
              </footer>
            </Card>
          </ListItem>
          <ListItem className={styles.resource}>
            <Card className={styles.resourceCard}>
              <header>{t("engDocsHeading")}</header>
              <article>{t("engDocsContent")}</article>
              <footer>
                <List layout="flex" orientation="right">
                  <ListItem className={styles.resourceLink}>
                    <ExternalLink url="https://github.com/theartofeducation/engineering-docs">
                      <Icon
                        iconSet="social"
                        iconName="github"
                        color="64748b"
                        className={styles.linkIcon} />
                    </ExternalLink>
                  </ListItem>
                  <ListItem className={styles.resourceLink}>
                    <ExternalLink url="https://theartofeducation.github.io/engineering-docs">
                      <Icon
                        iconSet="hero-outline"
                        iconName="external-link"
                        color="64748b"
                        className={clsx([styles.linkIcon, styles.externalLinkIcon])} />
                    </ExternalLink>
                  </ListItem>
                </List>
              </footer>
            </Card>
          </ListItem>
          <ListItem className={styles.resource}>
            <Card className={styles.resourceCard}>
              <header>{t("npmOrgHeading")}</header>
              <article>{t("npmOrgContent")}</article>
              <footer>
                <List layout="flex" orientation="right">
                  <ListItem className={styles.resourceLink}>
                    <ExternalLink url="https://npmjs.com/org/aoeu">
                      <Icon
                        iconSet="hero-outline"
                        iconName="external-link"
                        color="64748b"
                        className={clsx([styles.linkIcon, styles.externalLinkIcon])} />
                    </ExternalLink>
                  </ListItem>
                </List>
              </footer>
            </Card>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}
