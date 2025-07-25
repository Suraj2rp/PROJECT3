import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './pages/Login'
import { useEffect } from 'react'
import API from './utils/axois'
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Forms from "./pages/Forms";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

   useEffect(() => {
    API.get('/')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 ml-60">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
