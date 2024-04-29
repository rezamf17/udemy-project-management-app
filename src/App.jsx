import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex justify-center items-center">
        <NoProject />
      </div>
    </div>
  );
}

export default App;
