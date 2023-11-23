// principal.js
import Menu from "@/components/menu/menu";
import styles from "@/components/styles/principal.module.scss";

const Principal = () => {
  return (
    <div className={styles.principal}>
      <h1>NTJ-Health</h1>
      <Menu />
    </div>
  );
};

export default Principal;
