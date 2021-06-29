import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Shop from "./components/Shop";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Shop />
      </div>
    </Router>
  );
}

export default App;
