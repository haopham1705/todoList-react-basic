import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link, NavLink } from 'react-router-dom';
import NotFound from '../../components/NotFound'
// import TodoList from "./components/TodoList";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";


TodoFeature.propTypes = {}

export default function TodoFeature(props) {
  const match = useRouteMatch(); //nested routing
  
  return (
    <div>
     Todo Main
      {/* <p>
        <Link to={match.path}>List Page</Link>
      </p>
      <p>
        <Link to={`${match.path}/123`}>Detail Page</Link>
      </p> */}
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

{ /* <Route path={match.path} component={ListPage} exact/>
      <Route path={`${match.path}/:todoId`} component={DetailPage} />  */}
{/* <h3>Todo List</h3>
    <TodoList todoList={todoList}/> */}
{/* <Route path="/todo/:todoId" component={DetailPage} /> */ }
