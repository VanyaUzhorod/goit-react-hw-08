import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { MdFormatListBulletedAdd } from "react-icons/md";
import c from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div>
      <MdFormatListBulletedAdd className={c.iconRegistr} />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
