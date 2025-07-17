import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ labels, dataValues, title }) {
  const data = {
    labels,
    datasets: [
      {
        label: title || "Distribution",
        data: dataValues,
        backgroundColor: ["#60a5fa", "#34d399", "#f472b6", "#fcd34d", "#f87171"], // Tailwind colors
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">{title}</h2>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
