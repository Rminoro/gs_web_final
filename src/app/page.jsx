// principal.js

import Menu from "@/components/menu/menu";
import styles from "@/components/styles/principal.module.scss";
import Link from "next/link";


const Principal = () => {
  return (
    <div className={styles.principal}>
      <h1>Bem vindo a ImmunoSync</h1>
      <Menu />
      
           
    </div>
  );
};

export default Principal;
