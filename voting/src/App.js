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
import Election from "./pages/Election";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import ElectionInstructions from "./pages/ElectionInstructions";

function App() {
  const location = useLocation();

  // Pages where Header and Footer should NOT be show
  const hideHeaderFooter = [
    "/login",
    "/personal-info",
    "/personal-info/election",
    "/personal-info/contact",
    "/personal-info/vote",
    "/voting",
  ].includes(location.pathname);

  return (
    <div className="app-container">
      {/* Show Header only when not hidden */}
      {!hideHeaderFooter && <Header />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Rules />} /> {/* Default landing page */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/voting" element={<VotingPanel />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/personal-info/election" element={<Election />} />
          <Route path="/personal-info/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/personal-info/vote"
            element={<ElectionInstructions />}
          />
        </Routes>
      </main>

      {/* Show Footer only when not hidden */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
