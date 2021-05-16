import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/Not Found";
// import TodoList from "./components/TodoList";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";


TodoFeatures.propTypes = {

}
export default function TodoFeatures(props) {
  const match = useRouteMatch(); 
  
  return (
  <div>
    <Switch>
      <Route path={match.path} component={ListPage} exact/>
      <Route path={`${match.path}/:todoId`} component={DetailPage} />
      {/* Not found */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
  );
}

{/* <h3>Todo List</h3> 
    <TodoList todoList={todoList}/> */}
{/* <Route path="/todo/:todoId" component={DetailPage} /> */ }
