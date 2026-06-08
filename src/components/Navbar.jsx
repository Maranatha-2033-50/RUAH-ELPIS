import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useTheme, COLOR_SETS } from '../context/ThemeContext'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'

export default function Navbar() {
  const { lang, toggle: toggleLang, t } = useLang()
  const { mode, toggleMode, colorIndex, setColorIndex } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.about,    href: '#about' },
    { label: t.nav.programs, href: '#programs' },
    { label: t.nav.mission,  href: '#mission' },
    { label: t.nav.contact,  href: '#contact' },
  ]

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* 로고 — contain 직사각형 */}
        <a href="#" className={styles.brand} aria-label="RUAH ELPIS">
          <div className={styles.symbolWrap}>
            <img src={logo} alt="" className={styles.symbolImg} />
          </div>
        </a>

        {/* 데스크탑 네비 링크 */}
        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} className={styles.link} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
            {t.nav.cta}
          </a>

          {/* 모바일 전용 컨트롤 */}
          <div className={styles.mobileControls}>
            <LangToggle lang={lang} toggle={toggleLang} />
            <ThemeToggle mode={mode} toggle={toggleMode} />
            <ColorDots colorIndex={colorIndex} setColorIndex={setColorIndex} />
          </div>
        </nav>

        {/* 데스크탑 우측 컨트롤 */}
        <div className={styles.rightControls}>
          <LangToggle lang={lang} toggle={toggleLang} />
          <div className={styles.divider} />
          <ThemeToggle mode={mode} toggle={toggleMode} />
          <ColorDots colorIndex={colorIndex} setColorIndex={setColorIndex} />
          <button
            className={styles.burger}
            onClick={() => setOpen(v => !v)}
            aria-label="메뉴"
          >
            <span className={open ? styles.burgerOpen1 : ''} />
            <span className={open ? styles.burgerOpen2 : ''} />
            <span className={open ? styles.burgerOpen3 : ''} />
          </button>
        </div>
      </div>
    </header>
  )
}

/* ── 서브 컴포넌트 ── */

function LangToggle({ lang, toggle }) {
  return (
    <button className={styles.langToggle} onClick={toggle} aria-label="언어 전환">
      <span className={lang === 'ko' ? styles.langActive : ''}>KR</span>
      <span className={styles.langDivider}>/</span>
      <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
    </button>
  )
}

function ThemeToggle({ mode, toggle }) {
  return (
    <button
      className={styles.themeBtn}
      onClick={toggle}
      aria-label={mode === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      title={mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    >
      {mode === 'light'
        ? <Moon size={14} strokeWidth={1.8} />
        : <Sun  size={14} strokeWidth={1.8} />
      }
    </button>
  )
}

function ColorDots({ colorIndex, setColorIndex }) {
  return (
    <div className={styles.colorDots} role="group" aria-label="컬러 테마 선택">
      {COLOR_SETS.map((set, i) => (
        <button
          key={i}
          className={`${styles.dot} ${colorIndex === i ? styles.dotActive : ''}`}
          style={{ '--dot-color': set.dot }}
          onClick={() => setColorIndex(i)}
          aria-label={set.name}
          title={set.name}
        />
      ))}
    </div>
  )
}
