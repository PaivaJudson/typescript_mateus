type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string): void{
    console.log(`Bem-vindo ${nome} - | ID: ${uuid}`);
}

function logUssuario(uuid: Uuid): void{
    console.log(`ID do usuário: ${uuid}`);
}


acessar(1, "Judson Gabriel");
acessar("55", "Judson Paiva");
logUssuario("55");