import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-60 fixed h-screen bg-blue-400 text-white">
      <div className="p-4 font-bold">Admin</div>
      <ul className="flex flex-col space-y-2 px-4">
        <li>
          <Link className="block p-2 hover:bg-blue-500 rounded" to="/Dashboard"> Dashboard</Link>
        </li>
        <li>
          <Link className="block p-2 hover:bg-blue-500 rounded" to="/Tables">Tables</Link>
        </li>
        <li>
          <Link className="block p-2 hover:bg-blue-500 rounded" to="/Forms">Form</Link>
        </li>
        <li>
          <Link className="block p-2 hover:bg-blue-500 rounded" to="/Login">Login</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
