import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ImpactMetrics.module.css'

export default function ImpactMetrics() {
  const { t } = useLang()
  const m = t.impactMetrics
  const sectionRef = useScrollReveal()

  return (
    <section className={styles.section} id="impact">
      <div className="container" ref={sectionRef}>

        <div className={styles.header} data-reveal>
          <p className={styles.eyebrow}>{m.eyebrow}</p>
          <h2 className={styles.title}>
            {m.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
        </div>

        <div className={styles.grid}>
          {m.metrics.map((item, i) => (
            <div key={i} className={styles.metricCard} data-reveal>
              <span className={styles.num}>{item.num}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.sub}>{item.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
