// Menu.js
import Link from 'next/link';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <div>
          <p>
            Seja bem vindo ao NTJ-Health, por favor efetue o cadastro para poder acompanhar as suas vacinas
          </p>
        </div>
        <ul>
          <li>
            <Link href="/informativos/cadastro">
                clique aqui para efetuar Cadastroo seu paciente
            </Link>
          </li>
          <li>
            {/* <Link href="/menu/covid">
              COVID-19
            </Link> */}
          </li>
          <li>
            {/* <Link href="/menu/mortalidade">
              Mortalidade infantil
            </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
