import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart({ labels, dataValues, title }) {
  const data = {
    labels,
    datasets: [
      {
        label: title || "Sales",
        data: dataValues,
        backgroundColor: "rgba(34,197,94,0.6)", // green-500
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">{title}</h2>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
