import { Route, Routes } from "react-router-dom";
import "./App.css";
import Complete from "./Complete";
import Home from "./Home";
import Reservation from "./Reservation";
import Return from "./Return";
import ReturnCheck from "./ReturnCheck";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/return" element={<Return />} />
        <Route path="/reservation/complete" element={<Complete />} />
        <Route path="/return" element={<Return />} />
        <Route path="/return/check" element={<ReturnCheck />} />
      </Routes>
    </div>
  );
}

export default App;
