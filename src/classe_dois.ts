
class usuario {

    nome: string;
    email: string;
    senha: string;


    constructor(nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    cadastrar(): void {
        console.log(`Usuario ${this.nome} cadastrado com sucesso`);
    }

    login(): void {
        console.log(`Usuario ${this.nome} logado com sucesso`);
    }

    logout(): void {
        console.log(`Usuario ${this.nome} deslogado com sucesso`);
    }
}


class administrador extends usuario {
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, senha: string, cargo: string, nivel: number){
        super(nome, email, senha);
        this.cargo = cargo;
        this.nivel = nivel;
    }   

    alterarSenha(): void {
        console.log(`Administrador ${this.nome} alterou a senha com sucesso`);
    }

    alterarEmail(): void {
        console.log(`Administrador ${this.nome} alterou o email com sucesso`);
    }

    alterarCargo(): void {
        console.log(`Administrador ${this.nome} alterou o cargo com sucesso`);
    }
    
}


const usuario1 = new usuario("Judson Paiva", "judson@gmail.com", "123456");
// const administrador = new administrador("Judson Gabriel", "judson@gmail.com", "123456", "Administrador", 1);

