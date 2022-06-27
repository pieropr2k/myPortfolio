import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageButton = () => {
  const [isSpanish, setIsSpanish] = useState(false);
  const [t, i18n] = useTranslation('global');

  const setLanguage = (isTrue) => () => {
    setIsSpanish(isTrue)
    return isTrue ? i18n.changeLanguage('es') : i18n.changeLanguage('en')
  }
  return (
    <div className="my-8 nr:my-0 nr:ml-7 nr:mt-4">
      <label htmlFor="toggle-example" className="flex relative mb-4 cursor-pointer">
        <input onClick={setLanguage(!isSpanish)} type="checkbox" id="toggle-example" className="sr-only" />
        <div className="w-11 h-6 bg-gray-500 rounded-full border border-gray-200 toggle-bg dark:bg-gray-900 dark:border-gray-600"></div>
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('navbar.language')}</span>
      </label>
    </div>
  )
}

export default LanguageButton