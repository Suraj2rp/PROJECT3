import { useState } from 'react'
// import Login from './pages/Login'
import { useEffect } from 'react'
import API from './utils/axois'

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
    <div>
      <h1>Hwllo</h1>
    </div>

  )
}

export default App
