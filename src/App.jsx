import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/beranda" Component={Beranda} />
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;
