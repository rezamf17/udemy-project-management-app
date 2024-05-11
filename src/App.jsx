import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";
import { useState } from 'react'
function App() {
  const [route, setRoute] = useState({
    route: '',
    project: [],
  })
  const [chooseProject, setChooseProject] = useState([])

  function handleCreate(data) {
    setRoute((prevRoute) => ({
      ...prevRoute,
      route: data,
      project: prevRoute.project ? [...prevRoute.project, data] : [data]
    }));
    console.log('handle create ', data);
  }

  function handleDelete(data) {
    handleCreate('')
    const updatedProject = route.project.filter(projectItem => projectItem !== data);

    setRoute(prevRoute => ({
      ...prevRoute,
      project: updatedProject
    }));
  
    console.log('handle delete ', data);
  }

  function handleDataForm(data) {
    setRoute((prevRoute) => ({
      ...prevRoute,
      route: '',
      project: prevRoute.project ? [...prevRoute.project, data] : [data]
    }));
    console.log('handle data form ', route);
  }

  function chooseJob(data) {
 console.log('choose data', data);

  // Salin array chooseProject dan perbarui objek yang sesuai
  const updatedChooseProject = chooseProject.map(project => {
    // Jika objek tidak berubah, kembalikan objek asli
    if (project.id !== data.id) {
      return project;
    }

    // Jika objek berubah, buat salinan baru dan tambahkan properti task baru
    return {
      ...project,
      task: data
    };
  });

  // Perbarui state chooseProject dengan array yang telah diperbarui
  setChooseProject(updatedChooseProject);
  }

  function handleDeleteProfile() {
    setChooseProject([])
    // handleCreate('')
    console.log('route after delete project', route)
    console.log('choose project',chooseProject)
  }

  
  function handleRouteProject(data) {
    setRoute((prevRoute) => ({
      ...prevRoute,
      route: data
    }))
  }
  console.log('route', route)
  function handleChooseProject(data) {
    setChooseProject(data)
  }
  function componentRender() {
    if (route.route == 'create') {
      return <CreateProject create={handleCreate} dataForm={handleDataForm} />
    } else if (route.route == 'project') {
      return <Project profile={chooseProject} job={chooseJob} deleteProfile={handleDelete} />
    } else {
      return <NoProject create={handleCreate} />
    }
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
