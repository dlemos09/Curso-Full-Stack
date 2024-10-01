// Factory functions / Construtor Functions / Classes

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Douglas', 'Silva')
console.log(p1.nomeCompleto)

// ----------------------------------------------

console.clear()

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa ('Douglas', 'Silva');
console.log(p2)