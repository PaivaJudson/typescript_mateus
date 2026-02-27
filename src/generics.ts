
let nomes: Array<string> = ["Judson", "Gabriel", "Paiva"];
let numeros: Array<number> = [1, 2, 3, 4, 5];


function retornar<T>(valor: T): T {
    return valor;
}

function exemplo<T>(expresssao: T): T {
    return expresssao;
}


interface Resposta<T> {
    data: T;
    status: number;
    mensagem: string;
}

const resposta1: Resposta<string> = {
    data: "Judson",
    status: 200,
    mensagem: "Sucesso",
};

console.log(resposta1);

const resposta2: Resposta<number[]> = {
    data: [1, 2, 3, 4, 5],
    status: 200,
    mensagem: "Sucesso",
};

console.log(resposta2);