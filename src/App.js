import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Diary from "./pages/Diary";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
