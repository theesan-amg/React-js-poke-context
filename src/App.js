import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Error404 from './components/Error404';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>

      <nav className="nav-bar" >
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
      </nav>

      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="*" component={Error404}/>        
        
      </Switch>

    </BrowserRouter>
  )
}

export default App;
