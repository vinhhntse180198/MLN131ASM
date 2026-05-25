import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ScrollRevealSection from '../components/ScrollRevealSection.jsx'
import { gameCards, gamePage, gameQuestions, gameSettings } from '../data/chuong4Game.js'

function shuffle(items) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }
  return result
}

function pickQuestionSet() {
  return shuffle(gameQuestions).slice(0, gameSettings.totalQuestions)
}

function getDropzoneStateClass(feedback, dropHover) {
  if (feedback?.ok) return 'is-correct'
  if (feedback && !feedback.ok) return 'is-wrong'
  if (dropHover) return 'is-hover'
  return ''
}

function getDropzoneHintText(feedback) {
  if (!feedback) return 'Bấm vào thẻ đúng hoặc kéo thẻ vào khung câu hỏi.'
  if (feedback.ok) return `Chính xác! +${feedback.gained} điểm`
  return `Sai rồi. Đáp án đúng là: ${gameCards[feedback.correctId].name}`
}

function GameIntro({ onStart }) {
  const previewCards = ['athens', 'october', 'peopleMaster']

  return (
    <div className="c4-game-panel c4-game-intro">
      <p className="c4-eyebrow">{gamePage.eyebrow}</p>
      <h2>Luật chơi</h2>
      <div className="c4-game-intro__grid">
        <article>
          <strong>1.</strong>
          <span>Mỗi lượt bạn nhận 1 câu hỏi và 4 thẻ bài.</span>
        </article>
        <article>
          <strong>2.</strong>
          <span>Có thể bấm trực tiếp hoặc kéo thẻ vào ô câu hỏi.</span>
        </article>
        <article>
          <strong>3.</strong>
          <span>Trả lời nhanh và đúng liên tiếp để nhận thêm điểm.</span>
        </article>
      </div>

      <div className="c4-game-intro__preview" aria-hidden>
        {previewCards.map((cardId) => {
          const card = gameCards[cardId]
          return (
            <div key={card.id} className="c4-game-card c4-game-card--preview">
              {card.img ? (
                <>
                  <img src={card.img} alt={card.name} loading="lazy" />
                  <div className="c4-game-card__overlay">
                    <h3>{card.name}</h3>
                    <p>{card.desc}</p>
                  </div>
                </>
              ) : (
                <div className={`c4-game-card__face c4-game-card__face--${card.tone ?? 'slate'}`}>
                  <p className="c4-game-card__eyebrow">{card.eyebrow ?? 'Kiến thức'}</p>
                  <div className="c4-game-card__symbol" aria-hidden>
                    {card.icon ?? '📘'}
                  </div>
                  <div className="c4-game-card__overlay">
                    <h3>{card.name}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <button type="button" className="c4-game-button" onClick={onStart}>
        Bắt đầu chơi
      </button>
    </div>
  )
}

function GameOver({ score, collected, total, onRestart }) {
  return (
    <div className="c4-game-panel c4-game-over">
      <div className="c4-game-over__icon" aria-hidden>
        🏆
      </div>
      <p className="c4-eyebrow">Hoàn thành vòng chơi</p>
      <h2>Kết thúc!</h2>
      <p className="c4-game-over__summary">
        Bạn đã thu thập được {collected}/{total} thẻ bài kiến thức.
      </p>
      <div className="c4-game-over__score">
        <span>Tổng điểm</span>
        <strong>{score.toLocaleString('vi-VN')}</strong>
      </div>
      <button type="button" className="c4-game-button" onClick={onRestart}>
        Chơi lại
      </button>
    </div>
  )
}

const GameHud = memo(function GameHud({ lives, score, streak, qIndex, total }) {
  return (
    <section className="c4-game-panel c4-game-hud" aria-label="Bảng thông tin ván chơi">
      <div className="c4-game-lives" aria-label={`Số mạng còn lại: ${lives}`}>
        {Array.from({ length: gameSettings.maxLives }).map((_, index) => (
          <span
            key={`life-${index + 1}`}
            className={`c4-game-heart ${index < lives ? 'is-active' : ''}`}
            aria-hidden
          >
            ♥
          </span>
        ))}
      </div>

      <div className="c4-game-score">
        <span>Điểm</span>
        <strong>{score.toLocaleString('vi-VN')}</strong>
        {streak > 1 ? <small>+ chuỗi {streak}</small> : null}
      </div>

      <div className="c4-game-progress-meta">Câu {qIndex + 1}/{total}</div>
    </section>
  )
})

const GameTimer = memo(function GameTimer({ timeLeft }) {
  return (
    <section className="c4-game-timer" aria-label="Thời gian trả lời">
      <div className="c4-game-timer__label">
        <span>Thời gian</span>
        <strong>{timeLeft}s</strong>
      </div>
      <div className="c4-game-timer__bar" aria-hidden>
        <span style={{ width: `${(timeLeft / gameSettings.timePerQuestion) * 100}%` }} />
      </div>
    </section>
  )
})

const GameDropzone = memo(function GameDropzone({
  current,
  stateClass,
  hintText,
  onDragOver,
  onDragLeave,
  onDrop,
}) {
  return (
    <section
      className={`c4-game-panel c4-game-dropzone ${stateClass}`.trim()}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <p className="c4-eyebrow">Câu hỏi</p>
      <h2>{current.q}</h2>
      <p className="c4-game-dropzone__hint">{hintText}</p>
    </section>
  )
})

const GameCardGrid = memo(function GameCardGrid({ options, feedback, dragId, setDragId, onAnswer }) {
  return (
    <section className="c4-game-cards" aria-label="Lựa chọn thẻ bài">
      {options.map((optionId) => {
        const card = gameCards[optionId]
        const isCorrect = feedback?.correctId === optionId
        const isWrongPick = feedback && !feedback.ok && dragId === optionId
        const cardState = feedback
          ? isCorrect
            ? 'is-correct'
            : isWrongPick
              ? 'is-wrong'
              : 'is-dim'
          : ''

        return (
          <button
            key={optionId}
            type="button"
            draggable={!feedback}
            disabled={Boolean(feedback)}
            onDragStart={() => setDragId(optionId)}
            onDragEnd={() => setDragId(null)}
            onClick={() => {
              setDragId(optionId)
              onAnswer(optionId)
            }}
            className={`c4-game-card ${cardState}`.trim()}
          >
            {card.img ? (
              <>
                <img src={card.img} alt={card.name} loading="eager" draggable={false} />
                <div className="c4-game-card__overlay">
                  <h3>{card.name}</h3>
                  <p>{card.desc}</p>
                </div>
              </>
            ) : (
              <div className={`c4-game-card__face c4-game-card__face--${card.tone ?? 'slate'}`}>
                <p className="c4-game-card__eyebrow">{card.eyebrow ?? 'Kiến thức'}</p>
                <div className="c4-game-card__symbol" aria-hidden>
                  {card.icon ?? '📘'}
                </div>
                <div className="c4-game-card__overlay">
                  <h3>{card.name}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            )}
          </button>
        )
      })}
    </section>
  )
})

function GamePlay({ config }) {
  const { state, actions } = config
  const { queue, qIndex, lives, score, streak, timeLeft, dragId, feedback, dropHover } = state
  const { setDragId, setDropHover, onAnswer } = actions
  const current = queue[qIndex]
  const options = useMemo(() => (current ? shuffle(current.options) : []), [current])
  const questionKey = `${qIndex}-${current?.answer ?? 'question'}`
  const dropzoneStateClass = getDropzoneStateClass(feedback, dropHover)
  const hintText = getDropzoneHintText(feedback)

  const handleDragOver = useCallback(
    (event) => {
      event.preventDefault()
      if (!feedback) setDropHover(true)
    },
    [feedback, setDropHover],
  )

  const handleDragLeave = useCallback(() => {
    setDropHover(false)
  }, [setDropHover])

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault()
      if (feedback) return
      setDropHover(false)
      if (dragId) onAnswer(dragId)
    },
    [dragId, feedback, onAnswer, setDropHover],
  )

  return (
    <>
      <GameHud lives={lives} score={score} streak={streak} qIndex={qIndex} total={queue.length} />
      <GameTimer timeLeft={timeLeft} />

      <div key={questionKey} className="c4-game-stage">
        <GameDropzone
          current={current}
          stateClass={dropzoneStateClass}
          hintText={hintText}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        />

        <GameCardGrid
          options={options}
          feedback={feedback}
          dragId={dragId}
          setDragId={setDragId}
          onAnswer={onAnswer}
        />
      </div>

      <p className="c4-game-note">
        Mẹo: mỗi câu đúng có điểm nền, điểm thưởng tốc độ và điểm thưởng trả lời đúng liên tiếp.
      </p>
    </>
  )
}

export default function GamePage() {
  const [phase, setPhase] = useState('intro')
  const [queue, setQueue] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [lives, setLives] = useState(gameSettings.maxLives)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(gameSettings.timePerQuestion)
  const [dragId, setDragId] = useState(null)
  const [dropHover, setDropHover] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [collectedIds, setCollectedIds] = useState(new Set())
  const timeLeftRef = useRef(gameSettings.timePerQuestion)

  useEffect(() => {
    timeLeftRef.current = timeLeft
  }, [timeLeft])

  const startGame = useCallback(() => {
    setQueue(pickQuestionSet())
    setQuestionIndex(0)
    setLives(gameSettings.maxLives)
    setScore(0)
    setStreak(0)
    setTimeLeft(gameSettings.timePerQuestion)
    setDragId(null)
    setDropHover(false)
    setFeedback(null)
    setCollectedIds(new Set())
    setPhase('play')
  }, [])

  const handleAnswer = useCallback((answerId) => {
    const current = queue[questionIndex]
    if (!current || feedback) return

    const isCorrect = answerId === current.answer
    const nextLives = isCorrect ? lives : lives - 1
    const nextStreak = isCorrect ? streak + 1 : 0
    const activeTime = timeLeftRef.current
    let gained = 0

    if (isCorrect) {
      const base = 100
      const speedBonus = Math.round((activeTime / gameSettings.timePerQuestion) * 100)
      const streakBonus = streak * 25
      gained = base + speedBonus + streakBonus
      setScore((currentScore) => currentScore + gained)
      setCollectedIds((currentIds) => new Set(currentIds).add(current.answer))
    }

    setLives(nextLives)
    setStreak(nextStreak)
    setFeedback({ ok: isCorrect, gained, correctId: current.answer })

    window.setTimeout(() => {
      const isLastQuestion = questionIndex + 1 >= queue.length
      setFeedback(null)
      setDragId(null)
      setDropHover(false)

      if (nextLives <= 0 || isLastQuestion) {
        setPhase('over')
        return
      }

      setTimeLeft(gameSettings.timePerQuestion)
      setQuestionIndex((currentIndex) => currentIndex + 1)
    }, 1400)
  }, [feedback, lives, questionIndex, queue, streak])

  useEffect(() => {
    if (phase !== 'play' || feedback) return undefined
    if (timeLeft <= 0) {
      handleAnswer(null)
      return undefined
    }

    const timerId = window.setTimeout(() => {
      setTimeLeft((current) => current - 1)
    }, 1000)

    return () => window.clearTimeout(timerId)
  }, [feedback, handleAnswer, phase, timeLeft])

  const playConfig = useMemo(
    () => ({
      state: {
        queue,
        qIndex: questionIndex,
        lives,
        score,
        streak,
        timeLeft,
        dragId,
        feedback,
        dropHover,
      },
      actions: {
        setDragId,
        setDropHover,
        onAnswer: handleAnswer,
      },
    }),
    [dragId, dropHover, feedback, handleAnswer, lives, questionIndex, queue, score, streak, timeLeft],
  )

  return (
    <div className="c4-container c4-game-page">
      <ScrollRevealSection className="c4-game-hero" variant="up" aria-labelledby="c4-game-title">
        <p className="c4-eyebrow c4-scroll-reveal-item">{gamePage.eyebrow}</p>
        <h1 id="c4-game-title" className="c4-scroll-reveal-item">
          {gamePage.title}
        </h1>
        <p className="c4-game-hero__intro c4-scroll-reveal-item">{gamePage.intro}</p>
      </ScrollRevealSection>

      {phase === 'intro' ? <GameIntro onStart={startGame} /> : null}

      {phase === 'play' ? (
        <GamePlay config={playConfig} />
      ) : null}

      {phase === 'over' ? (
        <GameOver
          score={score}
          collected={collectedIds.size}
          total={queue.length}
          onRestart={startGame}
        />
      ) : null}
    </div>
  )
}
