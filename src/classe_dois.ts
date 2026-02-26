
class usuario {

    protected nome: string;
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

    // GET 
    get getNome(): string {
        return this.nome;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }
}


class administrador extends usuario 
{
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

    getCargo(): string {
        return this.cargo;
    }
}


const usuario1 = new usuario("Judson Paiva", "judson@gmail.com", "123456");
console.log(usuario1.getNome);
usuario1.setNome = "Judson Gabriel";
console.log(usuario1.getNome);
// const administrador = new administrador("Judson Gabriel", "judson@gmail.com", "123456", "Administrador", 1);


class Utilizador {
    constructor(
        public nome: string, 
        public email: string, 
        public senha: string){}

    cadastrar(): void {
        console.log(`Utilizador ${this.nome} cadastrado com sucesso`);
    }

    login(): void {
        console.log(`Utilizador ${this.nome} logado com sucesso`);
    }
    
}


const utilizador1 = new Utilizador("Judson Gabriel", "judson@gmail.com", "123456");
utilizador1.cadastrar();
utilizador1.login();
