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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V3a1 1 0 0 1 1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Add Project
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
