// ui components
import Nav from './components/Nav';


import './App.css';
// import route and our components
import { Route } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/price/:symbol" render={(renderProps) => {
        return <Price {...renderProps} />
      }} />
    </div>
  );
}

export default App;
