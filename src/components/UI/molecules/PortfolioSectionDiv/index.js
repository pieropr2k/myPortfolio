import './index.css';
import SectionTitle from '../../atoms/SectionTitle';

const PortfolioSectionDiv = (props) => {
  const { sectionIndex, titleName, showTitle = true, sectionID} = props;
  return (
    <div className={`section-${sectionIndex} mx-8 my-14 md:mx-28 dark:text-white`} id={sectionID}>
      { showTitle ? (<SectionTitle numberIndex={sectionIndex} title={titleName} />) : ''}
      {props.children}
    </div>
  );
}

export default PortfolioSectionDiv;