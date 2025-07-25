// src/components/Tables.jsx
export default function Tables() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Coupons Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Code</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Discount</th>
              <th className="py-2 px-4 border">Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">SAVE20</td>
              <td className="py-2 px-4 border">Food</td>
              <td className="py-2 px-4 border">20%</td>
              <td className="py-2 px-4 border">2025-12-31</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">GAME50</td>
              <td className="py-2 px-4 border">Gaming</td>
              <td className="py-2 px-4 border">50%</td>
              <td className="py-2 px-4 border">2025-10-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
