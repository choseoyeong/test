import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import { useState } from "react";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
const { data1, data2, data3, data4 } = require("../staticData/myLineData");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StaticMyPersonalLine = (props) => {
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
    data: [data1, data2],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />

      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
export default StaticMyPersonalLine;
