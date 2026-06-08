import { useLang } from '../context/LangContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className={styles.hero} id="home">
      {/* 좌측: 에디토리얼 텍스트 */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>{h.eyebrow}</p>
        <h1 className={styles.title}>
          {h.titleLine1}<br />{h.titleLine2}
        </h1>
        <p className={styles.titleEn}>{h.titleEn}</p>
        <p className={styles.subtitle}>{h.subtitle}</p>
        <div className={styles.actions}>
          <a href="#programs" className={styles.btnPrimary}>{h.ctaPrimary}</a>
          <a href="#about"    className={styles.btnSecondary}>{h.ctaSecondary}</a>
        </div>
      </div>

      {/* 우측: 16:9 → 전체 높이 이미지 플레이스홀더 (스퀘어, 원형 금지) */}
      <div className={styles.imgSide}>
        <span className={styles.imgPlaceholderHint}>Photo</span>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>{h.scroll}</span>
      </div>
    </section>
  )
}
