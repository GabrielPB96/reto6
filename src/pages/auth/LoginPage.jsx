import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/pure/forms/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const hadleBack = () => {
    navigate("/");
  };
  return (
    <div className="login-page">
      <header>
        <h1>Login</h1>
        <button onClick={hadleBack}>Back</button>
      </header>
      <LoginForm />
    </div>
  );
}
