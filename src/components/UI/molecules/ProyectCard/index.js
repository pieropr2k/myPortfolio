import { useTranslation } from 'react-i18next';
import SocialMediaLogo from '../../atoms/SocialMediaLogo';
import './index.css';

const ProyectCard = ({ title, imgURL = '../../../../../build/assets/foto_porfolio.jpg', projectURL, tecnologies, isDeployed = false }) => {
  const [t] = useTranslation('global');
  return (
    <div className="card text-white xsm:h-[350px]" style={{ backgroundImage: `url(${imgURL})` }}>
      <div className="card__layer bg-sky-500">
      </div>
      <div className="card__content">
        <div className="card__details pt-1 px-1 xl:mx-32 md:mx-20 bg-sky-500">
          <h2>
            <code className=''>{`<${title}/>`}</code>
          </h2>
        </div>
        <p className='mt-5'>{t('projects.tech')}</p>
        <ul className="about-me-list text-left text-base dark:text-green-400 my-4">
          {
            tecnologies
              ? tecnologies.map(el => <li key={el}>{el}</li>)
              : ''
          }
        </ul>
        {
          projectURL
            ? <div className="buttons__container flex-col gap-1.5 sm:flex-row sm:gap-10">
              <a
                className="button bg-gray-800"
                href={projectURL[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className='flex'>
                  <SocialMediaLogo socialMediaName={'Github'} classDiv={'mr-1.5'} />
                  {`<Repo/>`}
                </code>
              </a>
              {
                isDeployed
                  ? <a
                    className="button bg-gray-800"
                    href={projectURL[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code className='flex'>
                      <SocialMediaLogo socialMediaName={'Internet'} classDiv={'mr-1.5'} />
                      {`<Website/>`}
                    </code>
                  </a>
                  : ''
              }
            </div>
            : ''}
      </div>
    </div>
  );
}

export default ProyectCard;