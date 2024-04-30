import { Container } from 'react-bootstrap';
import './App.css'
import ListOfTodos from "./components/ListOfTodos";
import { Route, Switch } from 'react-router-dom';
import ToDo from './components/ToDo';

const App = () =>{
  return(<>
    <header className="header">
      <h3>Todo Management Application</h3>
    </header>
    <Container>
    <Switch>
        <Route path="/todos"> <ListOfTodos/></Route>
        <Route path="/update-todo/:id" ><ToDo/></Route>
        <Route path="/add-todo"><ToDo/></Route>
    </Switch>
    </Container>
    <footer className="footer">
      <p>Copyrights reserved</p>
    </footer>
  </>)
}
export default App;