import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import CasePage from "./pages/CaseForm";
import BailPage from "./pages/BailPage";
import CaseList from "./components/Caselist";
import LegalAidList from "./components/LegalAidList";
import RequestsList from "./components/CaseRequests";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Updated routes to match login navigation */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/judge" element={<DashboardPage />} />
          <Route path="/dashboard/legal-aid" element={<DashboardPage />} />
          <Route path="/cases" element={<CasePage />} />
          <Route path="/case-list" element={<CaseList />} />
          <Route path="/legalAidList" element={<LegalAidList />} />
          <Route path="/case-requests" element={<RequestsList />}/>
          <Route path="/bail" element={<BailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
