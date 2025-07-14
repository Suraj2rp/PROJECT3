import React from 'react'

function DarkModeToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button onClick={toggleDark} className="p-2 border rounded">🌗 Toggle Dark Mode</button>
  );
}
export default DarkModeToggle;
