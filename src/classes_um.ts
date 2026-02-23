class Loja {

    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void {
        console.log(`Loja ${this.nome} criada com sucesso`);
    }

    emitirPedidos(mesa: number): string {
        return `Pedido emitido com sucesso para a mesa ${mesa}`;
    }

}


const burguerKing = new Loja("Burguer King", "Fast Food");
burguerKing.criarLoja();
console.log(burguerKing.emitirPedidos(1));
// console.log(burguerKing.nome);
// console.log(burguerKing.categoria);