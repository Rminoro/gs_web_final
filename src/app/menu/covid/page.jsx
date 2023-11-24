import Link from "next/link";
import styles from "@/app/menu/Informativos.modules.scss";

export default function covid(){
    return(
        <div className={styles.pageContainer}>
            <h1> A importância de se vacinar contra COVID-19 </h1>
        
                <p>
                    A vacinação é a forma mais eficaz e segura de se adquirir proteção contra uma doença infecciosa. 
                    A vacinação elimina ou reduz drasticamente o risco de adoecimento ou de manifestações graves, 
                     que podem levar à internação e até mesmo ao óbito. 
                    Por ano, a vacinação evita de dois a três milhões de mortes, segundo a Organização Mundial da Saúde (OMS).
                </p>

               
                    <h2>Por isso dizemos que:</h2>
                    <p>
                        a vacinação é tão importante para sua saúde quanto o consumo de uma dieta saudável e a prática de atividade física;
                        estar vacinado(a) pode significar a diferença entre estar vivo(a) e saudável ou gravemente enfermo(a) ou com sequelas deixadas por doenças imunopreveníveis;
                        as vacinas estão entre os produtos farmacêuticos mais seguros que existem.
                    </p>
               
                <p>
                  Por que se vacinar contra COVID-19?
                    
                        Porque a vacinação é a única forma segura e eficaz de prevenir a COVID-19, de nos livrarmos da pandemia e recuperarmos o convívio social do qual tanto sentimos falta.
                        Porque as vacinas aprovadas para uso no Brasil pela Agência Nacional de Vigilância Sanitária (Anvisa) são seguras e eficazes. Não há a menor possibilidade de você adquirir a COVID-19 por meio das vacinas. São vacinas inativadas, não replicantes.

                    
                </p>
                <p>
                    Fonte:https://www.tre-se.jus.br/comunicacao/noticias/2021/Julho/importancia-e-beneficios-da-vacinacao
                </p>
        </div>
    )
}