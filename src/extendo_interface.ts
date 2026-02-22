

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}


let jogo: JogoProps = {
    id: "1",
    nome: "The Witcher 3",
    descricao: "The Witcher 3 is a game about a witcher who is looking for his daughter",
    plataforma: ["PC", "PS4", "Xbox One"]
}

interface DLCProps extends JogoProps {
    novoConteudo: string[];
}


let dlc: DLCProps = {
    id: "2",
    nome: "The Witcher 3: Wild Hunt",
    descricao: "The Witcher 3: Wild Hunt is a game about a witcher who is looking for his daughter",
    plataforma: ["PC", "PS4", "Xbox One"],
    novoConteudo: ["New content", "New content 2"]
}

console.log(dlc);