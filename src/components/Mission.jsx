import { Wind, Sparkles, Users } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ReValues from './ReValues'
import styles from './Mission.module.css'

const ICONS = [Wind, Sparkles, Users]

export default function Mission() {
  const { t } = useLang()
  const m = t.mission
  const sectionRef = useScrollReveal()

  return (
    <section className={styles.section} id="mission">
      <div className="container" ref={sectionRef}>
        <div className={styles.header} data-reveal>
          <p className={styles.eyebrow}>{m.eyebrow}</p>
          <h2 className={styles.title}>
            {m.title}<br /><em className={styles.titleEm}>{m.titleEm}</em>
          </h2>
          <p className={styles.desc}>{m.desc}</p>
        </div>
        <div className={styles.grid}>
          {m.cards.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className={styles.card} data-reveal>
                <div className={styles.iconWrap}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            )
          })}
        </div>

        {/* RE 브랜드 스토리텔링 인터랙션 */}
        <ReValues />
      </div>
    </section>
  )
}
