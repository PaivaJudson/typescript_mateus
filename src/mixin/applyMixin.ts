
// Função utilitária que aplica Mixins a uma classe base
export function applyMixin(derivedClass: unknown, baseClasses: unknown[]): void {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames((baseClass as { prototype: object }).prototype).forEach((name) => {
            if (name !== "constructor") {
                Object.defineProperty(
                    (derivedClass as { prototype: object }).prototype,
                    name,
                    Object.getOwnPropertyDescriptor(
                        (baseClass as { prototype: object }).prototype,
                        name
                    ) ?? Object.create(null)
                );
            }
        });
    });
}


// // --- Exemplo de uso com classes do projeto ---

// // Classes base (comportamentos isolados)
// class Automovel {
//     ligar(): void {
//         console.log("O automóvel está ligado");
//     }

//     desligar(): void {
//         console.log("O automóvel está desligado");
//     }

//     acelerar(): void {
//         console.log("O automóvel está acelerando");
//     }
// }

// class Especificacao {
//     descricao: string = "";

//     getDescricao(): string {
//         return this.descricao;
//     }

//     setDescricao(descricao: string): void {
//         this.descricao = descricao;
//     }
// }


// // Interface que combina os dois comportamentos
// interface Carro extends Automovel, Especificacao {}

// // Classe base que receberá os mixins
// class Carro {
//     constructor(public nome: string) {}
// }

// // Aplica os mixins na classe Carro
// applyMixin(Carro, [Automovel, Especificacao]);


// // --- Instanciação e uso ---
// const meuCarro = new Carro("Ferrari");

// meuCarro.ligar();
// meuCarro.acelerar();
// meuCarro.setDescricao("Esportivo V8 de 710cv");
// console.log(`${meuCarro.nome}: ${meuCarro.getDescricao()}`);
// meuCarro.desligar();
