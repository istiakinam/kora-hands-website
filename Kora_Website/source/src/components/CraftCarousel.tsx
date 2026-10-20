import { useState } from 'react'

const CRAFT_SLIDES = [
  {
    label: 'The Golden Fibre',
    headline: ['Jute woven', 'from the'],
    headlineAccent: 'delta itself.',
    body1: "Bangladesh's river delta — the largest on earth — nourishes jute of unmatched quality in mineral-rich alluvial soil. Harvested by hand at peak season, the raw fibre arrives at KORA's Narayanganj workshop within days of cutting, preserving its natural tensile strength.",
    body2: 'Our weavers work on handlooms unchanged for generations, producing textiles of a density and consistency that industrial mills cannot replicate. Every spool of jute thread is traceable to a named farm.',
    cta: 'Explore Jute →',
    stat: '1st',
    statLabel: "World's largest river delta",
    statBg: '#4A5E35',
    img1: 'https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=500&h=670&fit=crop&auto=format',
    img1Alt: 'Woman spinning jute thread on a traditional wooden wheel',
    img2: 'https://images.unsplash.com/photo-1763301745979-8f85a0faa817?w=500&h=340&fit=crop&auto=format',
    img2Alt: 'Workers unloading natural jute fibre from a boat on a Bangladesh riverbank',
  },
  {
    label: 'A Living Tradition',
    headline: ['Wood that', 'remembers'],
    headlineAccent: 'the forest.',
    body1: "Bangladesh's woodcarving tradition runs alongside its fibre crafts, largely unknown to the outside world. KORA's workshop in Khulna draws on generations of carvers who work without lathes or CNC machines — only mallets, chisels, and an intimate knowledge of grain.",
    body2: 'The result is organic accessories — bowls, trays, handles, frames — that carry the weight and warmth of living wood, finished with cold-pressed oils and nothing else.',
    cta: 'Explore Woodwork →',
    stat: '0%',
    statLabel: 'Synthetic finishes. Ever.',
    statBg: '#7A4B2A',
    img1: 'https://images.unsplash.com/photo-1705760058049-b58119c416a9?w=500&h=670&fit=crop&auto=format',
    img1Alt: 'Artisan cutting and shaping hardwood by hand with a carving knife',
    img2: 'https://images.unsplash.com/photo-1765120827963-765525471932?w=500&h=340&fit=crop&auto=format',
    img2Alt: 'Hand-turned wooden mortars and pestles on a workshop shelf',
  },
]

export default function CraftCarousel() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const slide = CRAFT_SLIDES[active]

  const goTo = (i: number) => {
    if (i === active || animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 320)
  }

  return (
    <section style={{ backgroundColor: '#F2EAD8', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs tracking-[0.38em] uppercase" style={{ color: 'rgba(28,20,14,0.35)' }}>
            Our Materials
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {CRAFT_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? '2rem' : '0.5rem',
                    height: '2px',
                    backgroundColor: i === active ? '#7A4B2A' : 'rgba(122,75,42,0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {(['←', '→'] as const).map((arrow, i) => (
                <button
                  key={arrow}
                  onClick={() => goTo((active + (i === 0 ? -1 : 1) + CRAFT_SLIDES.length) % CRAFT_SLIDES.length)}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid rgba(122,75,42,0.3)', color: '#7A4B2A' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#7A4B2A')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(122,75,42,0.3)')}
                  aria-label={i === 0 ? 'Previous' : 'Next'}
                >
                  {arrow}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>
              {slide.label}
            </p>
            <h2
              className="leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2.4rem,5vw,4.2rem)', color: '#1C140E' }}
            >
              {slide.headline[0]}<br />
              {slide.headline[1]}<br />
              <em className="not-italic" style={{ color: '#7A4B2A' }}>{slide.headlineAccent}</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(28,20,14,0.6)' }}>
              {slide.body1}
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(28,20,14,0.6)' }}>
              {slide.body2}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
              style={{ backgroundColor: '#1C140E', color: '#F2EAD8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3A2818')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C140E')}
            >
              {slide.cta}
            </a>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden" style={{ aspectRatio: '3/4', backgroundColor: '#E8DEC9' }}>
              <img src={slide.img1} alt={slide.img1Alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden" style={{ backgroundColor: '#E8DEC9' }}>
                <img src={slide.img2} alt={slide.img2Alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
              </div>
              <div className="flex flex-col justify-center p-5" style={{ backgroundColor: slide.statBg }}>
                <div style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', color: '#C4A67A', lineHeight: 1, marginBottom: '0.4rem' }}>
                  {slide.stat}
                </div>
                <p className="text-xs tracking-widest uppercase leading-relaxed" style={{ color: 'rgba(242,234,216,0.75)' }}>
                  {slide.statLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
