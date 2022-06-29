import React, { useState } from 'react'
import LanguageButton from '../LanguageButton';
import ThemeButton from '../ToggleButton/ToggleButton';
import SocialMediaLogo from '../UI/atoms/SocialMediaLogo';
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [t] = useTranslation('global');
  const SocialMedia = [
    { name: "Twitter", link: "https://twitter.com/ppr2k" },
    { name: "Linkedin", link: "https://www.linkedin.com/in/piero-pilco-reynoso-585848128/" },
    { name: "Github", link: "https://github.com/pieropr2k" },
    { name: "Youtube", link: "https://www.youtube.com/channel/UCzS8zk0tj_-KAi7ljZZ85cw" }
  ]
  const Links = [
    { name: t('navbar.about'), link: "#about" },
    { name: t('navbar.service'), link: "#services" },
    { name: t('navbar.exp'), link: "#experience" },
    { name: t('navbar.projects'), link: "#projects" },
    { name: t('navbar.skills'), link: "#skills" },
  ]
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='flex items-center justify-between bg-white py-4 nr:py-3 nr:px-10 px-7 dark:bg-gray-800 transition-all duration-250 ease-in'>
        <div className='text-2xl cursor-pointer flex items-center text-gray-800 dark:text-white'>
          <a href='https://github.com/pieropr2k'>pieropr2k</a>
          <ThemeButton/>
        </div>
        <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg nr:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <ul className={`shadow-md nr:shadow-none dark:bg-gray-700 dark:nr:bg-gray-800 nr:flex nr:items-center md:pb-0 pb-10 absolute nr:static bg-white nr:z-auto z-[-1] left-0 w-full nr:w-auto nr:pl-0 pl-9 transition-all duration-250 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='nr:ml-7 text-lg nr:my-0 my-5'>
                <a href={link.link} className='text-gray-800 dark:text-white dark:hover:text-gray-400 hover:text-gray-400 duration-500 '>
                  <code className='text-base nr:text-lg'>{`<${link.name}/>`}</code>
                </a>
              </li>
            ))
          }
          
          <LanguageButton/>
          {
            SocialMedia.map((link) => (
              <li key={link.name} className='md:hidden md:ml-7 md:my-0 my-5'>
                <a href={link.link} className='text-gray-800 dark:text-white dark:hover:text-gray-400 hover:text-gray-400 duration-500 flex text-xl'>
                  <SocialMediaLogo socialMediaName={link.name}/>
                  <code className='text-base ml-3'>{`<${link.name}/>`}</code>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar