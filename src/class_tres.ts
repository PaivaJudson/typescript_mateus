import { applyMixin } from "./mixin/applyMixin.js";

class Automovel {


    ligar(): void {
        console.log("O automóvel está ligado");
    }

    desligar(): void {
        console.log("O automóvel está desligado");
    }

    acelerar(): void {
        console.log("O automóvel está acelerando");
    }
}


class Especificacao {

    private descricao: string;


    constructor(descricao: string){
        this.descricao = descricao;
    }

    get getDescricao(): string {
        return this.descricao;
    }

    set setDescricao(descricao: string) {
        this.descricao = descricao;
    }
}

class Carro  {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}


interface Carro extends Automovel, Especificacao {}

applyMixin(Carro, [Automovel, Especificacao]);


