import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader({ brandShort, logoIcon, navLinks }) {
  return (
    <header className="c4-header">
      <div className="c4-header__inner">
        <Link to="/" className="c4-brand">
          <span aria-hidden>{logoIcon}</span>
          {brandShort}
        </Link>
        <nav className="c4-nav" aria-label="Điều hướng">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
