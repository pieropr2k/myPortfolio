import './index.css';
import SectionTitle from '../../atoms/SectionTitle';

const PortfolioSectionDiv = (props) => {
  const { sectionIndex, titleName, sectionID} = props;
  return (
    <section className={`section-${sectionIndex} mx-8 my-14 md:ml-28 md:mr-12 xl:mr-28 dark:text-white`} id={sectionID}>
      <SectionTitle numberIndex={sectionIndex} title={titleName} />
      {props.children}
    </section>
  );
}

export default PortfolioSectionDiv;