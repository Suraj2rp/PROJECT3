import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1900, 3000, 2500, 3200, 4000],
      backgroundColor: "rgba(59, 130, 246, 0.4)", // blue-500
      borderColor: "rgb(59, 130, 246)",
      borderWidth: 2,
      fill: true,
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#000", // Will override in dark mode
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#555" },
      grid: { color: "#eee" },
    },
    y: {
      ticks: { color: "#555" },
      grid: { color: "#eee" },
    },
  },
};

function LineChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Monthly Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
