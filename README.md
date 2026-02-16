# 🚀 EXP-5 : Optimize Frontend Performance Using Lazy Loading

This experiment demonstrates **Lazy Loading in React** to improve frontend performance by reducing initial bundle size and loading components only when required.

The project includes:

- 🔹 Component Lazy Loading using React.lazy() and Suspense
- 🔹 Route-Based Lazy Loading using React Router
- 🔹 Modern UI with dynamic navigation

---

# 📌 Experiment 1 : Component Lazy Loading Using React.lazy and Suspense

## 🎯 Aim
To optimize frontend performance by implementing lazy loading of components in a Single Page Application using React.lazy() and Suspense.

## 🛠 Technologies Used
- React
- React Router DOM
- Vite
- JavaScript
- CSS

## 📖 Description
Lazy loading is a performance optimization technique where components are loaded only when required.

- `React.lazy()` dynamically imports components.
- `Suspense` provides fallback UI while components load.
- This reduces initial bundle size and improves application startup time.

---

# 📌 Experiment 2 : Route-Based Lazy Loading in SPA

## 🎯 Aim
To implement route-based lazy loading to improve performance in a Single Page Application.

## 📖 Description
Route-based lazy loading ensures that components associated with specific routes are loaded only when the user navigates to that route.

This reduces:
- Initial bundle size
- Memory usage
- Application load time

Implemented pages:
- 👤 Profile
- 💡 Skills
- 📞 Contact

Each route is loaded dynamically using React.lazy().

---

# 🖼 Screenshots

## 🔹 Component Lazy Loading

![Lazy Home](./Photos/Screenshot%202026-02-16%20223622.png)
![Lazy Loading Screen](./Photos/Screenshot%202026-02-16%20222822.png)
![Lazy Profile View](./Photos/Screenshot%202026-02-16%20223517.png)

---

## 🔹 Route-Based Lazy Loading – Profile

![Profile Page](./Photos/Screenshot%202026-02-16%20223528.png)

---

## 🔹 Route-Based Lazy Loading – Skills

![Skills Page](./Photos/Screenshot%202026-02-16%20223534.png)

---

## 🔹 Route-Based Lazy Loading – Contact

![Contact Page](./Photos/Screenshot%202026-02-16%20223604.png)

---

## 🔹 Additional Views

![Extra View 1](./Photos/Screenshot%202026-02-16%20223615.png)
![Extra View 2](./Photos/Screenshot%202026-02-16%20224303.png)

---

# ⚙️ Installation & Setup

## Clone the repository

```bash
git clone https://github.com/GURMILLANSINGH/exp-5.git
cd exp-5
```

## Install dependencies

```bash
npm install
```

## Run the project

```bash
npm run dev
```

---

# 📚 Key Concepts Covered

- React.lazy()
- Suspense
- Dynamic Imports
- Code Splitting
- Route-Based Lazy Loading
- React Router
- Performance Optimization
- Bundle Size Reduction

---

# 🧑‍💻 Author

**Gurmillan Singh**

---

# ✅ Result

Successfully implemented Component Lazy Loading and Route-Based Lazy Loading using React.lazy() and Suspense, improving frontend performance by loading components only when required.
