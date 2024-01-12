import "./App.css";
import Navigationbar from "./global-components/Navbar/Navigationbar";
//Views import
import Home from "./views/Home";
import List from "./views/List";
//React router import
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/navbarcomponenttest" element={<Navigationbar />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
