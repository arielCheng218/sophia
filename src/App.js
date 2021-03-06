import logo from "./assets/logo.svg";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
