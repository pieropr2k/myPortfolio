import { useTranslation } from 'react-i18next';
import TimelineItem from '../../molecules/TimelineItem';
import './index.css';

const ExperienceDiv = (props) => {
  const [t] = useTranslation('global');

  return (
    <div className="timeline-items">
      {
        t('exp.exp', { returnObjects: true }).map(({experienceYear, experienceTitle, experienceDescription}) => (
          <TimelineItem
            key={experienceYear}
            experienceYear={experienceYear}
            experienceTitle={experienceTitle}
            experienceDescription={experienceDescription}
          />
        ))
      }
    </div>
  );
}

export default ExperienceDiv;