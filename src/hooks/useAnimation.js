import { useState, useEffect } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1.5) // 기본 1.5초

  // 키보드 이벤트로 애니메이션 제어
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key.toLowerCase()) {
        case ' ':
        case 'spacebar':
          event.preventDefault()
          toggleAnimation()
          break
        case 'escape':
          setIsAnimating(false)
          break
        case 'enter':
          setIsAnimating(true)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAnimating])

  const toggleAnimation = () => {
    setIsAnimating(prev => !prev)
  }

  const startAnimation = () => {
    setIsAnimating(true)
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  const changeSpeed = (speed) => {
    setAnimationSpeed(speed)
  }

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}