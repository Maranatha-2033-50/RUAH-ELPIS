import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'
import logo from '../assets/logo.png'

export default function About() {
  const { t } = useLang()
  const a = t.about
  const sectionRef = useScrollReveal()

  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`} ref={sectionRef}>
        <div className={styles.visual} data-reveal>
          <div className={styles.logoWrap}>
            <img src={logo} alt="RUAH ELPIS Logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.text} data-reveal>
          <p className={styles.eyebrow}>{a.eyebrow}</p>
          <h2 className={styles.title}>
            {a.title}<br /><span className={styles.titleEm}>{a.titleEm}</span>
          </h2>
          <p className={styles.body}>{a.body1}</p>
          <p className={styles.body}>{a.body2}</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{a.stat1Num}</span>
              <span className={styles.statLabel}>{a.stat1Label}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{a.stat2Num}</span>
              <span className={styles.statLabel}>{a.stat2Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
