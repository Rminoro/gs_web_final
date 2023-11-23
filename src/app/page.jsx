// principal.js
import Menu from "@/components/menu/menu";
import styles from "@/components/styles/principal.module.scss";
import Link from "next/link";


const Principal = () => {
  return (
    <div className={styles.principal}>
      <h1>NTJ-Health</h1>
      <Menu />
      <Link href="/informativos/cartilha">
                Consultar cartilha
            </Link>
    </div>
  );
};

export default Principal;
