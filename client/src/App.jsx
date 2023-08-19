import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom";
import { PillsListPage } from "./pages/PillsListPage.jsx";
import { AddPillPage } from "./pages/AddPillPage.jsx";
import { PillDetailPage } from "./pages/PillDetailPage.jsx";
import { PillCreatedPage } from "./pages/PillCreatedPage.jsx";
import { DeletedPillPage } from "./pages/DeletedPillPage.jsx";
import {Configuration } from "./pages/Configuration.jsx";
import {AlarmsChanged} from "./pages/AlarmsChanged.jsx";
import {MyPillsToday} from "./pages/MyPillsToday.jsx";
import "./App.css";

function App() {

  return (
    <div className='App-container'>
    <header className='header'>
      <ul>
        <li><Link to="/medication">logo </Link></li>
        <li><Link to="/my-pills-today">Mis Pastillas de Hoy </Link></li>
        <li><Link to="/add-pill">Añadir Pastilla </Link></li>
        {/*<li><Link to="/configuration">Ajustes </Link></li>*/}
      </ul>
    </header>
    
    
    
      
      <main>
        <Routes>
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/medication" element={<PillsListPage />} />
          <Route path="/add-pill" element={<AddPillPage />} />
          <Route path="medication/pills/:pill_id" element={<PillDetailPage />} />
          <Route path="/new-pill-created/:pill_id" element={<PillCreatedPage />} />
          <Route path="/deleted-pill" element={<DeletedPillPage />} />
          <Route path="/changed-alarms" element={<AlarmsChanged />} />
          <Route path="/my-pills-today" element = {<MyPillsToday/>} />
        </Routes>
      </main>
    </div>
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