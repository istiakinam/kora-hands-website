import { useState, useEffect } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router'

const BRAND = 'KORA'

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setScrolled(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) setMenuOpen(false)
  }, [pathname])

  const navBg = scrolled ? 'rgba(242,234,216,0.96)' : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(122,75,42,0.15)' : '1px solid transparent'
  const linkColor = scrolled ? 'rgba(28,20,14,0.65)' : 'rgba(242,234,216,0.82)'
  const hamColor = scrolled ? '#1C140E' : '#F2EAD8'

  return (
    <div style={{ backgroundColor: '#F2EAD8', color: '#1C140E', fontFamily: 'var(--font-family-body)' }}>
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ backgroundColor: navBg, backdropFilter: scrolled ? 'blur(8px)' : 'none', borderBottom: navBorder }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-xl md:text-2xl tracking-[0.22em] transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-family-display)', color: '#7A4B2A' }}
          >
            {BRAND}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Craft', to: '/#craft' },
              { label: 'Materials', to: '/#materials' },
              { label: 'Collection', to: '/collection' },
              { label: 'Our People', to: '/people' },
              { label: 'Contact', to: '/#contact' },
            ].map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive && to.startsWith('/collection') ? '#7A4B2A' : linkColor,
                  borderBottom: isActive && to.startsWith('/collection') ? '1px solid #7A4B2A' : 'none',
                  paddingBottom: '1px',
                })}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7A4B2A')}
                onMouseLeave={(e) => {
                  const isActive = pathname === '/collection' && to.startsWith('/collection')
                  e.currentTarget.style.color = isActive ? '#7A4B2A' : linkColor
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/collection"
            className="hidden md:inline-flex items-center text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
            style={{
              border: `1px solid ${scrolled ? '#7A4B2A' : 'rgba(242,234,216,0.6)'}`,
              color: scrolled ? '#7A4B2A' : '#F2EAD8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7A4B2A'
              e.currentTarget.style.color = '#F2EAD8'
              e.currentTarget.style.borderColor = '#7A4B2A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = scrolled ? '#7A4B2A' : '#F2EAD8'
              e.currentTarget.style.borderColor = scrolled ? '#7A4B2A' : 'rgba(242,234,216,0.6)'
            }}
          >
            Shop
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[
              menuOpen ? 'rotate-45 translate-y-[6px]' : '',
              menuOpen ? 'opacity-0' : '',
              menuOpen ? '-rotate-45 -translate-y-[6px]' : '',
            ].map((cls, i) => (
              <span
                key={i}
                className={`block w-6 h-px transition-all duration-300 ${cls}`}
                style={{ backgroundColor: hamColor }}
              />
            ))}
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: menuOpen ? '20rem' : '0',
            backgroundColor: '#F2EAD8',
            borderBottom: menuOpen ? '1px solid rgba(122,75,42,0.2)' : 'none',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {['Craft', 'Materials', 'Our People', 'Contact'].map((l) => (
              <a key={l} href="#" className="text-xs tracking-widest uppercase" style={{ color: 'rgba(28,20,14,0.65)' }}>{l}</a>
            ))}
            <Link to="/collection" className="text-xs tracking-widest uppercase" style={{ color: 'rgba(28,20,14,0.65)' }}>Collection</Link>
            <Link to="/people" className="text-xs tracking-widest uppercase" style={{ color: 'rgba(28,20,14,0.65)' }}>Our People</Link>
            <Link
              to="/collection"
              className="text-xs tracking-widest uppercase px-5 py-3 text-center"
              style={{ border: '1px solid #7A4B2A', color: '#7A4B2A' }}
            >
              Shop
            </Link>
          </div>
        </div>
      </header>

      {/* ── PAGE CONTENT ─────────────────────────────────────── */}
      <Outlet />

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="py-16 md:py-20" style={{ borderTop: '1px solid rgba(122,75,42,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="md:col-span-1">
              <div
                className="mb-4 tracking-[0.22em]"
                style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.4rem', color: '#7A4B2A' }}
              >
                {BRAND}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,14,0.48)' }}>
                Bespoke jute and hardwood goods. Made in Bangladesh. Built to last a lifetime.
              </p>
            </div>
            {[
              { heading: 'Collection', links: ['Jute Goods', 'Hardwood Craft', 'Accessories', 'Bespoke Orders'] },
              { heading: 'Studio', links: ['Our Story', 'Our People', 'Materials', 'Process'] },
              { heading: 'Contact', links: ['hello@koracraft.com', 'Stockists', 'Press', 'Wholesale'] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(28,20,14,0.35)' }}>
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(28,20,14,0.6)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#7A4B2A')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(28,20,14,0.6)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ borderTop: '1px solid rgba(122,75,42,0.15)' }}
          >
            <p className="text-xs tracking-wide" style={{ color: 'rgba(28,20,14,0.32)' }}>
              © 2026 KORA Craft Ltd. Dhaka, Bangladesh.
            </p>
            <p className="text-xs tracking-wide" style={{ color: 'rgba(28,20,14,0.32)' }}>
              Certified B Corp · Fair Trade · REACH Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
