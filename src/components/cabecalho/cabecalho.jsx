import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/cabecalho.scss';

export default function Cabecalho() {
  return (
    <Link href="/">
      <div className={styles.header}>
        <Image src="/image/logo.png" alt="logo" width={727} height={268} className={styles.logo} />
      </div>
    </Link>
  );
}
