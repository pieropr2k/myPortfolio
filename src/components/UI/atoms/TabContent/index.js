import ProyectCard from "../../molecules/ProyectCard";

const TabContent = (props) => {
  const { toggleState, tabNumber, projectsArray } = props

  return (
    <div className={toggleState === tabNumber ? "content active-content" : "content"}>
      <p>
        {props.children}
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
        {projectsArray.map(el=><ProyectCard key={el.title} title={el.title} imgURL={el.imgUrl} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools}/>)}
      </div>
    </div>
  )
}

export default TabContent;