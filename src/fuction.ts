function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(1, 2));



let str = (url: string = "https://www.google.com"): void => {
    console.log(url);
}

str("https://www.jw.org");

function cadastrarUsuario(nome: string = "Judson Gabriel", email: string, senha?: string): void {
    console.log(nome, email, senha);    
}

cadastrarUsuario("Judson Gabriel", "judson@gmail.com", "123456");
cadastrarUsuario("judson@gmail.com", "123456");