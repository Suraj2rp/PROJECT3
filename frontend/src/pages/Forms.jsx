// src/components/Forms.jsx
export default function Forms() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Add New Coupon</h2>
      <form className="bg-white p-6 rounded shadow space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Coupon Code</label>
          <input
            type="text"
            placeholder="SAVE20"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            placeholder="Food"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Discount %</label>
          <input
            type="number"
            placeholder="20"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Expiry Date</label>
          <input
            type="date"
            className="border p-2 w-full rounded"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Coupon
        </button>
      </form>
    </div>
  );
}
