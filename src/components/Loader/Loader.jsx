import s from "./Loader.module.css";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <SyncLoader color="#05060a" />
    </div>
  );
};

export default Loader;
