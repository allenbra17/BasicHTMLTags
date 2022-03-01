import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import stove from "./Assets/stove.png"

function App() {
  return (
    <div className="App">
      <img src={stove}/>
      <h1 id="title">Whats4Dinner</h1>
    </div>
  );
}

export default App;
