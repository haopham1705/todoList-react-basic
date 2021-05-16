import { Redirect, Route, Switch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import './App.css';
import NotFound from "./components/Not Found";
import AlbumFeature from "./features/Album";
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Header
      
      {/* <p><Link to="/todo" >Todo</Link></p>
      <p><Link to="/album" >Album</Link></p> */}

      <p><NavLink to="/todo" activeClassName="active" >Todo</NavLink></p>
      <p><NavLink to="/album" activeClassName="active" >Album</NavLink></p>
      
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact /> 
         
        <Route path="/" component={TodoFeature} />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />

        {/* Not Found */}
        <Route component={NotFound} />
      </Switch>
    
      Footer 
    </div>
  );
}

export default App;
