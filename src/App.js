import Header from "./Components/Header";
import Planet from "./Components/Planet";
import data from "./data.json";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-background bg-bgimage bg-contained pb-[56px]">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/mercury" />} />
            <Route path="/:name" element={<Planet data={data} />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
