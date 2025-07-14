import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="Clients" value="512" />
      <Card title="Revenue" value="$12,400" />
      <Card title="Sales" value="923" />
    </div>
  );
}
export default Dashboard;
