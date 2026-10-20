import { Link } from 'react-router'
import CraftCarousel from '../components/CraftCarousel'

const STATS = [
  { value: '400+', label: 'Years of Craft Heritage' },
  { value: '340', label: 'Artisans Employed Directly' },
  { value: '100%', label: 'Natural, Traceable Materials' },
]

const ADVANTAGES = [
  {
    title: 'The Golden Fibre Belt',
    body: "Bangladesh's river delta — the world's largest — nourishes jute in mineral-rich alluvial soil fed by the Ganges, Brahmaputra, and Meghna. No other geography produces fibre of this tensile strength and natural lustre.",
    glyph: '◈',
  },
  {
    title: 'A Living Weave Tradition',
    body: "Bangladesh's handloom weaving tradition stretches back centuries. Artisans in Narayanganj and Tangail work on looms unchanged in design for generations, producing textiles of a density and rhythm that industrial mills have never replicated.",
    glyph: '◉',
  },
  {
    title: 'Sundarbans Hardwood Legacy',
    body: "The forests bordering Bangladesh yield dense, close-grained hardwoods worked by woodcarvers whose techniques predate colonial trade. Each piece of KORA woodwork carries the grain of a specific tree, hand-finished with cold-pressed linseed oil.",
    glyph: '◇',
  },
]

const ARTISANS = [
  {
    name: 'Karim Hossain',
    role: 'Jute Weave Specialist',
    tenure: '17 years with KORA',
    quote: '"My father taught me to read the grain of the jute the way a musician reads notes. The fibre tells you how it wants to be woven."',
    img: 'https://images.unsplash.com/photo-1696628045025-ce19418d9475?w=500&h=620&fit=crop&auto=format',
  },
  {
    name: 'Taslima Akter',
    role: 'Natural Dye Artisan',
    tenure: '11 years with KORA',
    quote: '"The Meghna river gives us indigo and turmeric in colours no factory can copy. Our hands carry the knowledge of the delta."',
    img: 'https://images.unsplash.com/photo-1602806271931-07e449a819bd?w=500&h=620&fit=crop&auto=format',
  },
  {
    name: 'Jalal Uddin',
    role: 'Hardwood Carver',
    tenure: '19 years with KORA',
    quote: '"A good carver never fights the wood. You find the shape that was already inside it and you release it, slowly."',
    img: 'https://images.unsplash.com/photo-1606077089838-0ac4a27fc96f?w=500&h=620&fit=crop&auto=format',
  },
]

const PRODUCTS = [
  {
    name: 'Barishal Market Tote',
    material: 'Hand-woven natural jute',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Narayanganj Carry Bag',
    material: 'Double-ply woven jute',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1776219189008-b80cc6081517?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Delta Planter Basket',
    material: 'Raw jute, undyed',
    tag: 'Limited',
    img: 'https://images.unsplash.com/photo-1659520709425-31b547254b59?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Meghna Bowl Set',
    material: 'Hand-carved hardwood, linseed-oiled',
    tag: 'Craft',
    img: 'https://images.unsplash.com/photo-1765120827286-5bf71b7c50e0?w=600&h=750&fit=crop&auto=format',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative flex items-end" style={{ height: '100svh', minHeight: '600px' }}>
        <div className="absolute inset-0" style={{ backgroundColor: '#2A180C' }}>
          <img
            src="https://images.unsplash.com/photo-1643309053949-99eb896aec0a?w=1800&h=1100&fit=crop&auto=format"
            alt="Artisan weaving jute on a traditional handloom in a Bangladesh workshop"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(28,20,14,0.95) 0%, rgba(28,20,14,0.65) 45%, rgba(28,20,14,0.35) 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="text-xs tracking-[0.38em] uppercase mb-6" style={{ color: '#C4A67A' }}>
            Dhaka · Est. 2009
          </p>
          <h1
            className="leading-[0.88] mb-8"
            style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(3.2rem,9vw,7.5rem)', color: '#F2EAD8' }}
          >
            Made by<br />
            <em className="not-italic" style={{ color: '#C4A67A' }}>hands</em><br />
            that know.
          </h1>
          <p className="text-base md:text-lg max-w-xl mb-10 leading-relaxed" style={{ color: 'rgba(232,222,201,0.78)' }}>
            KORA crafts premium jute and hardwood goods from the workshops of Bangladesh — where centuries of skill meet the world's finest natural materials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/collection"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-300"
              style={{ backgroundColor: '#7A4B2A', color: '#F2EAD8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9A6040')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7A4B2A')}
            >
              Explore Collection <span>→</span>
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-300"
              style={{ border: '1px solid rgba(242,234,216,0.4)', color: '#F2EAD8' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(242,234,216,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(242,234,216,0.4)')}
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3" style={{ color: 'rgba(242,234,216,0.45)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ backgroundColor: 'rgba(242,234,216,0.2)' }}>
            <div className="absolute top-0 left-0 w-full" style={{ height: '40%', backgroundColor: '#C4A67A', animation: 'scrollLine 2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#7A4B2A', color: '#F2EAD8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="py-8 md:py-0 md:px-12 text-center md:text-left"
                style={{ borderRight: i < 2 ? '1px solid rgba(242,234,216,0.18)' : 'none', borderBottom: '1px solid rgba(242,234,216,0.18)' }}
              >
                <div className="mb-2" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#C4A67A' }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(242,234,216,0.65)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANGLADESH ADVANTAGE ────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-20">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>Why Bangladesh</p>
              <h2
                className="leading-[1.0] mb-8"
                style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.4rem,5vw,4.5rem)', color: '#1C140E' }}
              >
                Where the earth<br />
                <em className="not-italic" style={{ color: '#7A4B2A' }}>gives generously.</em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(28,20,14,0.6)' }}>
                Bangladesh's river delta — the largest on earth — creates conditions that cannot be replicated. Rich alluvial soil nourishes jute of unmatched quality. Dense forest hardwoods, worked for centuries by carvers near the Sundarbans, yield organic accessories of rare grain and weight. An artisan class refined across generations makes objects that industrial factories cannot match.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/3', backgroundColor: '#E8DEC9' }}>
                <img
                  src="https://images.unsplash.com/photo-1763301745979-8f85a0faa817?w=900&h=680&fit=crop&auto=format"
                  alt="Workers unloading natural fibre from a boat on a Bangladesh riverbank"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6" style={{ backgroundColor: '#4A5E35', maxWidth: '180px' }}>
                <div style={{ fontFamily: 'var(--font-family-display)', fontSize: '2.2rem', color: '#C4A67A', marginBottom: '0.25rem' }}>1st</div>
                <div className="text-xs tracking-widest uppercase leading-relaxed" style={{ color: 'rgba(242,234,216,0.8)' }}>Largest river delta on earth</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3" style={{ border: '1px solid rgba(122,75,42,0.15)' }}>
            {ADVANTAGES.map((adv, i) => (
              <div
                key={i}
                className="p-8 md:p-10 transition-colors duration-300"
                style={{ backgroundColor: '#F2EAD8', borderRight: i < 2 ? '1px solid rgba(122,75,42,0.15)' : 'none', cursor: 'default' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EDE5D4')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F2EAD8')}
              >
                <div className="text-2xl mb-6" style={{ color: '#7A4B2A' }}>{adv.glyph}</div>
                <h3 className="mb-4" style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.3rem', color: '#1C140E' }}>{adv.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,14,0.58)' }}>{adv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFT / PROCESS ─────────────────────────────────── */}
      <section className="py-24 md:py-36 overflow-hidden" style={{ backgroundColor: '#1C140E', color: '#F2EAD8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#C4A67A' }}>The Making</p>
              <h2 className="leading-[1.0]" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}>
                Craft that takes<br />its time.
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: 'rgba(242,234,216,0.45)' }}>
              Each KORA piece — jute or wood — passes through no fewer than 14 pairs of hands before it reaches yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden" style={{ aspectRatio: '4/3', backgroundColor: '#2A1F14' }}>
              <img
                src="https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?w=900&h=680&fit=crop&auto=format"
                alt="Traditional craft tools arranged on a workshop bench"
                className="w-full h-full object-cover transition-all duration-700"
                style={{ opacity: 0.85 }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1)' }}
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="overflow-hidden" style={{ backgroundColor: '#2A1F14' }}>
                <img
                  src="https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=900&h=400&fit=crop&auto=format"
                  alt="Woman spinning thread on a traditional wooden wheel — jute processing"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ opacity: 0.85 }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between" style={{ backgroundColor: '#4A5E35' }}>
                <div style={{ fontFamily: 'var(--font-family-display)', fontSize: '4rem', color: 'rgba(242,234,216,0.15)', lineHeight: 1 }}>14</div>
                <div>
                  <p className="mb-3" style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.3rem', color: '#F2EAD8' }}>From field to finished.</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,234,216,0.6)' }}>
                    Jute harvested at peak season. Hardwood sourced from certified sustainable forests. Every joint hand-stitched with linen thread that outlasts the owner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRAFT CAROUSEL ──────────────────────────────────── */}
      <CraftCarousel />

      {/* ── ARTISANS ────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>The People</p>
            <h2 className="leading-[1.0]" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.4rem,5vw,4.5rem)', color: '#1C140E' }}>
              The hands<br />
              behind <em className="not-italic" style={{ color: '#7A4B2A' }}>KORA.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTISANS.map((artisan, i) => (
              <div key={i} className="group" style={{ cursor: 'default' }}>
                <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '5/6', backgroundColor: '#E8DEC9' }}>
                  <img
                    src={artisan.img}
                    alt={`${artisan.name}, ${artisan.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to top, rgba(28,20,14,0.75) 0%, transparent 60%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(242,234,216,0.9)' }}>{artisan.quote}</p>
                  </div>
                </div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#7A4B2A' }}>{artisan.tenure}</p>
                <h3 className="mb-1" style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.25rem', color: '#1C140E' }}>{artisan.name}</h3>
                <p className="text-sm" style={{ color: 'rgba(28,20,14,0.5)' }}>{artisan.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ borderTop: '1px solid rgba(122,75,42,0.2)' }}>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(28,20,14,0.58)' }}>
              KORA employs 340 artisans across six cooperative workshops in Dhaka, Narayanganj, and Sylhet. Every artisan earns 2.4× the local living wage and shares in the collective's annual surplus.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase px-7 py-3 transition-all duration-300 shrink-0"
              style={{ border: '1px solid #7A4B2A', color: '#7A4B2A' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7A4B2A'; e.currentTarget.style.color = '#F2EAD8' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#7A4B2A' }}
            >
              Meet Everyone →
            </a>
          </div>
        </div>
      </section>

      {/* ── MATERIALS SPLIT ─────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative group overflow-hidden" style={{ minHeight: '560px', backgroundColor: '#243316' }}>
            <img
              src="https://images.unsplash.com/photo-1774423577236-90c0c8aedde4?w=700&h=1100&fit=crop&auto=format"
              alt="Calm Bangladesh riverbank where jute grows in mineral-rich delta soil"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
              style={{ opacity: 0.48 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,40,18,0.85) 0%, rgba(28,40,18,0.2) 55%, transparent 100%)' }} />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full">
              <p className="text-xs tracking-[0.38em] uppercase mb-4" style={{ color: '#C4A67A' }}>Material No. 01</p>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.2rem,3vw,3.2rem)', color: '#F2EAD8', lineHeight: 1.0 }}>
                Golden<br />Jute
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,234,216,0.65)' }}>
                Grown in the Brahmaputra floodplain and harvested by hand at peak season. The strongest natural plant fibre on earth, and entirely biodegradable.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden" style={{ minHeight: '560px', backgroundColor: '#1E1508' }}>
            <img
              src="https://images.unsplash.com/photo-1497219055242-93359eeed651?w=700&h=1100&fit=crop&auto=format"
              alt="Artisan using a chisel to carve organic hardwood in the KORA workshop"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
              style={{ opacity: 0.52 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,12,4,0.88) 0%, rgba(20,12,4,0.25) 55%, transparent 100%)' }} />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full">
              <p className="text-xs tracking-[0.38em] uppercase mb-4" style={{ color: '#C4A67A' }}>Material No. 02</p>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.2rem,3vw,3.2rem)', color: '#F2EAD8', lineHeight: 1.0 }}>
                Sundarbans<br />Hardwood
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,234,216,0.65)' }}>
                Dense, close-grained timber harvested from certified sustainable forests. Hand-carved and cold-pressed with linseed oil — each piece bears the unrepeatable grain of a single tree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>Current Collection</p>
              <h2 className="leading-[1.0]" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.4rem,5vw,4.5rem)', color: '#1C140E' }}>
                Objects made<br />to be kept.
              </h2>
            </div>
            <Link
              to="/collection"
              className="text-sm tracking-widest uppercase transition-opacity duration-200 hover:opacity-60 shrink-0"
              style={{ color: '#7A4B2A', borderBottom: '1px solid #7A4B2A', paddingBottom: '2px' }}
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {PRODUCTS.map((product, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '4/5', backgroundColor: '#E8DEC9' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 text-xs tracking-widest uppercase px-3 py-1" style={{ backgroundColor: '#7A4B2A', color: '#F2EAD8' }}>
                    {product.tag}
                  </div>
                  <Link
                    to="/collection"
                    className="absolute bottom-4 left-4 right-4 text-sm tracking-widest uppercase py-3 text-center transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    style={{ backgroundColor: '#1C140E', color: '#F2EAD8' }}
                  >
                    Enquire
                  </Link>
                </div>
                <h3 className="mb-1" style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.2rem', color: '#1C140E' }}>{product.name}</h3>
                <p className="text-sm" style={{ color: 'rgba(28,20,14,0.5)' }}>{product.material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL QUOTE ─────────────────────────────────── */}
      <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#4A5E35', color: '#F2EAD8' }}>
        <div className="absolute top-0 left-0 select-none pointer-events-none" style={{ fontFamily: 'var(--font-family-display)', fontSize: '22vw', lineHeight: 0.8, color: 'rgba(242,234,216,0.06)' }}>"</div>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <p className="leading-[1.2] mb-10" style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(1.7rem,3.8vw,3.2rem)', color: '#F2EAD8' }}>
            "KORA doesn't make luxury for display. It makes objects that become better through use — things that carry the story of the hands that made them and the life that wore them."
          </p>
          <div className="w-12 h-px mx-auto mb-5" style={{ backgroundColor: '#C4A67A' }} />
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(242,234,216,0.55)' }}>Wallpaper*, Winter 2024</p>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ borderBottom: '1px solid rgba(122,75,42,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>Stay Close</p>
              <h2 style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: '#1C140E' }}>
                Letters from the workshop.
              </h2>
            </div>
            <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 text-sm focus:outline-none transition-colors duration-200"
                style={{ backgroundColor: 'transparent', border: '1px solid rgba(122,75,42,0.35)', color: '#1C140E' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#7A4B2A')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(122,75,42,0.35)')}
              />
              <button
                type="submit"
                className="text-xs tracking-widest uppercase px-7 py-4 transition-colors duration-300 whitespace-nowrap"
                style={{ backgroundColor: '#7A4B2A', color: '#F2EAD8' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9A6040')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7A4B2A')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
