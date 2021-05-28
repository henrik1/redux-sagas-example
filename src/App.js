import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileExample1 from './pages/ProfileExample/ProfileExample1';
import ProfileExample2 from './pages/ProfileExample/ProfileExample2';
import ProfileExample3 from './pages/ProfileExample/ProfileExample3';
import ProfileExample4 from './pages/ProfileExample/ProfileExample4';
import ToastsExample1 from './pages/ToastExample/ToastExample1';
import ToastsExample2 from './pages/ToastExample/ToastExample2';
import AutoSaveExample1 from './pages/AutoSaveExample/AutoSaveExample1';
import Toasts from './components/Toasts';
import ConfirmationDialog from './components/ConfirmationDialog';
import TodosExample from './pages/TodosExample/TodosExample';

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to="/profileExample1">Profile example 1</Link>
      </li>
      <li>
        <Link to="/profileExample2">Profile example 2</Link>
      </li>
      <li>
        <Link to="/profileExample3">Profile example 3</Link>
      </li>
      <li>
        <Link to="/profileExample4">Profile example 4</Link>
      </li>
      <li>
        <Link to="/toastsExample1">Toast example 1</Link>
      </li>
      <li>
        <Link to="/toastsExample2">Toast example 2</Link>
      </li>
      <li>
        <Link to="/autoSaveExample1">AutoSave example 1</Link>
      </li>
      <li>
        <Link to="/todosExample">Todos example</Link>
      </li>
    </ul>
  </nav>
)

export default function App() {

  return (
    <Router>
      <ConfirmationDialog />
      <Toasts />

      <div>
        <Switch>
          <Route path="/profileExample1">
            <ProfileExample1 />
          </Route>
          <Route path="/profileExample2">
            <ProfileExample2 />
          </Route>
          <Route path="/profileExample3">
            <ProfileExample3 />
          </Route>
          <Route path="/profileExample4">
            <ProfileExample4 />
          </Route>
          <Route path="/toastsExample1">
            <ToastsExample1 />
          </Route>
          <Route path="/toastsExample2">
            <ToastsExample2 />
          </Route>
          <Route path="/autoSaveExample1">
            <AutoSaveExample1 />
          </Route>
          <Route path="/todosExample">
            <TodosExample />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
