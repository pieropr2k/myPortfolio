import './index.css';

const TimelineItem = ({ experienceYear, experienceTitle, experienceDescription }) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-dot bg-green-400'></div>
      <div className='timeline-date text-green-400'>{experienceYear}</div>
      <div className="timeline-content">
        <h3>{experienceTitle}</h3>
        <ul className="about-me-list text-left text-sm xsm:text-base text-gray-200 my-4">
          {
            experienceDescription
              ? experienceDescription.map((el, index) => <li key={index} className={'my-3 md:my-0'}>{el}</li>)
              : ''
          }
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;