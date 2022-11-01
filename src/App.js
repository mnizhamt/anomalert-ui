import React from "react";
import "./App.css";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";

import { Outlet } from "react-router-dom";
import Topnav from "./components/topnav";

function App() {
  return (
    <div className="appbody">
      <header>
        <Topnav />
      </header>
      <main className="appmain">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
