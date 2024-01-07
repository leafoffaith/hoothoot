import "./App.css";
//Views import
import Home from "./views/Home";
import List from "./views/List";
//React router import
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
