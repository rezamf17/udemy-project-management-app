import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import CreateProject from "./components/CreateProject";
import { useState } from 'react'
function App() {
  const [route, setRoute] = useState({
    route: '',
    project: []
  })

  function handleCreate(data) {
    setRoute({
      route: data,
      project: []
    })
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
    }else{
      return <NoProject create={handleCreate} />
    }
  }

  return (
    <div className="flex">
      <SideBar listProject={route.project} />
      <div className="flex-1 flex justify-center items-center">
        {componentRender()}
      </div>
    </div>
  );
}

export default App;
