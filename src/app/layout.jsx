import { Inter } from 'next/font/google'
import Rodape from '@/components/rodape/rodape'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Solution',
  description: 'GS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        {children}
        <Rodape/>

        
        
        
        </body>

       
    </html>
  )
}
