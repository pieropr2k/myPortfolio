import { useTranslation } from "react-i18next";
import AccordionElement from "../../atoms/AccordionElement";
import ProyectCard from "../ProyectCard";
import './index.css';

const AccordionDiv = ({ accordionElementNames, projectsArray, projectLevelsDescription, isProyects = false }) => {
  const [t] = useTranslation('global');
  return (
    <div id="accordion-color" data-accordion="collapse" className={"mt-4 " + (isProyects ? "mx-[-0.85rem] xsm-normal" : "")} data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[0] : 'Frontend'} index={1}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[0] : t('skills.front')}</p>
        {
          !isProyects
            ? <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500">HTML</li>
                <li className="text-blue-600 dark:text-blue-500">CSS</li>
                <li className="text-blue-600 dark:text-blue-500">Javascript</li>
                <li className="text-blue-600 dark:text-blue-500">React JS</li>
                <li className="text-blue-600 dark:text-blue-500">Cypress</li>
              </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[0].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>
      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[1] : 'Backend'} index={2}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[1] : t('skills.back')}</p>
        {
          !isProyects
            ? <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500">PostgreSQL</li>
                <li className="text-blue-600 dark:text-blue-500">Node.js</li>
                <li className="text-blue-600 dark:text-blue-500">Express</li>
                <li className="text-blue-600 dark:text-blue-500">Jest</li>
              </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[1].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>
      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[2] : 'Extra'} index={3} isFinal={true}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[2] : t('skills.extra')}</p>
        {
          !isProyects
            ? <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500">Java</li>
                <li className="text-blue-600 dark:text-blue-500">R</li>
                <li className="text-blue-600 dark:text-blue-500">Octave</li>
                <li className="text-blue-600 dark:text-blue-500">Solidity</li>
                <li className="text-blue-600 dark:text-blue-500">Assembly</li>
              </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[2].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>
    </div>
  );
}

export default AccordionDiv;