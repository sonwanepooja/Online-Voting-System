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
import ResetPassword from "./pages/ResetPassword";
import Cookies from "js-cookie";
import AdminDashboard from "./pages/AdminDashboard";
import Candidates from "./pages/Candidates";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Results from "./pages/Results";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();
  const user = Cookies.get("authData")
    ? JSON.parse(Cookies.get("authData"))
    : null;
  console.log(user);

  // Pages where Header and Footer should NOT be show
  // Pages where Header and Footer should NOT be shown
  const hideHeaderFooter = ["/adminDashboard", "/login", "/personal-info"].some(
    (path) =>
      location.pathname === path ||
      location.pathname.startsWith("/adminDashboard") ||
      location.pathname.startsWith("/personal-info/voting/") ||
      location.pathname.startsWith("/reset-password/")
  );

  return (
    <div className="app-container">
      {/* Show Header only when not hidden */}
      {!hideHeaderFooter && <Header />}

      <main className="main-content">
        <Routes>
  {user && user.role === "admin" ? (
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
  ) : (
    <Route path="/*" element={<Home />} />
  )}
  <Route path="/" element={<Rules />} />
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/about" element={<About />} />
  <Route path="/feature" element={<Features />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/personal-info/voting/:id" element={<VotingPanel />} />
  <Route path="/personal-info" element={<PersonalInfo />} />
  <Route path="/personal-info/election" element={<Election />} />
  <Route path="/personal-info/contact" element={<Contact />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/personal-info/vote" element={<ElectionInstructions />} />
  <Route path="/reset-password/:token" element={<ResetPassword />} />
</Routes>

      </main>

      {/* Show Footer only when not hidden */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
