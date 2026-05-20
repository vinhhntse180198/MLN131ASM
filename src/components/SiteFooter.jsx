import { Link } from 'react-router-dom'
import { footer, navLinks, siteMeta } from '../data/siteContent.js'

export default function SiteFooter() {
  return (
    <footer className="c4-footer c4-footer--simple">
      <div className="c4-container c4-footer__simple">
        <p className="c4-footer__brand">
          <span aria-hidden>{siteMeta.logoIcon}</span> {footer.title}
        </p>
        <p className="c4-footer__tagline">{footer.tagline}</p>
        <nav className="c4-footer__nav" aria-label="Điều hướng chân trang">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="c4-footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  )
}
