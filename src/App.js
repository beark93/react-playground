import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import CardGame from "./pages/CardGame";

function App() {
  return (
    <div className="App">
      <Header title={"Kim BY 놀이터"} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-game" element={<CardGame />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
