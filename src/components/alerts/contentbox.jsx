import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import "./alert.css";

function Contentbox() {
  const contentHeader = (
    <div>
      Alert ID #00013211
      <br />
      Detected at 2021-12-22 10:22:21
    </div>
  );

  return (
    <Panel className="ml-4 p-3 h-full w-full" header={contentHeader}>
      <div className="parentbox">
        <Card className="box">
          <audio controls>
            <source src="1.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <canvas id="visualizer-bad"></canvas>
        </Card>
        <Card className="box">
          <audio controls>
            <source src="1.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <canvas id="visualizer-normal"></canvas>
        </Card>
      </div>
    </Panel>
  );
}

export default Contentbox;
