
interface LojaProps {
    nome?: string;
    endereco: string;
    cidadde: string;
    estado: string;

    verNomeCidade: (cidade: string) => string;
}


function cadastrarLoja({nome, endereco, cidadde, estado}: LojaProps): void {
    console.log(nome, endereco, cidadde, estado);
}

function verNomeCidade(cidade: string): string {
    return cidade;
}


const BurguerKing: LojaProps = {
    nome: "Burguer King",
    endereco: "Rua das Flores, 123",
    cidadde: "São Paulo",
    estado: "SP",

    verNomeCidade: (cidade: string) => {
        return cidade;
    }
}



class McDonals implements LojaProps {
    nome: string = "McDonals";
    endereco: string = "Rua das Flores, 123";
    cidadde: string = "São Paulo";
    estado: string = "SP";
    
    verNomeCidade(cidade: string): string {
        return cidade;
    }
}

console.log(BurguerKing.verNomeCidade("São Paulo"));

cadastrarLoja(BurguerKing);