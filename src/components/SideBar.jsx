import React from "react";

export default function SideBar({listProject, route, chooseProject}) {

  function handleRouteProject(items) {
    console.log('choose',items);
    chooseProject(items)
    return route("project")
  }

  function handleCreate() {
    return route("create")
  }
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Your Projects</h1>
        <ul className="mt-4">
          <li className="py-2">
            <a href="#" className="block px-4">
              <button className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={handleCreate}>
                + Add Project
              </button>
            </a>
          </li>
          {
            listProject.map((items, index) => (
              <li key={index} className="py-2">
                <a href="#" className="block px-4 hover:bg-gray-700 justify-center" onClick={() => handleRouteProject(items)}>
                  { items && <p className="text-gray-400">{items[0].title}</p>}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  );
}
