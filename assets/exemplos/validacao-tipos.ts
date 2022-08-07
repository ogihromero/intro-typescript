const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

const andre: { nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: 'desenvolvedor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
    materias: string[]
}
const Maria: Estudante = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programacao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log(' ', item);
    }
}

listar(Maria.materias);