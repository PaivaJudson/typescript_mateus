var nome: string = "Judson Paiva";

console.log(nome);
console.log("Hello World");


class Sistema{

    private ip: string;

    constructor(ip: string){
        this.ip = ip;
    }

    getIp(): string{
        return this.ip;
    }
}


const servidor = new Sistema("192.168.1.1");