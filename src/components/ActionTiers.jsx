import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ActionTiers.module.css'

export default function ActionTiers() {
  const { t } = useLang()
  const a = t.actionTiers
  const [tab, setTab] = useState('monthly')
  const sectionRef = useScrollReveal()

  const tiers = a.tiers[tab]

  return (
    <section className={styles.section} id="action">
      <div className="container" ref={sectionRef}>

        {/* 헤더 */}
        <div className={styles.header} data-reveal>
          <p className={styles.eyebrow}>{a.eyebrow}</p>
          <h2 className={styles.title}>
            {a.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className={styles.desc}>{a.desc}</p>
        </div>

        {/* 세그먼트 탭 */}
        <div className={styles.tabWrap} data-reveal>
          <div className={styles.tabTrack}>
            <button
              className={`${styles.tabBtn} ${tab === 'monthly' ? styles.tabActive : ''}`}
              onClick={() => setTab('monthly')}
            >
              {a.tabMonthly}
            </button>
            <button
              className={`${styles.tabBtn} ${tab === 'oneoff' ? styles.tabActive : ''}`}
              onClick={() => setTab('oneoff')}
            >
              {a.tabOneoff}
            </button>
            {/* 슬라이딩 인디케이터 */}
            <span
              className={styles.tabIndicator}
              style={{ transform: `translateX(${tab === 'monthly' ? '0%' : '100%'})` }}
            />
          </div>
        </div>

        {/* 티어 카드 */}
        <div className={styles.grid} data-reveal>
          {tiers.map((item, i) => (
            <div key={`${tab}-${i}`} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.tierBadge}>{item.tier}</span>
                <span className={styles.amount}>{item.amount}</span>
              </div>

              {/* 16:9 이미지 플레이스홀더 */}
              <div className={styles.imgBox}>
                <span className={styles.imgLabel}>{item.label}</span>
              </div>

              <p className={styles.value}>{item.value}</p>

              <a href="#contact" className={styles.cardCta}>
                {a.cta} <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
