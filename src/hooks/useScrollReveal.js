import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    const items = el.querySelectorAll('[data-reveal]')
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.12}s`
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
