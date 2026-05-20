import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { navLinks, siteMeta } from '../data/siteContent.js'

export default function SiteLayout() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="c4-shell">
      <SiteHeader
        brandShort={siteMeta.brandShort}
        logoIcon={siteMeta.logoIcon}
        navLinks={navLinks}
      />
      <main className="c4-main">
        <PageTransition />
      </main>
      <SiteFooter />
    </div>
  )
}
