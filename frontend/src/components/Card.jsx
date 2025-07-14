function Card({ title, value, icon }) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">
      <div className="text-gray-400">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
export default Card;
