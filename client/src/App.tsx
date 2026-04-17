import { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
function App() {
  // const [theme, setTheme] = useState("light");

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>called app.jsx</h1>
        </Route>

        <Route path="/about" exact>
          <h1>called about.jsx</h1>
        </Route>


      </Switch>
    </Router>
  )
}

    </>
  )
}

export default App
