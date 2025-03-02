import LoginForm from "../../components/LoginForm/LoginForm";
import { FiLogIn } from "react-icons/fi";
import c from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <FiLogIn className={c.iconsLogin} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
