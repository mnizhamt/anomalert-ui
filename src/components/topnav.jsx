import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import React from "react";
import Groundup from "../assets/Groundup.aiblack.png";
import "./topnav.css";

function Topnav() {
  const items = [
    {
      label: "DASHBOARD",
      url: "dash",
    },
    {
      label: "ALERTS",
      url: "alert",
    },
  ];

  const start = <img alt="logo" src={Groundup} className="logo"></img>;
  const end = (
    <div>
      <Button icon="pi pi-cog" className="p-button-link mr-2" />
      <Button icon="pi pi-user" className="p-button-link mr-2" />
      <Button icon="pi pi-bell" className="p-button-link mr-2">
        <Badge value="2" severity="info"></Badge>
      </Button>
      <Button icon="pi pi-ellipsis-v" className="p-button-text mr-2" disabled />
      <Button label="Welcome Admin!" className="p-button-text" disabled />
    </div>
  );

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
}

export default Topnav;
