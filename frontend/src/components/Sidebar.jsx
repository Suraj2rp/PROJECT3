import React from 'react'

function Sidebar() {
  return (
    <aside className="w-60 fixed h-screen bg-gray-100 dark:bg-blue-400 text-shadow-lg dark:text-white">
      <div className="p-4 font-bold">Admin</div>
      <ul>
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700"><a href="#">Dashboard</a></li>
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700"><a href="#">Tables</a></li>
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700"><a href="#">Forms</a></li>
      </ul>
    </aside>
  )
}

export default Sidebar
