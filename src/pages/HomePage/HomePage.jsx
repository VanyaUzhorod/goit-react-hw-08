import { FaBookOpen } from "react-icons/fa";
import c from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <h1>
        <FaBookOpen />
        Phonebook
      </h1>
    </div>
  );
};

export default HomePage;
