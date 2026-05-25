import AnimatedImage from '../components/AnimatedImage.jsx'
import ScrollRevealSection from '../components/ScrollRevealSection.jsx'
import { socialistDemocracy } from '../data/Chuong4XHCN.js'

export default function XaHoiChuNghiaPage() {
  const sd = socialistDemocracy

  return (
    <div className="c4-container c4-sd-page">
      <ScrollRevealSection className="c4-sd-head" variant="up" aria-labelledby="c4-sd-title">
        <h1 id="c4-sd-title" className="c4-scroll-reveal-item">
          2. {sd.title}
        </h1>
        <p className="c4-sd-head__intro c4-scroll-reveal-item">{sd.intro}</p>
      </ScrollRevealSection>

      <ScrollRevealSection className="c4-sd-process" variant="split" aria-labelledby="c4-sd-process-title">
        <div className="c4-sd-process__intro">
          <h2 id="c4-sd-process-title" className="c4-scroll-reveal-item">
            Quá trình ra đời và phát triển
          </h2>
          {sd.process.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="c4-scroll-reveal-item">
              {paragraph}
            </p>
          ))}
        </div>

        <AnimatedImage
          src={sd.process.imageUrl}
          alt={sd.process.imageAlt}
          motion="ken-burns"
          deferReveal
          className="c4-sd-process__image"
        />

        <div className="c4-sd-process__timeline">
          {sd.process.phases.map((phase) => (
            <article key={phase.id} className="c4-scroll-reveal-item c4-sd-process__phase">
              <h3>{phase.title}</h3>
              <p className="c4-sd-process__year">{phase.year}</p>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>

        <div className="c4-sd-process__logic-layout">
          <div className="c4-scroll-reveal-item c4-sd-process__logic">
            <h3 className="c4-sd-process__logic-title">{sd.process.logicTitle}</h3>
            <div className="c4-sd-process__logic-list">
              {sd.process.logicSteps.map((step) => (
                <article key={step.title} className="c4-sd-process__logic-item">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                  <blockquote>
                    <p>{step.quote}</p>
                    <cite>{step.source}</cite>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>

          <AnimatedImage
            src={sd.process.logicImageUrl}
            alt={sd.process.logicImageAlt}
            motion="ken-burns"
            deferReveal
            className="c4-sd-process__logic-image"
          />
        </div>

        <div className="c4-scroll-reveal-item c4-sd-process__box">
          <p>{sd.process.conclusion}</p>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="c4-sd-essence" variant="up" aria-labelledby="c4-sd-essence-title">
        <h2 id="c4-sd-essence-title" className="c4-scroll-reveal-item">
          {sd.essence.title}
        </h2>
        <p className="c4-scroll-reveal-item c4-sd-essence__lead">{sd.essence.lead}</p>

        <div className="c4-sd-essence__grid">
          {sd.essence.cards.map((card) => (
            <article key={card.id} className="c4-scroll-reveal-item c4-sd-card">
              <figure className="c4-sd-card__media">
                <img src={card.imageUrl} alt={card.imageAlt} loading="lazy" decoding="async" />
              </figure>
              <div className="c4-sd-card__body">
                <h3>{card.title}</h3>
                <p className="c4-sd-card__summary">{card.summary}</p>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </ScrollRevealSection>
    </div>
  )
}
