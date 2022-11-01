import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./alert.css";

function Alert() {
  const [machine, setMachine] = useState("");

  const machineItems = [
    { label: "CNC Machine", value: "CNC" },
    { label: "Wiring Machine", value: "WIR" },
    { label: "Smashing Machine", value: "SMA" },
  ];

  const alertHeader = (
    <div className="alertheader">
      <Dropdown value={machine} options={machineItems} onChange={(e) => setMachine(e.value)} placeholder="Select a machine" />
    </div>
  );

  const sideAlert = (
    <div className="border-round grid p-2">
      <div className="col">ID #00013211</div>
      <div className="col">
        <Button label="Moderate" className="p-button-rounded p-button-warning" />
      </div>
    </div>
  );

  return (
    <div className="alertcard">
      <Card header={alertHeader} className="alertcard p-2">
        <div className="alertcontent">
          <div>
            <div className="block">
              <Button label="Back" icon="pi pi-chevron-left" className="p-button-text p-button-sm pr-3" />
            </div>
            <div className="grid mt-3">
              <div className="col">Alert 6</div>
              <div className="col">
                <Button label="2 New" className="p-button-rounded" />
              </div>
            </div>
            <div className="mt-3">
              <Card header={sideAlert}>
                Unknown Anomaly<p>Detected at 2021-06-18 18:20:12</p>
              </Card>
            </div>
          </div>
          <div className="ml-4 border-solid p-3">main content</div>
        </div>
      </Card>
    </div>
  );
}

export default Alert;
