// Menu.js
import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <ul>
          <li>
            <Link href="/informativos/cadastro">
                clique aqui para efetuar Cadastro
            </Link>
          </li>
          <li>
            <Link href="/menu/covid">
              COVID-19
            </Link>
          </li>
          <li>
            <Link href="/menu/mortalidade">
              Mortalidade infantil
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
