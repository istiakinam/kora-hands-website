import { useState } from 'react'

type Category = 'all' | 'jute' | 'wood'

interface Product {
  id: number
  name: string
  descriptor: string
  dims: string
  category: 'jute' | 'wood'
  featured: boolean
  img: string
  alt: string
  origin: string
}

const JUTE: Product[] = [
  {
    id: 1,
    name: 'Barishal Market Tote',
    descriptor: 'Hand-woven natural jute, double-ply weave',
    dims: '38 × 42 cm',
    category: 'jute',
    featured: true,
    img: 'https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?w=900&h=600&fit=crop&auto=format',
    alt: 'Hand-woven jute market tote on natural grass',
    origin: 'Narayanganj Workshop',
  },
  {
    id: 2,
    name: 'Narayanganj Carry Bag',
    descriptor: 'Knotted jute handles, reinforced coil base',
    dims: '34 × 38 cm',
    category: 'jute',
    featured: false,
    img: 'https://images.unsplash.com/photo-1776219189008-b80cc6081517?w=600&h=750&fit=crop&auto=format',
    alt: 'Two hand-woven jute carry bags hanging on a wall',
    origin: 'Narayanganj Workshop',
  },
  {
    id: 3,
    name: 'Delta Planter Basket',
    descriptor: 'Raw undyed jute, coil-wound base',
    dims: '28 cm diameter · H 32 cm',
    category: 'jute',
    featured: false,
    img: 'https://images.unsplash.com/photo-1659520709425-31b547254b59?w=600&h=750&fit=crop&auto=format',
    alt: 'Natural jute basket holding a plant',
    origin: 'Sylhet Cooperative',
  },
  {
    id: 4,
    name: 'Tangail Placemat Set',
    descriptor: 'Set of 4 · tight spiral weave · undyed',
    dims: '36 cm diameter each',
    category: 'jute',
    featured: false,
    img: 'https://images.unsplash.com/photo-1756362398677-4fd1a4f9f64b?w=600&h=750&fit=crop&auto=format',
    alt: 'Two woven round jute placemats on a textured surface',
    origin: 'Tangail Workshop',
  },
  {
    id: 5,
    name: 'Sylhet Storage Basket',
    descriptor: 'Stiffened jute coil, cold-pressed beeswax finish',
    dims: '40 × 30 cm',
    category: 'jute',
    featured: false,
    img: 'https://images.unsplash.com/photo-1604300026894-75f90702c181?w=600&h=750&fit=crop&auto=format',
    alt: 'Woven wicker storage basket on a wooden table',
    origin: 'Sylhet Cooperative',
  },
  {
    id: 6,
    name: 'Meghna Coaster Set',
    descriptor: 'Set of 6 · tight spiral weave · reversible',
    dims: '10 cm diameter each',
    category: 'jute',
    featured: false,
    img: 'https://images.unsplash.com/photo-1756364896972-4234d1b6113c?w=600&h=750&fit=crop&auto=format',
    alt: 'Close-up of a hand-woven jute coaster with spiral pattern',
    origin: 'Narayanganj Workshop',
  },
]

const WOOD: Product[] = [
  {
    id: 7,
    name: 'Meghna Bowl Set',
    descriptor: 'Set of 3 hand-carved hardwood bowls, linseed-oiled',
    dims: 'S 12 · M 18 · L 24 cm diameter',
    category: 'wood',
    featured: true,
    img: 'https://images.unsplash.com/photo-1765120827286-5bf71b7c50e0?w=900&h=600&fit=crop&auto=format',
    alt: 'Three hand-carved wooden bowls with natural grain patterns',
    origin: 'Khulna Workshop',
  },
  {
    id: 8,
    name: 'Sundarbans Serving Tray',
    descriptor: 'Hand-carved oval tray, cold-pressed linseed finish',
    dims: '45 × 28 cm',
    category: 'wood',
    featured: false,
    img: 'https://images.unsplash.com/photo-1783508905273-9634d536c6fe?w=600&h=750&fit=crop&auto=format',
    alt: 'Oval wooden serving tray surrounded by red carnation flowers',
    origin: 'Khulna Workshop',
  },
  {
    id: 9,
    name: 'Khulna Mortar & Pestle',
    descriptor: 'Dense single-piece hardwood, traditional form',
    dims: 'H 12 cm · Ø 10 cm',
    category: 'wood',
    featured: false,
    img: 'https://images.unsplash.com/photo-1765120827963-765525471932?w=600&h=750&fit=crop&auto=format',
    alt: 'Several hand-turned wooden mortars and pestles on a shelf',
    origin: 'Khulna Workshop',
  },
  {
    id: 10,
    name: 'Delta Fruit Bowl',
    descriptor: 'Single-piece carved hardwood, deep wide rim',
    dims: '32 cm diameter · H 14 cm',
    category: 'wood',
    featured: false,
    img: 'https://images.unsplash.com/photo-1658280388403-09f61d0eb311?w=600&h=750&fit=crop&auto=format',
    alt: 'Carved wooden bowl holding fresh apples',
    origin: 'Chittagong Workshop',
  },
  {
    id: 11,
    name: 'Baridhara Keepsake Box',
    descriptor: 'Dovetail-joined hardwood, handmade brass clasp',
    dims: '22 × 15 × 10 cm',
    category: 'wood',
    featured: false,
    img: 'https://images.unsplash.com/photo-1549315393-aeac60e09d29?w=600&h=750&fit=crop&auto=format',
    alt: 'Rectangular wooden keepsake box on a table',
    origin: 'Chittagong Workshop',
  },
  {
    id: 12,
    name: 'Chittagong Trinket Box',
    descriptor: 'Sectioned interior, hand-planed lid, oiled finish',
    dims: '18 × 12 × 8 cm',
    category: 'wood',
    featured: false,
    img: 'https://images.unsplash.com/photo-1672664003230-106aa4f534c7?w=600&h=750&fit=crop&auto=format',
    alt: 'Small wooden trinket box on a wooden surface',
    origin: 'Chittagong Workshop',
  },
]

const ALL = [...JUTE, ...WOOD]

const CATEGORY_META = {
  jute: {
    label: 'Jute',
    tag: 'Material No. 01',
    headline: 'The Golden Fibre',
    descriptor: "Harvested by hand from Bangladesh's river delta floodplain — the world's finest natural plant fibre, woven on handlooms unchanged for centuries.",
    accentBg: '#4A5E35',
  },
  wood: {
    label: 'Hardwood',
    tag: 'Material No. 02',
    headline: 'Sundarbans Wood',
    descriptor: 'Dense, close-grained hardwood worked by carvers in Khulna and Chittagong — shaped without lathes, finished only with cold-pressed linseed oil.',
    accentBg: '#7A4B2A',
  },
}

function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      style={{ cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden mb-5"
        style={{
          aspectRatio: large ? '16/9' : '4/5',
          backgroundColor: '#E8DEC9',
        }}
      >
        <img
          src={product.img}
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: 'linear-gradient(to top, rgba(28,20,14,0.7) 0%, transparent 50%)',
            opacity: hovered ? 1 : 0,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 px-5 pb-5 transition-all duration-400"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(6px)' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            style={{ backgroundColor: '#F2EAD8', color: '#1C140E' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7A4B2A'; e.currentTarget.style.color = '#F2EAD8' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F2EAD8'; e.currentTarget.style.color = '#1C140E' }}
          >
            Enquire About This Piece →
          </a>
        </div>
      </div>
      <div className="pt-1">
        <h3
          className="mb-1"
          style={{ fontFamily: 'var(--font-family-display)', fontSize: large ? '1.4rem' : '1.1rem', color: '#1C140E', lineHeight: 1.2 }}
        >
          {product.name}
        </h3>
        <p className="text-sm mb-1" style={{ color: 'rgba(28,20,14,0.52)' }}>{product.descriptor}</p>
        <p className="text-xs tracking-wider mb-2" style={{ color: 'rgba(28,20,14,0.38)' }}>{product.dims}</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: '#7A4B2A' }}>{product.origin}</p>
      </div>
    </div>
  )
}

function CategorySection({ category }: { category: 'jute' | 'wood' }) {
  const products = category === 'jute' ? JUTE : WOOD
  const meta = CATEGORY_META[category]
  const [featured, ...rest] = products

  return (
    <div className="mb-24 md:mb-36">
      {/* Section header */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 pb-8 gap-6"
        style={{ borderBottom: '1px solid rgba(122,75,42,0.18)' }}
      >
        <div>
          <p className="text-xs tracking-[0.38em] uppercase mb-3" style={{ color: '#7A4B2A' }}>
            {meta.tag}
          </p>
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1C140E', lineHeight: 1.0 }}
          >
            {meta.headline}
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(28,20,14,0.58)' }}>
            {meta.descriptor}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: meta.accentBg }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(28,20,14,0.4)' }}>
            {products.length} pieces
          </span>
        </div>
      </div>

      {/* Featured wide card */}
      <div className="mb-6">
        <ProductCard product={featured} large />
      </div>

      {/* Grid of remaining cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {rest.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default function Collection() {
  const [filter, setFilter] = useState<Category>('all')

  const visibleJute = filter === 'all' || filter === 'jute'
  const visibleWood = filter === 'all' || filter === 'wood'

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '52vh', backgroundColor: '#1C140E' }}
      >
        <img
          src="https://images.unsplash.com/photo-1497219055242-93359eeed651?w=1600&h=800&fit=crop&auto=format"
          alt="Artisan carving hardwood with a chisel in a Khulna workshop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.28 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,20,14,0.96) 0%, rgba(28,20,14,0.5) 60%, rgba(28,20,14,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
          <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#C4A67A' }}>
            KORA · Full Catalogue
          </p>
          <h1
            className="mb-6"
            style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(3rem,8vw,6.5rem)', color: '#F2EAD8', lineHeight: 0.92 }}
          >
            Collection
          </h1>
          <p className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: 'rgba(242,234,216,0.6)' }}>
            Two materials. Infinite variation. Every piece made by hand in Bangladesh and available for bespoke order.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────────── */}
      <div
        className="sticky z-40"
        style={{ top: '64px', backgroundColor: 'rgba(242,234,216,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(122,75,42,0.15)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-0 overflow-x-auto">
            {([
              { key: 'all', label: 'All Pieces' },
              { key: 'jute', label: 'Jute' },
              { key: 'wood', label: 'Hardwood' },
            ] as { key: Category; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="text-xs tracking-widest uppercase px-6 py-5 transition-all duration-200 whitespace-nowrap relative shrink-0"
                style={{
                  color: filter === key ? '#7A4B2A' : 'rgba(28,20,14,0.45)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {label}
                {filter === key && (
                  <span
                    className="absolute bottom-0 left-6 right-6 h-px"
                    style={{ backgroundColor: '#7A4B2A' }}
                  />
                )}
              </button>
            ))}
            <div className="flex-1" />
            <p className="text-xs tracking-widest uppercase shrink-0 hidden md:block" style={{ color: 'rgba(28,20,14,0.3)' }}>
              {filter === 'all' ? `${ALL.length} pieces` : filter === 'jute' ? `${JUTE.length} pieces` : `${WOOD.length} pieces`}
            </p>
          </div>
        </div>
      </div>

      {/* ── CATALOGUE ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {visibleJute && <CategorySection category="jute" />}
          {visibleWood && <CategorySection category="wood" />}
        </div>
      </section>

      {/* ── BESPOKE CTA ─────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: '#1C140E' }}
      >
        <div
          className="absolute inset-0 select-none pointer-events-none"
          style={{ fontFamily: 'var(--font-family-display)', fontSize: '28vw', lineHeight: 0.8, color: 'rgba(242,234,216,0.03)', overflow: 'hidden' }}
        >
          KORA
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <p className="text-xs tracking-[0.38em] uppercase mb-6" style={{ color: '#C4A67A' }}>
            Bespoke Orders
          </p>
          <h2
            className="mb-8 leading-[1.0]"
            style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', color: '#F2EAD8' }}
          >
            Every piece can be<br />
            <em className="not-italic" style={{ color: '#C4A67A' }}>made for you.</em>
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: 'rgba(242,234,216,0.55)' }}
          >
            Commission a custom size, adapt a weave pattern, or request a specific grain selection. Our workshops in Dhaka, Narayanganj, and Khulna work directly with clients for pieces that cannot be found anywhere else.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
              style={{ backgroundColor: '#7A4B2A', color: '#F2EAD8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9A6040')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7A4B2A')}
            >
              Send an Enquiry →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
              style={{ border: '1px solid rgba(242,234,216,0.25)', color: '#F2EAD8' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(242,234,216,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(242,234,216,0.25)')}
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
