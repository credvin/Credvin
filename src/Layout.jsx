export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">💰 Credvin</h1>
          <nav className="flex gap-6">
            <a href="/" className="hover:text-blue-200 transition">Home</a>
            <a href="/apply-loan" className="hover:text-blue-200 transition">Apply Loan</a>
            <a href="/partner-onboarding" className="hover:text-blue-200 transition">Partner</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-6">{children}</main>

      <footer className="bg-gray-900 text-white p-6 mt-auto">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© Credvin Finance Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61580568111636" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/credvin001/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/channel/UCwF2h7-RBbY52pMOE0rcHNQ" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
