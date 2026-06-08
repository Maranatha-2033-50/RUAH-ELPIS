import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Programs from './components/Programs'
import About from './components/About'
import ActionTiers from './components/ActionTiers'
import ImpactMetrics from './components/ImpactMetrics'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Navbar />
        <main>
          <Hero />
          <Mission />      {/* RE Values 포함 */}
          <Programs />
          <About />
          <ActionTiers />  {/* S4: 투명성 & 참여 티어 */}
          <ImpactMetrics />{/* 수치 인포그래픽 */}
          <Contact />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}
