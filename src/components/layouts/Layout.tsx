import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <main className={styles.layout}>
      <Outlet />
    </main>
  );
};

export default Layout;
