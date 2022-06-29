import "./App.css";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
