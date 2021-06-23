import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StepLineChart extends Component {
  render() {
    console.log("stepline data", this.props.data);
    const dataPoints =
      this.props.data &&
      this.props.data.length > 0 &&
      this.props.data.map((eachUser) =>
        eachUser.map(
          (
            { Sad, Anger, Disgust, Fear, Happiness, Surprise, neutral },
            idx
          ) => {
            const arr = [
              Anger,
              Sad,
              Disgust,
              Fear,
              Happiness,
              Surprise,
              neutral,
            ];
            let i = arr.indexOf(Math.max(...arr));
            return { x: idx + 1, y: i };
          }
        )
      );

    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Emotion Movement",
      },
      axisY: {
        title: "Emotion Category",
        includeZero: false,
      },
      data: [
        ...dataPoints.map((each) => ({
          type: "stepLine",
          xValueFormatString: "timestamp 00:##",
          markerSize: 5,
          dataPoints: each,
        })),
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
