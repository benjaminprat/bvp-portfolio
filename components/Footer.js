import styles from '../styles/Header.module.scss'
import { useThemeContext } from '../context/theme-context'

export default function Footer() {
  const { active } = useThemeContext()

  return (
    <footer className={`${styles.footer} ${active ? 'dark' : ''}`}>      
    </footer>
  )
}
