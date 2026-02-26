class usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    cadastrar() {
        console.log(`Usuario ${this.nome} cadastrado com sucesso`);
    }
    login() {
        console.log(`Usuario ${this.nome} logado com sucesso`);
    }
    logout() {
        console.log(`Usuario ${this.nome} deslogado com sucesso`);
    }
}
class administrador extends usuario {
    constructor(nome, email, senha, cargo, nivel) {
        super(nome, email, senha);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    alterarSenha() {
        console.log(`Administrador ${this.nome} alterou a senha com sucesso`);
    }
    alterarEmail() {
        console.log(`Administrador ${this.nome} alterou o email com sucesso`);
    }
    alterarCargo() {
        console.log(`Administrador ${this.nome} alterou o cargo com sucesso`);
    }
}
const usuario = new usuario("Judson Gabriel", "judson@gmail.com", "123456");
const administrador = new administrador("Judson Gabriel", "judson@gmail.com", "123456", "Administrador", 1);
usuario.cadastrar();
administrador.cadastrar();
administrador.alterarSenha();
administrador.alterarEmail();
administrador.alterarCargo();
