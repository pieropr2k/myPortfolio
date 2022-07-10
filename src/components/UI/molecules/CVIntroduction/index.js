import { useTranslation } from 'react-i18next';
import PortfolioButton from '../../atoms/PortfolioButton';
import TypewriterDiv from '../../atoms/TypewriterDiv';
import './index.css';

const CVIntro = () => {
  const [t] = useTranslation('global');
  //section-1 mx-8 md:mx-28 mt-28 xsm:mt-36 mb-28 <-- actual
  //mx-8 my-14 md:ml-28 md:mr-12 xl:mr-28
  return (
    <>
      <section className="section-1 mx-8 md:ml-28 md:mr-12 mt-28 xsm:mt-36 mb-28" id="home">
        <p className='intro-p text-sky-500'>{t('intro.myname')}</p>
        <h1 className='text-green-400 mb-2 text-5xl sm:text-7xl'>PIERO PILCO</h1>
        <TypewriterDiv textDiv={t('intro.subtitle')} classDiv={'dark:text-gray-300 text-3xl sm:text-6xl'}/>
        <p className='description my-11 md:w-1/2 dark:text-white'>
          {t('intro.description')}
        </p>
        <br></br>
        <PortfolioButton title={t('intro.button')} url={t('mailto')}/>
      </section>
    </>
  );
}

export default CVIntro;