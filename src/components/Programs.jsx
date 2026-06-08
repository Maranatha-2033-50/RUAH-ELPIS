import { BookOpen, Dumbbell, Shield, HeartHandshake } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Programs.module.css'

const ICONS = [BookOpen, Dumbbell, Shield, HeartHandshake]

export default function Programs() {
  const { t } = useLang()
  const p = t.programs
  const sectionRef = useScrollReveal()

  return (
    <section className={styles.section} id="programs">
      <div className="container" ref={sectionRef}>
        <div className={styles.header} data-reveal>
          <p className={styles.eyebrow}>{p.eyebrow}</p>
          <h2 className={styles.title}>{p.title}</h2>
        </div>
        <div className={styles.grid}>
          {p.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <article key={item.num} className={styles.item} data-reveal>
                {/* 16:9 이미지 플레이스홀더 — 스퀘어, 원형 금지 */}
                <div className={styles.imgPlaceholder}>
                  <div className={styles.imgIcon}>
                    <Icon size={28} strokeWidth={1.2} />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.topRow}>
                    <span className={styles.num}>{item.num}</span>
                    <span className={styles.tag}>{item.tag}</span>
                  </div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
