import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

function Sidebox() {
  const header = (
    <div className="flex justify-content-left flex-wrap">
      <div className="flex justify-content-left align-item-left align-content-left text-left">
        <Button label="ID #00013211" className="p-button-link" />
      </div>
      <div className="flex justify-content-right align-item-right align-content-right text-right">
        <Button label="Moderate" className="p-button-rounded p-button-warning p-button-sm" />
      </div>
    </div>
  );

  return (
    <Panel header={header}>
      Unknown Anomaly<p>Detected at 2021-06-18 18:20:12</p>
    </Panel>
  );
}

export default Sidebox;
