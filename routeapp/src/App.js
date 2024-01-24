import "./App.css";
import Display from "./Components/GraphDisplay/Display";
import { GraphProvider } from "./Components/Context/context";

function App() {
  return (
    <div className="App">
      <GraphProvider>
        <Display />
      </GraphProvider>
    </div>
  );
}

export default App;
