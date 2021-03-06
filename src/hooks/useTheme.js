import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext.js'

const useTheme = () => {
  const { initialTheme, theme, setTheme } = useContext(ThemeContext)

  const checkTheme = (existing = 'light' | 'dark') => {
    const root = window.document.documentElement
    root.classList.remove(existing === 'dark' ? 'light' : 'dark')
    root.classList.add(existing)
    localStorage.setItem('current-theme', existing)
  }

  if (initialTheme) {
    checkTheme(initialTheme)
  }

  useEffect(() => {
    checkTheme(theme);
  }, [theme])

  return { theme, setTheme }
}

export default useTheme