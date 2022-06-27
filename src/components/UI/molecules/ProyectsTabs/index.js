import { useState } from "react";
import TabContent from "../../atoms/TabContent";
import './index.css';

const ProyectsTabs = ({projectsArray, accordionElementNames, accordionElementDescriptions}) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs-container border border-gray-400 dark:text-white dark:border-gray-700 mt-5 xsm-phone">
      <div className="bloc-tabs">
        <button
          className={'border-r border-gray-400 ' + (toggleState === 1 ? "tabs active-tabs dark:bg-gray-600" : "tabs dark:border-gray-700")}
          onClick={() => toggleTab(1)}
        >
          {accordionElementNames[0]}
        </button>
        <button
          className={'border-r border-gray-400 ' + (toggleState === 2 ? "tabs active-tabs dark:bg-gray-600" : "tabs dark:border-gray-700")}
          onClick={() => toggleTab(2)}
        >
          {accordionElementNames[1]}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs dark:bg-gray-600" : "tabs dark:border-gray-700"}
          onClick={() => toggleTab(3)}
        >
          {accordionElementNames[2]}
        </button>
      </div>

      <div className="content-tabs">
        <TabContent toggleState={toggleState} tabNumber={1} projectsArray={projectsArray[0]}>
          {accordionElementDescriptions[0]}
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={2} projectsArray={projectsArray[1]}>
        {accordionElementDescriptions[1]}
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={3} projectsArray={projectsArray[2]}>
        {accordionElementDescriptions[2]}
        </TabContent>
      </div>
    </div>
  );
}

export default ProyectsTabs;