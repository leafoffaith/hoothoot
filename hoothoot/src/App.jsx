import "./App.css";
//Views import
import Home from "./views/Home";
import List from "./views/List";
import Navigationbar from "./global-components/Navbar/Navigationbar";
import PodcastView from "./views/PodcastView";
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
          <Route path="/podcastviewtest" element={<PodcastView />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
