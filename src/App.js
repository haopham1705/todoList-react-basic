import { useEffect } from 'react';
// import { Redirect, Route, Switch } from 'react-router';
import {BrowserRouter as Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import CounterFeature from './features/Counter'

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="menu-active" >
          Albums
        </NavLink>
      </p>
      <p>
        <NavLink to="/counter" activeClassName="menu-active" >
          Counter
        </NavLink>
      </p>
      
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
  
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/counter" component={CounterFeature} />
        
        <Route component={NotFound} />
      </Switch> 
      Footer
    </div>
  );
}

export default App;


{/* <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p> */}