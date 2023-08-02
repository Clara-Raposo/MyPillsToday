import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom";
import { PillsListPage } from "./pages/PillsListPage.jsx";
import { AddPillPage } from "./pages/AddPillPage.jsx";
import { PillDetailPage } from "./pages/PillDetailPage.jsx";
import "./App.css";

function App() {

  return (
    <>
    <header>
      <Link to="/medication">logo</Link>
    </header>
    <div>
    <Link to="/add-pill">Add a pill</Link>
    </div>
      
      <main>
        <Routes>
          <Route path="/medication" element={<PillsListPage />} />
          <Route path="/add-pill" element={<AddPillPage />} />
          <Route path="/pill/:pill_id" element={<PillDetailPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */