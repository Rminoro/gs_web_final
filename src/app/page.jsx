// import Image from 'next/image'
// import Link from 'next/link';
// import React from "react";
// import "../components/styles/style.scss";

// export default function Cadastro() {
//   return(
//   //   <div>
//   // <Link href="/menu/covid">a</Link>
//   // <Link href="/informativos/paciente">b</Link>
//   // <Link href="/informativos/cartilha">c</Link>
//   // <p>Clique <Link href="/informativos/cadastro">aqui</Link> para fazer cadastro </p>
//   //   </div>
  
  
//       <div className="LOGIN">
//         <div className="div">
//           <div className="frame">
//             <div className="frame-2">
//               <div className="frame-3">
//                 <div className="text-wrapper">Acesse</div>
//                 <p className="p">Com o CPF e senha para entrar</p>
//               </div>
//               <div className="frame-4">
//                 <div className="text-wrapper-2">Digite seu CPF:</div>
//                 <div className="frame-wrapper">
//                   <div className="div-wrapper">
//                     <div className="text-wrapper-3">CPF:</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="frame-4">
//               <div className="text-wrapper-2">Digite sua senha:</div>
//               <div className="frame-5">
//                 <div className="frame-6">
//                   <div className="text-wrapper-3">Senha:</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="frame-7">
//             <div className="frame-8">
//               <div className="frame-9">
//                 <div className="text-wrapper-4">Cadastrar</div>
//               </div>
//             </div>
//             <div className="frame-10">
//               <div className="frame-11">
//                 <div className="text-wrapper-5">Acessar</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

  

  
// }
// pages/Cadastro.js
import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import styles from "../components/styles/style.module.scss";

export default function Cadastro() {
  return (
    <div className={styles.LOGIN}>
      <div className={styles.div}>
        <div className={styles.frame}>
          <div className={styles.frame-2}>
            <div className={styles.frame-3}>
              <div className={styles.text-wrapper}>Acesse</div>
              <p className={styles.p}>Com o CPF e senha para entrar</p>
            </div>
            <div className={styles.frame-4}>
              <div className={styles.text-wrapper-2}>Digite seu CPF:</div>
              <div className={styles.frame-wrapper}>
                <div className={styles.div-wrapper}>
                  <div className={styles.text-wrapper-3}>CPF:</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame-4}>
            <div className={styles.text-wrapper-2}>Digite sua senha:</div>
            <div className={styles.frame-5}>
              <div className={styles.frame-6}>
                <div className={styles.text-wrapper-3}>Senha:</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame-7}>
          <div className={styles.frame-8}>
            <div className={styles.frame-9}>
              <div className={styles.text-wrapper-4}>Cadastrar</div>
            </div>
          </div>
          <div className={styles.frame-10}>
            <div className={styles.frame-11}>
              <div className={styles.text-wrapper-5}>Acessar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
