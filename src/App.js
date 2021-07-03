import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Departements from "./Components/Departements/Departements";
import { inputFields, initalzation } from "./algorthm"
import Button from './Components/Controls/Button';
import Result from './Components/Result/Result';

const App = () => {
  const [schedules, setschedules] = useState([])
  const handleMessage = (item, index) => {
    console.log(index)
    inputFields(item, index);
    var a = initalzation(index);
    setschedules([...schedules, a]);
    console.log(schedules);
  }

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact>
            <Departements handleMessage={handleMessage} />
          </Route>
          <Route path="/result" exact>
            {schedules.map((schedule) => (
              <Result schedules={schedule} />
            ))}
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
