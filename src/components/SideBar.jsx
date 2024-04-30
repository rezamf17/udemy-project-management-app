import React from "react";

export default function SideBar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Your Projects</h1>
        <ul className="mt-4">
          <li className="py-2">
            <a href="#" className="block px-4">
              <button className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                + Add Project
              </button>
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">
              Menu Item 2
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">
              Menu Item 3
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">
              Menu Item 4
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">
              Menu Item 5
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
