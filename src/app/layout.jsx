import { Inter } from 'next/font/google';
import Rodape from '@/components/rodape/rodape';
import Cabecalho from '@/components/cabecalho/cabecalho';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Solution',
  description: 'GS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Cabecalho/>
        {children}
        <Rodape/>

        
        
        
        </body>

       
    </html>
  )
}
