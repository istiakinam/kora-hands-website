import { useState } from 'react'

type Expertise = 'all' | 'jute' | 'wood'

interface Artisan {
  id: number
  name: string
  role: string
  origin: string
  region: string
  years: number
  joined: number
  expertise: 'jute' | 'wood'
  tags: string[]
  quote: string
  bio: string
  img: string
  alt: string
}

const ARTISANS: Artisan[] = [
  {
    id: 1,
    name: 'Karim Hossain',
    role: 'Jute Weave Specialist',
    origin: 'Narayanganj',
    region: 'Dhaka Division',
    years: 17,
    joined: 2008,
    expertise: 'jute',
    tags: ['Handloom Weaving', 'Double-ply Technique', 'Structural Weave'],
    quote: '"My father taught me to read the grain of the jute the way a musician reads notes. The fibre tells you how it wants to be woven."',
    bio: "Karim learned his craft at age twelve, working beside his father on a single handloom in a workshop off the Narayanganj riverbank. He specialises in the region's distinctive tight double-ply technique, producing jute textile of exceptional density and evenness. His pieces have been selected for KORA's Signature collection every year since 2012, and he trains two apprentices a year through KORA's cooperative programme.",
    img: 'https://images.unsplash.com/photo-1696628045025-ce19418d9475?w=700&h=880&fit=crop&auto=format',
    alt: 'Karim Hossain, jute weave specialist, in his Narayanganj workshop',
  },
  {
    id: 2,
    name: 'Taslima Akter',
    role: 'Natural Dye Artisan',
    origin: 'Sylhet',
    region: 'Sylhet Division',
    years: 11,
    joined: 2014,
    expertise: 'jute',
    tags: ['Indigo Dyeing', 'Botanical Pigments', 'Colour Development'],
    quote: '"The Meghna river gives us indigo and turmeric in colours no factory can copy. Our hands carry the knowledge of the delta."',
    bio: 'Taslima grew up gathering wild indigo and turmeric plants with her grandmother in the hills above Sylhet. She joined KORA after a decade of developing her own natural dye practice, bringing formulas for over forty stable botanical pigments to the collective. Every dyed jute piece in the KORA range passes through her workshop for final colour approval.',
    img: 'https://images.unsplash.com/photo-1602806271931-07e449a819bd?w=700&h=880&fit=crop&auto=format',
    alt: 'Taslima Akter, natural dye artisan, with botanical pigments in her Sylhet studio',
  },
  {
    id: 3,
    name: 'Nusrat Jahan',
    role: 'Master Weaver',
    origin: 'Tangail',
    region: 'Dhaka Division',
    years: 22,
    joined: 2006,
    expertise: 'jute',
    tags: ['Tangail Handloom', 'Warp Setting', 'Pattern Drafting'],
    quote: '"The loom I use now is the same one my mother worked on. The machine does not change — only the hand that guides it."',
    bio: 'Nusrat is KORA\'s longest-serving weaver and the guardian of the Tangail handloom tradition within the collective. She sets the warp for the workshop\'s most complex pattern orders and oversees quality across all jute textiles before they leave for finishing. In 2019 she was recognised by the Bangladesh Handloom Board as a master practitioner.',
    img: 'https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=700&h=880&fit=crop&auto=format',
    alt: 'Nusrat Jahan, master weaver, working at a traditional handloom in Tangail',
  },
  {
    id: 4,
    name: 'Farhana Begum',
    role: 'Jute Finishing Specialist',
    origin: 'Narayanganj',
    region: 'Dhaka Division',
    years: 8,
    joined: 2017,
    expertise: 'jute',
    tags: ['Surface Treatment', 'Beeswax Finishing', 'Quality Control'],
    quote: '"The final touch is invisible to the eye, but the hand always knows the difference. That is what finishing means."',
    bio: "Farhana joined KORA straight from the Narayanganj Textile Institute, where she graduated top of her cohort in fibre science. She developed KORA's signature cold-pressed beeswax finishing process, which stiffens storage baskets without changing their natural texture or biodegradability. She now leads quality control for all jute goods leaving the Narayanganj workshop.",
    img: 'https://images.unsplash.com/photo-1749835521236-d29d0004162d?w=700&h=880&fit=crop&auto=format',
    alt: 'Farhana Begum, jute finishing specialist, inspecting a woven piece in warm workshop light',
  },
  {
    id: 5,
    name: 'Jalal Uddin',
    role: 'Hardwood Carver',
    origin: 'Khulna',
    region: 'Khulna Division',
    years: 19,
    joined: 2006,
    expertise: 'wood',
    tags: ['Bowl Turning', 'Relief Carving', 'Linseed Finishing'],
    quote: '"A good carver never fights the wood. You find the shape that was already inside it and you release it, slowly."',
    bio: "Jalal learned to carve from his uncle, a furniture maker in the old quarter of Khulna, and spent six years working exclusively with Sundarbans hardwoods before joining KORA. He is responsible for the Meghna Bowl Set — KORA's most requested piece — and has since developed a signature shallow-relief surface technique used across the wood collection. He works entirely without electric tools.",
    img: 'https://images.unsplash.com/photo-1606077089838-0ac4a27fc96f?w=700&h=880&fit=crop&auto=format',
    alt: 'Jalal Uddin, hardwood carver, at his bench in the Khulna cooperative workshop',
  },
  {
    id: 6,
    name: 'Alam Hossain',
    role: 'Wood Turner & Joiner',
    origin: 'Khulna',
    region: 'Khulna Division',
    years: 26,
    joined: 2009,
    expertise: 'wood',
    tags: ['Hand Turning', 'Dovetail Joinery', 'Structural Forms'],
    quote: '"I have made the same dovetail joint ten thousand times. It has never been the same twice."',
    bio: "With over two decades of practice, Alam is the most technically experienced woodworker in the KORA collective. He trained under a traditional Khulna furniture master and specialises in joinery — the dovetail-joined boxes and structured tray forms in the collection are entirely his work. He chooses every piece of timber himself, reading grain and density by hand before a single cut is made.",
    img: 'https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?w=700&h=880&fit=crop&auto=format',
    alt: 'Alam Hossain, wood turner and joiner, working in his Khulna workshop',
  },
  {
    id: 7,
    name: 'Ruma Khatun',
    role: 'Coil Basket Artisan',
    origin: 'Sylhet',
    region: 'Sylhet Division',
    years: 13,
    joined: 2012,
    expertise: 'jute',
    tags: ['Coil Weaving', 'Structural Baskets', 'Natural Binding'],
    quote: '"Each basket starts with one loop. From there, everything follows. There is no shortcut and no machine that knows this."',
    bio: "Ruma is KORA's coil-weaving specialist, responsible for the Delta Planter Basket and the Sylhet Storage Basket lines. She developed her practice in Sylhet's long tradition of coil basketry, which uses a binding stitch passed through previous rows to build rigid, self-supporting walls. Her pieces require no internal frame and are finished with raw jute binding, entirely by hand.",
    img: 'https://images.unsplash.com/photo-1673339065092-e01d53e6a3a3?w=700&h=880&fit=crop&auto=format',
    alt: 'Ruma Khatun, coil basket artisan, working on a woven form in her Sylhet studio',
  },
  {
    id: 8,
    name: 'Mohammad Rubel',
    role: 'Wood Surface Finisher',
    origin: 'Chittagong',
    region: 'Chattogram Division',
    years: 14,
    joined: 2011,
    expertise: 'wood',
    tags: ['Cold-press Oiling', 'Surface Preparation', 'Natural Finishes'],
    quote: '"Oil and wood are a conversation. You apply, you wait, you listen. Rush it and the wood tells you."',
    bio: 'Rubel came to KORA from the Chittagong shipbuilding yards, where he spent eight years treating teak and hardwood in one of the most demanding finishing environments in the world. He brought this knowledge to the cooperative and developed the cold-pressed linseed finishing protocol used on every KORA wood piece — applied in multiple thin coats over three days, with hand-rubbing between each.',
    img: 'https://images.unsplash.com/photo-1630509866847-9c007e59a8ce?w=700&h=880&fit=crop&auto=format',
    alt: 'Mohammad Rubel, wood surface finisher, in the Chittagong cooperative workshop',
  },
]

const EXPERTISE_COLOR: Record<Artisan['expertise'], string> = {
  jute: '#4A5E35',
  wood: '#7A4B2A',
}

const EXPERTISE_LABEL: Record<Artisan['expertise'], string> = {
  jute: 'Jute',
  wood: 'Hardwood',
}

const WORKSHOPS = [
  { name: 'Narayanganj', division: 'Dhaka Division', count: 2, focus: 'Jute Weaving & Finishing' },
  { name: 'Tangail', division: 'Dhaka Division', count: 1, focus: 'Master Handloom Weaving' },
  { name: 'Sylhet', division: 'Sylhet Division', count: 2, focus: 'Coil Basketry & Natural Dye' },
  { name: 'Khulna', division: 'Khulna Division', count: 2, focus: 'Hardwood Carving & Joinery' },
  { name: 'Chittagong', division: 'Chattogram Division', count: 1, focus: 'Wood Finishing' },
]

export default function OurPeople() {
  const [filter, setFilter] = useState<Expertise>('all')

  const visible = ARTISANS.filter((a) => filter === 'all' || a.expertise === filter)

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '52vh', backgroundColor: '#1C140E' }}
      >
        <img
          src="https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=1600&h=800&fit=crop&auto=format"
          alt="Artisan at a traditional handloom in a Bangladesh cooperative workshop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,20,14,0.97) 0%, rgba(28,20,14,0.55) 60%, rgba(28,20,14,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
          <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#C4A67A' }}>
            KORA · The Collective
          </p>
          <h1
            className="mb-6"
            style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(3rem,8vw,6.5rem)', color: '#F2EAD8', lineHeight: 0.92 }}
          >
            Our People
          </h1>
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(242,234,216,0.58)' }}>
            340 artisans across six cooperative workshops. These are eight of them — introduced by their own words.
          </p>
        </div>
      </section>

      {/* ── COLLECTIVE STATS ────────────────────────────────── */}
      <section style={{ backgroundColor: '#F2EAD8', borderBottom: '1px solid rgba(122,75,42,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            {[
              { value: '340', label: 'Artisans in the collective' },
              { value: '6', label: 'Cooperative workshops' },
              { value: '2.4×', label: 'Local living wage paid' },
              { value: '18 yrs', label: 'Average years of experience' },
            ].map((stat, i) => (
              <div key={i} className="md:px-10 first:pl-0 last:pr-0 text-center md:text-left" style={{ borderRight: i < 3 ? '1px solid rgba(122,75,42,0.15)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', color: '#7A4B2A', lineHeight: 1, marginBottom: '0.4rem' }}>
                  {stat.value}
                </div>
                <p className="text-xs tracking-widest uppercase leading-relaxed" style={{ color: 'rgba(28,20,14,0.45)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────────── */}
      <div
        className="sticky z-40"
        style={{ top: '64px', backgroundColor: 'rgba(242,234,216,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(122,75,42,0.15)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center">
            {([
              { key: 'all', label: 'All Artisans' },
              { key: 'jute', label: 'Jute' },
              { key: 'wood', label: 'Hardwood' },
            ] as { key: Expertise; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="text-xs tracking-widest uppercase px-6 py-5 transition-all duration-200 whitespace-nowrap relative"
                style={{ color: filter === key ? '#7A4B2A' : 'rgba(28,20,14,0.4)', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                {label}
                {filter === key && (
                  <span className="absolute bottom-0 left-6 right-6 h-px" style={{ backgroundColor: '#7A4B2A' }} />
                )}
              </button>
            ))}
          </div>
          <p className="text-xs tracking-widest uppercase hidden md:block" style={{ color: 'rgba(28,20,14,0.3)' }}>
            {visible.length} {visible.length === 1 ? 'person' : 'people'}
          </p>
        </div>
      </div>

      {/* ── ARTISAN PROFILES ────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F2EAD8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-0">
            {visible.map((artisan, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={artisan.id}
                  className="grid md:grid-cols-5 gap-0"
                  style={{ borderBottom: '1px solid rgba(122,75,42,0.12)' }}
                >
                  {/* Image — alternates left/right */}
                  <div
                    className={`md:col-span-2 overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                    style={{ aspectRatio: '3/4', maxHeight: '540px', backgroundColor: '#E8DEC9' }}
                  >
                    <img
                      src={artisan.img}
                      alt={artisan.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Info panel */}
                  <div
                    className={`md:col-span-3 flex flex-col justify-center py-12 md:py-16 ${isEven ? 'md:order-2 md:pl-14 md:pr-0' : 'md:order-1 md:pr-14 md:pl-0'}`}
                  >
                    {/* Expertise + origin tags */}
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="text-xs tracking-widest uppercase px-3 py-1"
                        style={{ backgroundColor: EXPERTISE_COLOR[artisan.expertise], color: '#F2EAD8' }}
                      >
                        {EXPERTISE_LABEL[artisan.expertise]}
                      </span>
                      <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(28,20,14,0.4)' }}>
                        {artisan.origin} · {artisan.region}
                      </span>
                    </div>

                    {/* Name */}
                    <h2
                      className="mb-1"
                      style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', color: '#1C140E', lineHeight: 1.05 }}
                    >
                      {artisan.name}
                    </h2>
                    <p className="text-sm tracking-widest uppercase mb-8" style={{ color: '#7A4B2A' }}>
                      {artisan.role}
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-8 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(122,75,42,0.15)' }}>
                      <div>
                        <p style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.6rem', color: '#1C140E', lineHeight: 1 }}>
                          {artisan.years}
                        </p>
                        <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(28,20,14,0.4)' }}>
                          Years experience
                        </p>
                      </div>
                      <div style={{ borderLeft: '1px solid rgba(122,75,42,0.15)', paddingLeft: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.6rem', color: '#1C140E', lineHeight: 1 }}>
                          {artisan.joined}
                        </p>
                        <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(28,20,14,0.4)' }}>
                          Joined KORA
                        </p>
                      </div>
                      <div style={{ borderLeft: '1px solid rgba(122,75,42,0.15)', paddingLeft: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.6rem', color: '#1C140E', lineHeight: 1 }}>
                          {artisan.origin}
                        </p>
                        <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(28,20,14,0.4)' }}>
                          Place of origin
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote
                      className="mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(1rem,1.4vw,1.2rem)', color: '#7A4B2A', fontStyle: 'italic' }}
                    >
                      {artisan.quote}
                    </blockquote>

                    {/* Bio */}
                    <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(28,20,14,0.6)', maxWidth: '46ch' }}>
                      {artisan.bio}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2">
                      {artisan.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase px-3 py-1.5"
                          style={{ border: '1px solid rgba(122,75,42,0.25)', color: 'rgba(28,20,14,0.5)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WORKSHOPS MAP ───────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C140E', color: '#F2EAD8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#C4A67A' }}>
                Where We Work
              </p>
              <h2
                className="leading-[1.0]"
                style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#F2EAD8' }}
              >
                Six workshops.<br />One collective.
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: 'rgba(242,234,216,0.42)' }}>
              Each workshop is independently governed by its artisans and connected through KORA's shared quality and trade standards.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-px" style={{ backgroundColor: 'rgba(242,234,216,0.08)' }}>
            {WORKSHOPS.map((ws, i) => (
              <div
                key={i}
                className="p-7 transition-colors duration-300"
                style={{ backgroundColor: '#1C140E' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2A1F14')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C140E')}
              >
                <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: 'rgba(242,234,216,0.3)' }}>
                  {ws.division}
                </p>
                <h3
                  className="mb-1"
                  style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.3rem', color: '#F2EAD8', lineHeight: 1.1 }}
                >
                  {ws.name}
                </h3>
                <p className="text-xs mb-4" style={{ color: 'rgba(242,234,216,0.4)' }}>{ws.focus}</p>
                <div style={{ width: '1.5rem', height: '1px', backgroundColor: '#C4A67A', marginBottom: '0.75rem' }} />
                <p style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.5rem', color: '#C4A67A', lineHeight: 1 }}>
                  {ws.count === 1 ? '' : ws.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F2EAD8', borderTop: '1px solid rgba(122,75,42,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <p className="text-xs tracking-[0.38em] uppercase mb-5" style={{ color: '#7A4B2A' }}>
                Work With Us
              </p>
              <h2
                className="leading-[1.0] mb-8"
                style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1C140E' }}
              >
                The collective<br />
                <em className="not-italic" style={{ color: '#7A4B2A' }}>is always growing.</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(28,20,14,0.6)', maxWidth: '44ch' }}>
                KORA accepts applications from artisans across Bangladesh year-round. We look for depth of practice, not formal credentials — a minimum of five years working with jute or hardwood in a traditional setting.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(28,20,14,0.6)', maxWidth: '44ch' }}>
                Accepted artisans join a cooperative that sets its own quality standards, shares revenue fairly, and contributes to training the next generation.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
                style={{ backgroundColor: '#1C140E', color: '#F2EAD8' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3A2818')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C140E')}
              >
                Apply to the Collective →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{ aspectRatio: '3/4', backgroundColor: '#E8DEC9' }}>
                <img
                  src="https://images.unsplash.com/photo-1705760058049-b58119c416a9?w=500&h=670&fit=crop&auto=format"
                  alt="Artisan carving hardwood by hand in a cooperative workshop"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="overflow-hidden" style={{ backgroundColor: '#E8DEC9' }}>
                  <img
                    src="https://images.unsplash.com/photo-1560447946-4d1c0eb6ba04?w=500&h=300&fit=crop&auto=format"
                    alt="Artisan working with natural rope and fibre in Bangladesh"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-5" style={{ backgroundColor: '#4A5E35' }}>
                  <div style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.8rem', color: '#C4A67A', lineHeight: 1, marginBottom: '0.35rem' }}>5 yrs</div>
                  <p className="text-xs tracking-widest uppercase leading-relaxed" style={{ color: 'rgba(242,234,216,0.7)' }}>
                    Minimum practice to apply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
