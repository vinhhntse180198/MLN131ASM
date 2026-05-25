import ScrollRevealSection from '../components/ScrollRevealSection.jsx'
import { gamePage } from '../data/chuong4Game.js'

export default function GamePage() {
  return (
    <div className="c4-container c4-game-page">
      <ScrollRevealSection className="c4-game-hero" variant="up" aria-labelledby="c4-game-title">
        <p className="c4-eyebrow c4-scroll-reveal-item">{gamePage.eyebrow}</p>
        <h1 id="c4-game-title" className="c4-scroll-reveal-item">
          {gamePage.title}
        </h1>
        <p className="c4-game-hero__intro c4-scroll-reveal-item">{gamePage.intro}</p>
      </ScrollRevealSection>

      <ScrollRevealSection className="c4-game-empty" variant="up" aria-labelledby="c4-game-empty-title">
        <div className="c4-scroll-reveal-item c4-game-empty__icon" aria-hidden>
          🎮
        </div>
        <h2 id="c4-game-empty-title" className="c4-scroll-reveal-item">
          Khu vực game đang để trống
        </h2>
        <p className="c4-scroll-reveal-item c4-game-empty__text">{gamePage.note}</p>
      </ScrollRevealSection>
    </div>
  )
}
