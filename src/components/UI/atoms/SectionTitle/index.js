import './index.css';

const SectionTitle = ({ numberIndex, title }) => {
  return (
    <div className="title-section flex font-semibold text-3xl dark:text-green-400">
      <h2 className='text-2xl xsm:text-3xl'><span className='text-sky-500'>{`0${numberIndex}.`}</span>{title}</h2>
      <div className="line-title bg-sky-500"></div>
    </div>
  )
}

export default SectionTitle