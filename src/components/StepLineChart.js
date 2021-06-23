import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StepLineChart extends Component {
  render() {
    console.log("stepline data", this.props.data);
    const dataPoints =
      this.props.data &&
      this.props.data[0].map(
        (
          {
            Sad = 0,
            Anger = 0,
            Disgust = 0,
            Fear = 0,
            Happiness = 0,
            Surprise = 0,
            neutral = 0,
          },
          idx
        ) => {
          const arr = [Anger, Sad, Disgust, Fear, Happiness, Surprise, neutral];
          let i = arr.indexOf(Math.max(...arr));

          return { x: idx + 1, y: i };
        }
      );

    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Emotion Movement",
      },
      axisY: {
        includeZero: false,
        labelFormatter: function (e) {
          const label = [
            "Anger",
            "Sad",
            "Disgust",
            "Fear",
            "Happiness",
            "Surprise",
            "Neutral",
          ];
          return e.value !== undefined
            ? label[parseInt(e.value)]
            : "UnRecognized";
        },
      },
      data: [
        {
          type: "stepLine",
          xValueFormatString: "timestamp 00:##",
          markerSize: 5,
          dataPoints: dataPoints,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default StepLineChart;
