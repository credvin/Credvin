export default function UnderwritingDashboard() {
  const data = [
    { id: 1, name: "Rajesh Kumar", amount: "₹5,00,000", status: "APPROVED" },
    { id: 2, name: "Priya Singh", amount: "₹3,00,000", status: "PENDING" },
    { id: 3, name: "Amit Patel", amount: "₹2,00,000", status: "REJECTED" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Underwriting Dashboard</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left">Applicant</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.amount}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded ${item.status === "APPROVED" ? "bg-green-100" : item.status === "REJECTED" ? "bg-red-100" : "bg-yellow-100"}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
