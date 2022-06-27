import { useState } from 'react';
import SocialMediaLogo from '../SocialMediaLogo';
import './index.css';

const AccordionElement = (props) => {
  const { title, index, isFinal, isProyects } = props
  const [isHidden, setHidden] = useState(true)

  return (
    <>
      <h2 id={"accordion-color-heading-" + index}>
        <button type="button" className={`grid ${isProyects ? 'grid-cols-[30fr_1fr]' : 'grid-cols-[minmax(28px,_1fr)_30fr_1fr]'} items-center p-5 w-full font-medium text-left text-gray-800 border ${isFinal ? '' : 'border-b-0'} border-gray-400 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800`} data-accordion-target={'#accordion-color-body-' + index} aria-expanded="true" aria-controls={"accordion-color-body-" + index} onClick={()=>setHidden(!isHidden)}>
          {!isProyects ? <SocialMediaLogo socialMediaName={title} classDiv={'col-end-2'}/> : ''}
          <span className=''>{ title }</span>
          <svg data-accordion-icon className={"w-6 h-6 shrink-0 " + ( isHidden ? '' : 'rotate-180' )} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </h2>
      <div id={"accordion-color-body-" + index} className={isHidden ? 'hidden' : ''} aria-labelledby={"accordion-color-heading-" + index}>
        <div className={`py-4 px-3 xsm:p-5 border border-${isFinal ? 't' : 'b'}-0 border-gray-400 dark:border-gray-700`}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default AccordionElement;