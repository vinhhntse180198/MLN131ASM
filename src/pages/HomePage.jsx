import { Link } from 'react-router-dom'
import AnimatedImage from '../components/AnimatedImage.jsx'
import ScrollRevealSection from '../components/ScrollRevealSection.jsx'
import { courseStructure, hero, quote } from '../data/chuong4TrangChu.js'
import { heroIllustrationUrl, siteMeta } from '../data/siteContent.js'

export default function HomePage() {
  return (
    <>
      <div className="c4-container">
        <ScrollRevealSection as="div" className="c4-hero" variant="split">
          <div className="c4-hero__text">
            <span className="c4-scroll-reveal-item c4-badge">{siteMeta.chapterBadge}</span>
            <h1 className="c4-scroll-reveal-item c4-hero__title">{hero.title}</h1>
            <p className="c4-scroll-reveal-item c4-hero__desc">{hero.description}</p>
            <div className="c4-scroll-reveal-item c4-hero__actions">
              <Link className="c4-btn c4-btn--primary" to={hero.ctaPrimary.to}>
                {hero.ctaPrimary.label}
              </Link>
              <Link className="c4-btn c4-btn--outline" to={hero.ctaSecondary.to}>
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
          <AnimatedImage
            src={heroIllustrationUrl}
            alt="Democracy — The power of the people"
            motion="ken-burns"
            deferReveal
            eager
            className="c4-hero__img-wrap"
          />
        </ScrollRevealSection>
      </div>

      <section className="c4-quote" aria-label="Trích dẫn">
        <ScrollRevealSection className="c4-container c4-quote__inner" variant="up">
          <div className="c4-scroll-reveal-item c4-quote__bar" aria-hidden />
          <blockquote className="c4-scroll-reveal-item">
            <p className="c4-quote__text">
              “{quote.text}”
              <span className="c4-quote__author">— {quote.author}</span>
            </p>
          </blockquote>
        </ScrollRevealSection>
      </section>

      <section className="c4-structure" aria-labelledby="structure-title">
        <div className="c4-container">
          <ScrollRevealSection className="c4-structure__head" variant="up">
            <h2 id="structure-title" className="c4-scroll-reveal-item">
              {courseStructure.title}
            </h2>
            <p className="c4-scroll-reveal-item">{courseStructure.lead}</p>
          </ScrollRevealSection>
          <ScrollRevealSection className="c4-structure__grid" variant="up">
            {courseStructure.cards.map((card) => (
              <article
                key={card.id}
                className={`c4-scroll-reveal-item c4-card${card.wide ? ' c4-card--wide c4-structure__wide' : ''}`}
              >
                <div>
                  <div className="c4-card__icon" style={{ background: card.iconBg }}>
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link className="c4-card__link" to={card.link.to}>
                    {card.link.label}
                  </Link>
                </div>
                {card.wide ? (
                  <div className="c4-card__chart-placeholder" aria-hidden>
                    📈
                  </div>
                ) : null}
              </article>
            ))}
          </ScrollRevealSection>
        </div>
      </section>
    </>
  )
}
