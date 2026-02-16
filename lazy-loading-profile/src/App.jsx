import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

const Profile = lazy(() => import("./pages/Profile"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="container">
      <h1>🚀 Route-Based Lazy Loading</h1>

      <nav>
        <NavLink to="/">Profile</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
