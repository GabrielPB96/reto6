import TaskList from "./components/container/task-list";
import NotFoundPage from "./pages/404/NotFoudPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./styles.css";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/auth/RegisteraPage";

export default function App() {
  let login = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/tasks"
          element={login ? <TaskList /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
