import EMICalculator from "../components/shared/EMICalculator";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Credvin</h1>
        <p className="text-xl mb-6">Fast, Transparent, and Affordable Financing</p>
        <a href="/apply-loan" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
          Apply for Loan Now
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">⚡ Fast Processing</h3>
          <p>Get approved in minutes, not days</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">🔒 Secure & Safe</h3>
          <p>Your data is protected with industry standards</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">💰 Best Rates</h3>
          <p>Competitive interest rates for all</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Calculate Your EMI</h2>
        <EMICalculator />
      </section>

      <section className="bg-purple-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <div className="flex gap-4 justify-center">
          <a href="/apply-loan" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
            Apply Loan
          </a>
          <a href="/partner-onboarding" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition inline-block">
            Become Partner
          </a>
        </div>
      </section>
    </div>
  );
}
