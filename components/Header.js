import Link from 'next/link'

import { useThemeContext } from '../context/theme-context'
import ThemeButton from '../components/ThemeButton'

import styles from '../styles/Header.module.scss'

export default function Header() {
  const { active } = useThemeContext()

  return (
    <header className={`${styles.header} ${active ? 'dark' : ''}`}>
      <div>
        <ThemeButton />
      </div>
      <h1>Ben Prat Portfolio</h1>

      <section className={`${styles.menu} ${active ? 'dark' : ''}`}>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/Projects'>
          <a>Projects</a>
        </Link>

        <Link href='/Contact'>
          <a>Contact</a>
        </Link>
      </section>
    </header>
  )
}
