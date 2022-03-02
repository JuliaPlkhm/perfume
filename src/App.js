import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import { Body } from "./components/Body";
import './App.css';
import {Profile} from './page/Profile/Profile';
import { Login } from './page/Login/Login';
import { Nav } from './components/Navigation';
import { Users } from './page/Users/Users';
import ProfileOld from './page/profile';


function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Body></Body>
         
        </Provider>
      </Router>

    </>
  );
}

export default App;
