import { useState } from "react";

export default function PartnerOnboarding() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Partner Onboarding</h1>

      {step === 1 && (
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Select Category</h2>
          <div className="space-y-4">
            <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer">
              <input type="radio" defaultChecked /> <span className="ml-4">🏪 Jewellers</span>
            </label>
            <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer">
              <input type="radio" /> <span className="ml-4">🎓 Education</span>
            </label>
          </div>
          <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold mt-6 hover:bg-blue-700">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Company Details</h2>
          <input placeholder="Company Name" className="w-full border p-3 rounded mb-4" />
          <input placeholder="Email" className="w-full border p-3 rounded mb-4" />
          <input placeholder="Phone" className="w-full border p-3 rounded mb-4" />
          <div className="flex gap-4">
            <button onClick={() => setStep(1)} className="flex-1 bg-gray-400 text-white py-2 rounded-lg font-bold hover:bg-gray-500">
              Back
            </button>
            <button onClick={() => alert("Partner registered!")} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
