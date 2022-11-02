import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./alert.css";
import Contentbox from "./contentbox";
import Sidebox from "./sidebox";

function Alert() {
  const [machine, setMachine] = useState("");

  const machineItems = [
    { label: "CNC Machine", value: "CNC Machine" },
    { label: "Milling Machine", value: "Milling Machine" },
  ];

  const alertHeader = (
    <div className="alertheader pb-2">
      <Dropdown value={machine} options={machineItems} onChange={(e) => setMachine(e.value)} placeholder="Select a machine" />
    </div>
  );

  return (
    <div className="alertcard">
      <Card header={alertHeader} className="alertcard">
        <div className="alertcontent">
          <div>
            <Button label="Back" icon="pi pi-chevron-left" className="p-button-outlined p-button-sm" />
            <div className="grid m-1 alertcount">
              <div className="col text-center align-items-center">
                <Button label="Alert 6" className="p-button-link" />
              </div>
              <div className="col text-center align-items-center">
                <Button label="2 New" className="p-button-link" />
              </div>
            </div>
            <Sidebox />
          </div>
          <Contentbox />
        </div>
      </Card>
    </div>
  );
}

export default Alert;
