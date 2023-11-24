import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecalho() {
  return (
    <Link href="/">
     
        <Image src="/image/logo.png" alt="logo" width={727} height={268} />
   
    </Link>
  );
}
