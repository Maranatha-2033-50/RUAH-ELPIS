import { createContext, useContext, useState, useEffect } from 'react'

export const COLOR_SETS = [
  {
    name: 'Standard',
    point:      '#1A3A5C',
    pointHover: '#0F2338',
    pointLight: '#E8EEF5',
    pointText:  '#FFFFFF',   // 버튼 위 텍스트
    dot:        '#1A3A5C',
  },
  {
    name: 'Starlight',
    point:      '#C9A96E',   // 샴페인 골드는 버튼에서 너무 연하므로 채도 보정
    pointHover: '#4A4238',
    pointLight: '#FAF7F2',
    pointText:  '#FFFFFF',
    dot:        '#E6D7C3',
  },
  {
    name: 'Midnight Pulse',
    point:      '#4E5968',
    pointHover: '#2C333E',
    pointLight: '#F0F2F5',
    pointText:  '#FFFFFF',
    dot:        '#4E5968',
  },
  {
    name: 'Rose Gold',
    point:      '#B87A6A',   // Dusty Rose를 버튼 명도 확보용으로 다운
    pointHover: '#5C3E35',
    pointLight: '#FBF3F0',
    pointText:  '#FFFFFF',
    dot:        '#D9A796',
  },
  {
    name: 'Sage Green',
    point:      '#6B7D67',   // Sage를 버튼 명도 확보용으로 다운
    pointHover: '#3B4438',
    pointLight: '#F1F4F0',
    pointText:  '#FFFFFF',
    dot:        '#8A9A86',
  },
]

const LIGHT_VARS = {
  '--color-ivory':        '#F5F0E8',
  '--color-ivory-dark':   '#EDE7D9',
  '--color-ivory-light':  '#FAF7F2',
  '--color-grey-bg':      '#F5F5F5',
  '--color-text':         '#3D3530',
  '--color-text-dark':    '#1A1A1A',
  '--color-olive':        '#7D7260',
  '--color-olive-light':  '#9E9180',
  '--color-olive-dark':   '#5C5244',
  '--color-accent':       '#A89880',
  '--color-divider':      'rgba(125, 114, 96, 0.15)',
  '--color-white':        '#FFFFFF',
  '--color-error':        '#B85C5C',
}

const DARK_VARS = {
  '--color-ivory':        '#1C1A18',
  '--color-ivory-dark':   '#141210',
  '--color-ivory-light':  '#252220',
  '--color-grey-bg':      '#1E1C1A',
  '--color-text':         '#C8C2BA',
  '--color-text-dark':    '#F0EBE4',
  '--color-olive':        '#A89880',
  '--color-olive-light':  '#8A7D6E',
  '--color-olive-dark':   '#C8B9A8',
  '--color-accent':       '#C4A882',
  '--color-divider':      'rgba(200, 185, 168, 0.14)',
  '--color-white':        '#2A2724',
  '--color-error':        '#D4837A',
}

const ThemeContext = createContext(null)

const LS_MODE  = 're-theme-mode'
const LS_COLOR = 're-theme-color'

export function ThemeProvider({ children }) {
  const [mode,       setMode]       = useState(() => localStorage.getItem(LS_MODE)  || 'light')
  const [colorIndex, setColorIndex] = useState(() => Number(localStorage.getItem(LS_COLOR) ?? 0))

  const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light')

  // CSS 변수를 :root에 주입
  useEffect(() => {
    const root = document.documentElement
    const modeVars = mode === 'dark' ? DARK_VARS : LIGHT_VARS
    const set = COLOR_SETS[colorIndex]

    Object.entries(modeVars).forEach(([k, v]) => root.style.setProperty(k, v))
    root.style.setProperty('--color-point',       set.point)
    root.style.setProperty('--color-point-hover', set.pointHover)
    root.style.setProperty('--color-point-light', set.pointLight)
    root.style.setProperty('--color-point-text',  set.pointText)

    // data 속성으로 다크 클래스 제어 (필요 시 추가 CSS에서 활용 가능)
    root.setAttribute('data-theme', mode)

    localStorage.setItem(LS_MODE,  mode)
    localStorage.setItem(LS_COLOR, String(colorIndex))
  }, [mode, colorIndex])

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, colorIndex, setColorIndex }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
