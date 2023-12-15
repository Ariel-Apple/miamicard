import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterCompanyPage from "./pages/RegisteCompanyPage";
import RegisterUser from "./components/RegisterUser/RegisterUser";


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register/company" element={<RegisterCompanyPage />} />
      <Route exact path="/register/user" element={<RegisterUser />} />


  
    </Routes>
  </Router>
  );
}

export default App;
