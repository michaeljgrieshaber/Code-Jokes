import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Rules from './Components/Rules'
import Create from './Components/Create';




function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Create">
        <Create />
      </Route>
  
      <Route exact path="/Rules">
        <Rules />
      </Route>




    </div>
  );
}

export default App;
