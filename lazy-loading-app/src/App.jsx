import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

/* Artificial 3 second delay */
const delay = (importFunc) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), 3000);
  });

const Home = lazy(() => delay(() => import("./pages/Home")));
const About = lazy(() => delay(() => import("./pages/About")));
const Contact = lazy(() => delay(() => import("./pages/Contact")));

function App() {
  return (
    <div className="container">
      <h1>⚡ React Lazy Loading (Vite)</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Suspense
        fallback={
          <div className="loading-screen">
            Loading<span className="dots">...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
