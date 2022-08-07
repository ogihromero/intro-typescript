// Como podemos melhorar o esse código usando TS? 
enum ProfissaoD {
    atriz,
    padeiro
}

type PessoaD = {
    nome: string,
    idade: number,
    profissao: ProfissaoD
}

let pessoa1: PessoaD = {
    nome: "maria",
    idade: 29,
    profissao: ProfissaoD.atriz
}

let pessoa2: PessoaD = {
    nome: "roberto",
    idade: 19,
    profissao: ProfissaoD.padeiro
}


let pessoa3: PessoaD = {
    nome: "laura",
    idade: 32,
    profissao: ProfissaoD.atriz
};

let pessoa4: PessoaD = {
    nome: "carlos",
    idade: 19,
    profissao: ProfissaoD.padeiro
}