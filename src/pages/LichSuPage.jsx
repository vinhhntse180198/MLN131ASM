import { useCallback, useEffect, useState } from 'react'
import { Reveal } from '../components/Reveal.jsx'
import TimelineStageRow from '../components/TimelineStageRow.jsx'
import { historyPage, slideSummary, timelineStages } from '../data/chuong4LichSu.js'

export default function LichSuPage() {
  const [activeId, setActiveId] = useState(timelineStages[0]?.id ?? '')
  const hp = historyPage

  const scrollTo = useCallback((id) => {
    setActiveId(id)
    document.getElementById(`stage-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const scrollOverview = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* Cập nhật sidebar theo giai đoạn đang xem khi cuộn */
  useEffect(() => {
    const rows = timelineStages
      .map((s) => document.getElementById(`stage-${s.id}`))
      .filter(Boolean)
    if (!rows.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          const id = visible[0].target.id.replace('stage-', '')
          setActiveId(id)
        }
      },
      { rootMargin: '-20% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    rows.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="c4-history-layout">
      <aside className="c4-history-sidebar" aria-label="Chọn giai đoạn">
        <h2>{hp.sidebarTitle}</h2>
        <p>{hp.sidebarSubtitle}</p>
        <ul className="c4-history-sidebar__nav">
          {timelineStages.map((stage) => (
            <li key={stage.id}>
              <button
                type="button"
                className={activeId === stage.id ? 'is-active' : undefined}
                onClick={() => scrollTo(stage.id)}
              >
                <span className="c4-history-sidebar__icon" aria-hidden>
                  {stage.icon}
                </span>
                {stage.sidebarLabel}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="c4-btn c4-btn--primary c4-history-sidebar__cta" onClick={scrollOverview}>
          {hp.overviewBtn}
        </button>
      </aside>

      <div className="c4-history-main">
        <Reveal as="header" className="c4-history-hero c4-history-hero--inset">
          <p className="c4-eyebrow">{hp.eyebrow}</p>
          <h1>{hp.title}</h1>
          <p className="c4-history-hero__intro">{hp.intro}</p>
        </Reveal>

        <div className="c4-timeline-v2" aria-label="Tiến trình dân chủ">
          {timelineStages.map((stage, index) => (
            <TimelineStageRow
              key={stage.id}
              stage={stage}
              index={index}
              isActive={activeId === stage.id}
              onActivate={() => setActiveId(stage.id)}
            />
          ))}
        </div>

        <Reveal as="aside" className="c4-summary c4-summary--inset" aria-label="Tóm tắt">
          <h3>{slideSummary.title}</h3>
          <ul>
            {slideSummary.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}
