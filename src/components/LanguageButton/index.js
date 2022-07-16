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
        <>
            <div onClick={setLanguage(!isSpanish)} className='w-[6.5rem] my-6 nr:my-2.5 nr:ml-7 p-1.5 cursor-pointer rounded-md border border-gray-600 dark:bg-gray-900 flex flex-row gap-x-1.5 transition-all duration-250 ease-in'>
                <img src={
                    !isSpanish
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" 
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                } width="35" class="final-flag" alt="Peru"/>
                <p className='text-sm  dark:text-gray-300'>{t('navbar.language')}</p>
            </div>
        </>

    )
}

export default LanguageButton