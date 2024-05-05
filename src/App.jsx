import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";
import { useState } from 'react'
function App() {
  const [route, setRoute] = useState({
    route: '',
    project: []
  })
  const [chooseProject, setChooseProject] = useState([])

  function handleCreate(data) {
    setRoute((prevRoute) => ({
      ...prevRoute,
      route: data,
      project: prevRoute.project ? [...prevRoute.project, data] : [data]
    }));
    console.log('handle create ',data);
  }

  function handleDataForm(data) {
    setRoute((prevRoute) => ({
      ...prevRoute,
      route: '',
      project: prevRoute.project ? [...prevRoute.project, data] : [data]
    }));
    console.log('handle data form ',route);
  }

  function componentRender () {
    if (route.route == 'create') {
      return <CreateProject create={handleCreate} dataForm={handleDataForm} />
    }else if(route.route == 'project'){
      return <Project profile={chooseProject}/>
    }else{
      return <NoProject create={handleCreate} />
    }
  }

  function handleRouteProject(data) {
    setRoute((prevRoute) => ({
     ...prevRoute,
      route: data
    }))
  }

  function handleChooseProject(data) {
    setChooseProject(data)
  }

  return (
    <div className="flex">
      <SideBar listProject={route.project} route={handleRouteProject} chooseProject={handleChooseProject} />
      <div className="flex-1 flex justify-center items-center">
        {componentRender()}
      </div>
    </div>
  );
}

export default App;
