import { useState, useEffect } from 'react'

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const observers = new Map()

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.set(id, observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return activeSection
}
