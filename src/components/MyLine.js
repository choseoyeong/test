import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import { useState } from "react";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
const { data1, data2, data3, data4 } = require("../staticData/myLineData");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MyLine = (props) => {
  const { personal } = props;
  const [manVisible, setManVisible] = useState(false);
  const [ageVisible, setAgeFilter] = useState(false);
  const visibleData = () => {
    if (manVisible && ageVisible) return [data1, data2, data3, data4];
    if (manVisible && !ageVisible) return [data3, data4];
    if (!manVisible && !ageVisible) return [data1];
    if (!manVisible && ageVisible) return [data1, data2];
  };
  const options = {
    animationEnabled: true,
    title: {
      text: "Changes of emotion arousal , valence",
    },
    axisY: {
      title: "Arousal, Valence",
    },
    toolTip: {
      shared: true,
    },
    data: visibleData(),
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!personal && (
        <>
          <FormControlLabel
            control={
              <Switch
                checked={manVisible}
                onChange={() => setManVisible(!manVisible)}
              />
            }
            label="sex filter"
          />
          <FormControlLabel
            control={
              <Switch
                checked={ageVisible}
                onChange={() => setAgeFilter(!ageVisible)}
              />
            }
            label="age filter"
          />{" "}
        </>
      )}
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />

      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
export default MyLine;
