// import { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
function App() {
  // const [theme, setTheme] = useState("light");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>called app.jsx</h1>} />
        <Route path="/about" element={<h1>called about.jsx</h1>} />
      </Routes>
    </Router>
  )
}


export default App
