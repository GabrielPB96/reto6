import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/pure/forms/RegisterForm";
export default function RegisterPage() {
  const navigate = useNavigate();
  const hadleBack = () => {
    navigate("/");
  };
  return (
    <div className="register-page">
      <header>
        <h1>Register</h1>
        <button onClick={hadleBack}>Back</button>
      </header>
      <RegisterForm></RegisterForm>
    </div>
  );
}
