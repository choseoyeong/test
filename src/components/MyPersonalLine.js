import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import { useState } from "react";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
// const { data1, data2, data3, data4 } = require("../staticData/myLineData");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MyPersonalLine =  (props) => {
  const { data } = props;
  // console.log("bData", data);
  let ArousalPoints, ValencePoints;
  ArousalPoints = data.map((each) =>
    each.map(({ Arousal, time_stamp }, idx) => ({
      y: Arousal,
      label: new Date(idx * 1000).toISOString().substr(14, 5),
    }))
  );
  ValencePoints = data.map((each) =>
    each.map(({ Valence, time_stamp }, idx) => ({
      y: Valence,
      label: new Date(idx * 1000).toISOString().substr(14, 5),
    }))
  );
  const formatData = {
    type: "spline",
    showInLegend: true,
  };
  const options = {
    animationEnabled: true,
    title: {
      text: "Changes In Emotions' Intensity ",
      fontSize: 25,
      fontWeight: "bold",
      padding: {
        top: 50,
      },
    },
    toolTip: {
      shared: true,
    },
    data: [
      ...ArousalPoints.map((data, idx) => ({
        ...formatData,
        name: `Arousal Data ${idx} `,
        dataPoints: data,
      })),
      ...ValencePoints.map((data, idx) => ({
        ...formatData,
        name: `Arousal Data ${idx} `,
        dataPoints: data,
      })),
      { ...formatData, name: "Arousal Data", dataPoints: ArousalPoints },
      { ...formatData, name: "Valence Data", dataPoints: ValencePoints },
    ],
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
export default MyPersonalLine;
