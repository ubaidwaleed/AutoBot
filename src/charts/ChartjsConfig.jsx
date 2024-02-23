// Import Chart.js
import { Chart, Tooltip } from "chart.js";
// Import Tailwind config

Chart.register(Tooltip);

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif';
Chart.defaults.font.weight = "500";
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.mode = "nearest";
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.position = "nearest";
Chart.defaults.plugins.tooltip.caretSize = 0;
Chart.defaults.plugins.tooltip.caretPadding = 20;
Chart.defaults.plugins.tooltip.cornerRadius = 4;
Chart.defaults.plugins.tooltip.padding = 8;

// Register Chart.js plugin to add a bg option for chart area
Chart.register({
  id: "chartAreaPlugin",
  // eslint-disable-next-line object-shorthand
  beforeDraw: (chart) => {
    if (
      chart.config.options.chartArea &&
      chart.config.options.chartArea.backgroundColor
    ) {
      const ctx = chart.canvas.getContext("2d");
      const { chartArea } = chart;
      ctx.save();
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
      // eslint-disable-next-line max-len
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.restore();
    }
  },
});
export const chartColors = {
  textColor: {
    light: "#718096",
    dark: "#4A5568",
  },
  gridColor: {
    light: "#F7FAFC",
    dark: "#4A5568",
  },
  backdropColor: {
    light: "#FFFFFF",
    dark: "#1A202C",
  },
  tooltipTitleColor: {
    light: "#2D3748",
    dark: "#CBD5E0",
  },
  tooltipBodyColor: {
    light: "#2D3748",
    dark: "#CBD5E0",
  },
  tooltipBgColor: {
    light: "#FFFFFF",
    dark: "#2D3748",
  },
  tooltipBorderColor: {
    light: "#E2E8F0",
    dark: "#4A5568",
  },
  chartAreaBg: {
    light: "#F7FAFC",
    dark: "rgba(26,32,44, 0.24)",
  },
};
