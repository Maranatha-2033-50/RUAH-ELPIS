import { useState } from 'react'
import { useLang } from '../context/LangContext'
import styles from './ReValues.module.css'

const RE_DATA = [
  {
    suffix: 'VIVE',
    tagKo: '의료·보건',
    tagEn: 'Health',
    descKo: '올바른 보건 지식과 자립 능력을 길러, 취약계층 스스로 건강한 삶을 되살립니다.',
    descEn: 'We cultivate health literacy and self-reliance so the vulnerable can reclaim healthy lives on their own terms.',
    color: '#1A3A5C',
  },
  {
    suffix: 'ST',
    tagKo: '정신 케어',
    tagEn: 'Mind Care',
    descKo: '심리·정서적 소외를 겪는 이들에게 따뜻한 마음의 숨결과 평안한 안식을 제공합니다.',
    descEn: 'We offer warm emotional presence and peaceful rest to those experiencing psychological and emotional isolation.',
    color: '#3D6E8A',
  },
  {
    suffix: 'START',
    tagKo: '커뮤니티 스포츠',
    tagEn: 'Sports',
    descKo: '스포츠를 통한 연대와 신체 활동으로, 사회 속에 다시 도약할 에너지를 얻습니다.',
    descEn: 'Through sport and solidarity, we give people the energy to leap back into society with renewed purpose.',
    color: '#2B5C7A',
  },
  {
    suffix: 'PENT',
    tagKo: '재단 철학',
    tagEn: 'Foundation',
    descKo: '사랑과 나눔이라는 본질 가치로 돌아가, 소외 없는 상생의 공동체를 만듭니다.',
    descEn: 'Returning to the core values of love and sharing, we build a community where no one is left behind.',
    color: '#1A3A5C',
  },
]

export default function ReValues() {
  const { lang } = useLang()
  const [active, setActive] = useState(null)

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>
        {lang === 'ko' ? '"RE" 가 담긴 우리의 다짐' : 'Our Promise in "RE"'}
      </p>
      <div className={styles.grid}>
        {RE_DATA.map((item, i) => {
          const isActive = active === i
          return (
            <button
              key={item.suffix}
              className={`${styles.card} ${isActive ? styles.active : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              style={{ '--accent': item.color }}
              aria-label={`RE${item.suffix}`}
            >
              <div className={styles.keyword}>
                <span className={styles.re}>RE</span>
                <span className={styles.suffix}>{item.suffix}</span>
              </div>
              <span className={styles.tag}>
                {lang === 'ko' ? item.tagKo : item.tagEn}
              </span>
              <p className={styles.desc}>
                {lang === 'ko' ? item.descKo : item.descEn}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
