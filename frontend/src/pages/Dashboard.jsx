import Card from "../components/Card";
import LineChart from "../components/LineChart";
import useChartData from "../hooks/useChartData";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

function Dashboard() {
  const revenueData = useChartData("/api/revenue");
  const sourceData = useChartData("/api/traffic");
  return (
    <div className="space-y-6">
      <h1 className="text-3xl align-middle justify-center text-center  font-bold mb-6 text-shadow-gray-950 dark:text-shadow-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Clients" value="512" percent="12%" />
        <Card title="Sales" value="1,240" percent="8%" />
        <Card title="Revenue" value="$23,420" percent="5%" />
      </div>
      <div>
        {revenueData.loading ? "Loading Bar..." : (
        <BarChart
          title="Monthly Revenue"
          labels={revenueData.data.labels}
          dataValues={revenueData.data.dataValues}
        />
      )}
      {sourceData.loading ? "Loading Pie..." : (
        <PieChart
          title="Traffic Sources"
          labels={sourceData.data.labels}
          dataValues={sourceData.data.dataValues}
        />
      )}
      </div>
      <LineChart />
    </div>
  );
}

export default Dashboard;
