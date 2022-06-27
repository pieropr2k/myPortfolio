import * as Fa from 'react-icons/fa';

import useTheme from '../../hooks/useTheme.js';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-2 pl-1 md:ml-4">
      {theme === 'dark' ? (
        <Fa.FaSun className="text-xl dark:text-yellow-400 text-white" />
      ) : (
        <Fa.FaMoon className="text-xl text-gray-800 dark:text-white" />
      )}
    </button>
  )
}

export default ThemeButton;