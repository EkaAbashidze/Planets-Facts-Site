import Header from "./Components/Header";
import Planet from "./Components/Planet";
import data from "./data.json";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-background bg-bgimage bg-cover pb-[56px]">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/mercury" />} />
            <Route path="/:name" element={<Planet data={data} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
