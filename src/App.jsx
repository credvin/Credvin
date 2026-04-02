import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ApplyLoan from "./pages/ApplyLoan";
import PartnerOnboarding from "./pages/PartnerOnboarding";
import UnderwritingDashboard from "./pages/UnderwritingDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/partner-onboarding" element={<PartnerOnboarding />} />
          <Route path="/underwriting" element={<UnderwritingDashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
