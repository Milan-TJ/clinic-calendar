import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";
import CalendarView from "./components/CalenderView";

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("clinicUser");
    if (user) {
      navigate("/Home");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<CalendarView />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
