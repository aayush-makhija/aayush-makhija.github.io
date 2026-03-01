import { useEffect } from 'react'

export default function useSectionAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealedElements = document.querySelectorAll('.reveal')
    revealedElements.forEach((el) => observer.observe(el))

    return () => {
      revealedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
