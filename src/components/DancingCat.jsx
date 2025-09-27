import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'

const DancingCat = () => {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  } = useAnimation()

  const speedOptions = [
    { value: 0.8, label: '빠르게', emoji: '⚡' },
    { value: 1.5, label: '보통', emoji: '🐱' },
    { value: 2.5, label: '천천히', emoji: '🐌' }
  ]

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{ '--animation-duration': `${animationSpeed}s` }}
      >
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="controls">
        <div className="main-controls">
          <button
            className={`dance-btn primary ${isAnimating ? 'active' : ''}`}
            onClick={toggleAnimation}
            aria-label={isAnimating ? '춤 멈추기' : '춤 시작하기'}
          >
            {isAnimating ? '⏸️ 멈추기' : '🕺 춤추기'}
          </button>
        </div>

        <div className="speed-controls">
          <span className="speed-label">속도:</span>
          {speedOptions.map((option) => (
            <button
              key={option.value}
              className={`speed-btn ${animationSpeed === option.value ? 'active' : ''}`}
              onClick={() => changeSpeed(option.value)}
              aria-label={`춤 속도 ${option.label}로 변경`}
            >
              {option.emoji} {option.label}
            </button>
          ))}
        </div>

        <div className="quick-controls">
          <button
            className="control-btn start"
            onClick={startAnimation}
            disabled={isAnimating}
            aria-label="춤 시작"
          >
            ▶️ 시작
          </button>
          <button
            className="control-btn stop"
            onClick={stopAnimation}
            disabled={!isAnimating}
            aria-label="춤 정지"
          >
            ⏹️ 정지
          </button>
        </div>
      </div>

      <div className="dance-info">
        <p>
          {isAnimating
            ? `🎵 고양이가 ${speedOptions.find(s => s.value === animationSpeed)?.label} 춤추고 있어요! 🎵`
            : '🐱 버튼을 눌러 고양이와 함께 춤춰보세요!'
          }
        </p>
        <div className="keyboard-info">
          <small>
            💡 키보드 단축키: <kbd>스페이스바</kbd> 토글 | <kbd>Enter</kbd> 시작 | <kbd>Esc</kbd> 정지
          </small>
        </div>
      </div>
    </div>
  )
}

export default DancingCat