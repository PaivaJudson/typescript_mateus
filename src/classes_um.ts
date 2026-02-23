class Loja {

    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

}


const burguerKing = new Loja("Burguer King", "Fast Food");
console.log(burguerKing.nome);
console.log(burguerKing.categoria);