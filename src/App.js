// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store"
// import { Body } from "./components/Body";
// import './App.css';
// import {Profile} from './page/Profile/Profile';
import { Login } from './page/Login/Login';
// import { Nav } from './components/Navigation';
// import { Users } from './page/Users/Users';
// import ProfileOld from './page/profile';


// function App() {
//   return (
//     <div style={{position: 'relative'}}>
//       {/* <Router> */}
//         <Provider store={store}>
//           {/* <Body></Body> */}
//         <Login/>
//         </Provider>
//       {/* </Router> */}

//     </div>
//   );
// }

// export default App;



import { Provider } from "react-redux";
import React, { useState } from "react";

import store from "./redux/store";

export default function App() {
  const [isDark, toggleIsDark] = useState(false);

  const ctx = {
    toggleTheme: () => {
      toggleIsDark(!isDark);
    },
    theme: isDark ? "dark" : "light",
  };

  return (
    // <Context.Provider value={ctx}>
      // <Router>
        <Provider store={store}>
          {/* <Body></Body> */}
          <Login></Login>
        </Provider>
      // </Router>
    // </Context.Provider>
  );
}
