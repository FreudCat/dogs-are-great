import "./App.css";
import ChooseCanineForm from "./ChooseCanineForm";
import GetCanineAPI from "./GetCanineAPI";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs of Skyrim and Fallout</h1>
      </header>
      <ChooseCanineForm />
      <GetCanineAPI />
    </div>
  );
}

export default App;
