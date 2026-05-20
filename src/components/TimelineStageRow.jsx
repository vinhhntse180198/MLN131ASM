import { useReveal } from '../hooks/useReveal.js'

function nodeClass(tone, active) {
  let c = 'c4-tl-node'
  if (tone === 'maroon') c += ' c4-tl-node--maroon'
  else if (tone === 'muted') c += ' c4-tl-node--muted'
  if (active) c += ' is-active'
  return c
}

export default function TimelineStageRow({ stage, index, isActive, onActivate }) {
  const textFirst = index % 2 === 0
  const { ref, className: visible } = useReveal({
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  })

  return (
    <article
      ref={ref}
      id={`stage-${stage.id}`}
      className={[
        'c4-tl-row',
        textFirst ? 'c4-tl-row--text-first' : 'c4-tl-row--img-first',
        visible,
        isActive ? 'is-active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={onActivate}
    >
      {textFirst ? (
        <>
          <div
            className={`c4-tl-text c4-tl-reveal-item${stage.highlight ? ' c4-tl-text--highlight' : ''}${stage.italic ? ' c4-tl-text--italic' : ''}`}
          >
            <p className="c4-tl-text__form">{stage.formLabel}</p>
            <h3>{stage.title}</h3>
            {stage.quote ? <p className="c4-tl-text__quote">“{stage.quote}”</p> : null}
            {stage.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className={`c4-tl-reveal-item ${nodeClass(stage.iconTone, isActive)}`} aria-hidden>
            {stage.icon}
          </div>
          <figure className="c4-tl-figure c4-tl-reveal-item c4-tl-figure--motion">
            {stage.imageUrl ? (
              <>
                <div className="c4-tl-figure__inner">
                  <img src={stage.imageUrl} alt={stage.title} loading="lazy" decoding="async" />
                </div>
                {stage.imageCaption ? (
                  <figcaption className="c4-tl-figure__cap">{stage.imageCaption}</figcaption>
                ) : null}
              </>
            ) : null}
          </figure>
        </>
      ) : (
        <>
          <figure className="c4-tl-figure c4-tl-reveal-item c4-tl-figure--motion">
            {stage.imageUrl ? (
              <>
                <div className="c4-tl-figure__inner">
                  <img src={stage.imageUrl} alt={stage.title} loading="lazy" decoding="async" />
                </div>
                {stage.imageCaption ? (
                  <figcaption className="c4-tl-figure__cap">{stage.imageCaption}</figcaption>
                ) : null}
              </>
            ) : null}
          </figure>
          <div className={`c4-tl-reveal-item ${nodeClass(stage.iconTone, isActive)}`} aria-hidden>
            {stage.icon}
          </div>
          <div
            className={`c4-tl-text c4-tl-reveal-item${stage.highlight ? ' c4-tl-text--highlight' : ''}${stage.italic ? ' c4-tl-text--italic' : ''}`}
          >
            <p className="c4-tl-text__form">{stage.formLabel}</p>
            <h3>{stage.title}</h3>
            {stage.quote ? <p className="c4-tl-text__quote">“{stage.quote}”</p> : null}
            {stage.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </>
      )}
    </article>
  )
}
