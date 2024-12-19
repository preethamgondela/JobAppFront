// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import JobDetailsPage from './Components/JobDetailsPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Footer from './Components/Footer'
import ApplicantDashboard from './Components/ApplicantDashboard';
import EmployeeDashboard from './Components/EmployeeDashboard';
import LogoutPage from './Components/LogoutPage';


function App() {
  return (
   <>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/ApplicantDashboard" element={<ApplicantDashboard />} />
          <Route path="/Components" element={<JobDetailsPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
   </>
  );
}

export default App;
