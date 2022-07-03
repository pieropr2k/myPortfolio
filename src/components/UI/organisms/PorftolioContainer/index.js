import { useTranslation } from 'react-i18next';
import PortfolioButton from '../../atoms/PortfolioButton';
import CVIntro from '../../molecules/CVIntroduction';
import PortfolioSectionDiv from '../../molecules/PortfolioSectionDiv';
import ServiceInfo from '../../molecules/ServiceLikeInfo';
import ExperienceDiv from '../VerticalTimeline';
import './index.css';
import AccordionDiv from '../../molecules/AccordionDiv';
import ProyectsDiv from '../../molecules/ProyectsDiv';
import CV_ESpdf from '../../../../assets/CV-Work.pdf';
import CVpdf from '../../../../assets/CV-Works.pdf';

const PortfolioContainer = () => {
  const [t] = useTranslation('global');
  return (
    <>
      <CVIntro />
      <PortfolioSectionDiv sectionIndex={2} titleName={t('about.title')} sectionID={'about'}>
        <div className="flex flex-col-reverse md:flex-row mt-3">
          <div className="left pe-4 dark:text-white">
            <p>{t('about.description1')}</p>
            <p className='mt-2'>{t('about.description2')}</p>
            <ul className="about-me-list text-base dark:text-green-400 mt-4">
              <li>Octave</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>ReactJS</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="about-me-image self-center mb-6">
            <div className="mine_img border-sky-500 dark:border-white"></div>
          </div>
        </div>
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={3} titleName={t('services.title')} sectionID={'services'}>
        <p>{t('services.description')}</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-sky-500 gap-px mt-4'>
          {t('services.services', { returnObjects: true }).map((el, index) => <div key={index} className={`text-sm xsm:text-base bg-white dark:${(index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800')}`}>
            <ServiceInfo serviceName={el.title}>
              {el.description}
            </ServiceInfo>
          </div>)}
        </div>
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={4} titleName={t('exp.title')} sectionID={'experience'}>
        <p className='mb-4'>{t('exp.description1')}</p>
        <ExperienceDiv />
        <p className='my-6'>{t('exp.description2')}</p>
        <PortfolioButton title={t('exp.button')} url={t('exp.CV_EN') ? CVpdf : CV_ESpdf}/>
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={5} titleName={t('projects.title')} sectionID={'projects'}>
        <p>{t('projects.description1')}</p>
        <ProyectsDiv />
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={6} titleName={t('skills.title')} sectionID={'skills'}>
        <p>{t('skills.description')}</p>
        <AccordionDiv />
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={7} titleName={t('contact.title')} sectionID={'contact'}>
        <p className='mb-4'>{t('contact.description')}</p>
        <div className='flex justify-center'>
          <PortfolioButton title={t('contact.button')} />
        </div>
      </PortfolioSectionDiv>

      <PortfolioSectionDiv sectionIndex={8} showTitle={false}>
        <p className='flex justify-center'>{t('footer.title')}
          <img src='https://flagpedia.net/data/flags/w580/pe.png' width={30} className={'ml-2 final-flag'} alt='Peru'></img>
        </p>
      </PortfolioSectionDiv>
    </>
  );
}

export default PortfolioContainer;
