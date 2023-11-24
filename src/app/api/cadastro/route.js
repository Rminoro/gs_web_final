// import { NextResponse } from "next/server";

// export async function POST(dados) {
//     try {
//         const response = await fetch('http://localhost:8080/NTJ-Health/api/paciente', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify(dados),
//         });

//         if (response.ok) {
//             console.log('Cadastro realizado com sucesso!');
        
            
//             // Se desejar redirecionar após o sucesso, você pode utilizar o Next.js Router.
//             // Por exemplo: router.push('/caminho-do-redirecionamento');
//         } else {
//             console.error('Erro ao cadastrar paciente:', response.status, response.statusText);
//         }
//     } catch (erro) {
//         console.error('Erro na requisição:', erro);
//     }

//     // Como está fora do bloco try-catch, pode ser que você queira retornar alguma resposta.
//     // Se desejar retornar uma resposta JSON, você pode fazer algo como:
//     // console.log(dados)
//     return NextResponse.json({ mensagem: 'Requisição realizada com sucesso' });
// }

import { NextResponse } from "next/server";

export async function POST(dados) {
    try {
        const response = await fetch('http://localhost:8080/NTJ-Health/api/paciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dados),
        });
        
        if (response.ok) {
           
            const responseData = await response.json();
        

            console.log('Cadastro realizado com sucesso!', responseData);

            return NextResponse.json(responseData);
        } else {
            console.error('Erro ao cadastrar paciente:', response.status, response.statusText);
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
    }

    // Em caso de erro ou requisição não bem-sucedida, retorne uma mensagem genérica.
    return NextResponse.json({ mensagem: 'Erro ao processar a requisição' });
}
