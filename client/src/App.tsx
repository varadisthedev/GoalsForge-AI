import { useState, useMemo } from 'react'

import './App.css'
import { List } from './components/List';

function App() {
  const [theme, setTheme] = useState("light");

  // const memoizedval = useMemo(() => {
  //   console.log("using use memo for this espensive calculation");
  //   return filterContent(arg1, arg2);
  // }, [arg1, , arg2]); // depending
  return (
    <>
      <div>
        <h1>below botton swaps modes, dark and light</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className=''>click mode</button>

        {/* importing list */}
        <List />
      </div>
    </>
  )
}

export default App
