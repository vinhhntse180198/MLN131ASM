import AnimatedImage from '../components/AnimatedImage.jsx'
import { Reveal } from '../components/Reveal.jsx'
import ScrollRevealSection from '../components/ScrollRevealSection.jsx'
import { etymology, hoChiMinh, marxLenin, pageIntro } from '../data/chuong4KhaiNiem.js'

export default function KhaiNiemPage() {
  const ml = marxLenin
  const hcm = hoChiMinh

  return (
    <div className="c4-container">
      <Reveal as="header" className="c4-page-hero">
        <h1>{pageIntro.title}</h1>
      </Reveal>

      <ScrollRevealSection
        className="c4-etymology"
        variant="split"
        aria-labelledby="etymology-title"
      >
        <div className="c4-etymology__text">
          <div className="c4-scroll-reveal-item">
            <h2 id="etymology-title" style={{ fontSize: '1.15rem', marginTop: 0 }}>
              📜 {etymology.title}
            </h2>
            <p style={{ color: 'var(--c4-muted)', lineHeight: 1.65 }}>{etymology.intro}</p>
          </div>
          <div className="c4-scroll-reveal-item c4-etymology__box">
            <h4>Demoskratos</h4>
            <ul>
              {etymology.terms.map((t) => (
                <li key={t.term}>
                  <strong>{t.term}</strong> — {t.meaning}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AnimatedImage
          src={etymology.imageUrl}
          alt="Đền Parthenon — Athens"
          motion="ken-burns"
          deferReveal
          className="c4-img-frame"
          caption={etymology.imageCaption}
        />
      </ScrollRevealSection>

      <ScrollRevealSection
        className="c4-section c4-section--soft"
        variant="up"
        aria-labelledby="ml-title"
      >
        <h2 id="ml-title" className="c4-scroll-reveal-item">
          {ml.title}
        </h2>
        <p className="c4-section__lead c4-scroll-reveal-item">{ml.intro}</p>
        <ul className="c4-list-points c4-scroll-reveal-item">
          {ml.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <h3
          className="c4-scroll-reveal-item"
          style={{ textAlign: 'center', color: 'var(--c4-red)', margin: '2rem 0 1rem' }}
        >
          {ml.sectionTitle}
        </h3>
        <div className="c4-theory-cards">
          {ml.cards.map((card) => (
            <article key={card.id} className="c4-scroll-reveal-item c4-theory-card">
              <div className="c4-theory-card__icon" aria-hidden>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection
        as="section"
        className="c4-hcm"
        variant="split"
        aria-labelledby="hcm-title"
        id="ho-chi-minh"
      >
        <div className="c4-scroll-reveal-item c4-hcm__photo">
          <AnimatedImage
            src={hcm.imageUrl}
            alt={hcm.imageAlt}
            motion="ken-burns"
            deferReveal
            className="c4-hcm__photo-img"
          />
          <span className="c4-hcm__motto">{hcm.motto}</span>
        </div>
        <div className="c4-hcm__content">
          <p
            className="c4-scroll-reveal-item c4-eyebrow"
            style={{ color: 'var(--c4-red)', fontWeight: 700, fontSize: '0.8rem' }}
          >
            {hcm.eyebrow}
          </p>
          <p className="c4-scroll-reveal-item c4-hcm__quote" id="hcm-title">
            “{hcm.quote}”
          </p>
          <p className="c4-scroll-reveal-item" style={{ color: 'var(--c4-muted)', lineHeight: 1.65, margin: 0 }}>
            {hcm.intro}
          </p>
          <div className="c4-hcm__pillars">
            {hcm.pillars.map((p) => (
              <div key={p.title} className="c4-scroll-reveal-item c4-hcm__pillar">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection
        className="c4-hcm-banner"
        variant="up"
        aria-label="Hồ Chí Minh và tư tưởng Lấy dân làm gốc"
      >
        <AnimatedImage
          src={hcm.bannerImageUrl}
          alt={hcm.bannerAlt}
          motion="ken-burns"
          deferReveal
          className="c4-hcm-banner__img"
        />
      </ScrollRevealSection>
    </div>
  )
}
