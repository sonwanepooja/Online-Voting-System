import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Registration from "./pages/Registration";
import PersonalInfo from "./pages/PersonalInfo";
import Rules from "./pages/Rules";
import VotingPanel from "./pages/VotingPanel";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // ✅ only login page

  return (
    <div className="app-container">
      {!isLoginPage && <Header />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Rules />} />
          <Route path="/home" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/voting" element={<VotingPanel />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
