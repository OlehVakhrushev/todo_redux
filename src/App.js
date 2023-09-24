import './App.css';
import {connect} from "react-redux";
import TodoList from "./components/TodoList";

function App(props) {
  return (
    <div className="App">

      <h1>{props.appName}</h1>
      <TodoList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  appName: state.appHeader,

})


export default connect(mapStateToProps)(App);
