import ProyectsTabs from "../ProyectsTabs";
import './index.css';
import data from "../../../../data/data";
import AccordionDiv from "../AccordionDiv";
import { useTranslation } from "react-i18next";

const ProyectsDiv = () => {
  const [t] = useTranslation('global');
  return (
    <>
      <ProyectsTabs projectsArray={data.proyects} accordionElementNames={t('projects.projectsLevelsTitle', { returnObjects: true })} accordionElementDescriptions={t('projects.projectsLevelsDescription', { returnObjects: true })}/>
      <AccordionDiv projectsArray={data.proyects} isProyects={true} projectLevelsDescription={t('projects.projectsLevelsDescription', { returnObjects: true })} accordionElementNames={t('projects.projectsLevelsTitle', { returnObjects: true })}/>
    </>
  );
}

export default ProyectsDiv;