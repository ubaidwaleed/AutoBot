import { useRef, useEffect, useState } from "react";
import { chartColors } from "./ChartjsConfig";
import {
  Chart,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ data, width, height }) {
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    const newChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "80%",
        layout: {
          padding: 24,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleColor: chartColors.tooltipTitleColor.light,
            bodyColor: chartColors.tooltipBodyColor.light,
            backgroundColor: chartColors.tooltipBgColor.light,
            borderColor: chartColors.tooltipBorderColor.light,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    setChart(newChart);
    return () => newChart.destroy();
  }, []);

  useEffect(() => {
    if (!chart) return;

    const generateLegendItems = () => {
      const ul = legend.current;
      if (!ul) return;
      while (ul.firstChild) {
        ul.firstChild.remove();
      }
      chart.data.labels.forEach((label, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.onclick = () => {
          chart.toggleDataVisibility(index);
          chart.update();
        };
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.marginBottom = "5px";
        const box = document.createElement("span");
        box.style.display = "inline-block";
        box.style.width = "10px";
        box.style.height = "10px";
        box.style.backgroundColor =
          chart.data.datasets[0].backgroundColor[index];
        box.style.marginRight = "5px";
        box.style.pointerEvents = "none";
        const labelText = document.createTextNode(label);
        button.appendChild(box);
        button.appendChild(labelText);
        li.appendChild(button);
        ul.appendChild(li);
      });
    };

    generateLegendItems();
  }, [chart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div
        style={{ paddingLeft: "5px", paddingTop: "2px", paddingBottom: "6px" }}
      >
        <ul
          ref={legend}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "-5px",
          }}
        ></ul>
      </div>
    </div>
  );
}

export default DoughnutChart;
