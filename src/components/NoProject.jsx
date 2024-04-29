import NoProjectImage from "../assets/no-projects.png";

export default function NoProject() {
  return (
    <div className="text-center">
      <img src={NoProjectImage} alt="no project image" className="block mx-auto size-40" />
			<h3 className="font-bold">No Project Selected</h3>
			<p>Select a project or get started with a new one</p>
			<button className="justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Create new project</button>
    </div>
  );
}
