import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'
import logo from '../assets/logo.png'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const n = t.nav

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Footer에도 전체 로고 노출 */}
        <div className={styles.brand}>
          <img src={logo} alt="RUAH ELPIS" className={styles.logo} />
          <p className={styles.tagline}>{f.tagline}</p>
        </div>
        <nav className={styles.nav}>
          <a href="#mission">{n.mission}</a>
          <a href="#programs">{n.programs}</a>
          <a href="#about">{n.about}</a>
          <a href="#contact">{n.contact}</a>
        </nav>
        <p className={styles.copy}>{f.copy}</p>
      </div>
    </footer>
  )
}
