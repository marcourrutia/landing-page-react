import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center w-75">
        <div className="row mb-3">
          <Jumbotron />
        </div>
        <div className="row d-flex justify-content-between gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
