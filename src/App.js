import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import { Body } from "./components/Body";
import './App.css';


function App() {
  return (
    <div style={{position: 'relative'}}>
      <Router>
        <Provider store={store}>
          <Body></Body>
        </Provider>
      </Router>

    </div>
  );
}

export default App;



