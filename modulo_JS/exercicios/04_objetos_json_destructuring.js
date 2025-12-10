// ========================================
// AULA 04: Objetos, JSON e Desestruturação
// Objetivo didático: Modelar dados e manipular estruturas complexas em JavaScript
// Por que importa: APIs, configurações, estado de aplicações, manipulação de dados reais
// Sequência: objetos → acesso/iteração → aninhados → JSON → destructuring → spread/rest → factories
// ========================================

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Crie um objeto literal chamado "carro" com propriedades e métodos:
// a) Propriedades: marca, modelo, ano, cor, motorLigado (boolean)
// b) Métodos: ligar(), desligar(), descrever()
// c) Adicione dinamicamente uma propriedade "km" e remova a propriedade "cor"
// d) Mostre como acessar e modificar propriedades
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: Objetos Básicos ===");

// a) Criação do objeto literal com propriedades e métodos
const carro = {
  marca: "Fiat",
  modelo: "Palio",
  ano: 2007,
  cor: "preto",
  motorLigado: false,

  // Método para ligar o carro
  ligar() {
    this.motorLigado = true;
    return "Carro ligado!";
  },

  // Método para desligar o carro
  desligar() {
    this.motorLigado = false;
    return "Carro desligado!";
  },

  // Método que retorna uma descrição do carro
  descrever() {
    return `${this.marca} ${this.modelo} ${this.ano} - ${this.cor}`;
  },
};

// b) Usando métodos e acessando propriedades
console.log(carro.descrever()); // Mostra descrição
console.log(carro.ligar()); // Liga o carro
console.log("Motor ligado?", carro.motorLigado); // Verifica status

// c) Adicionando propriedade dinamicamente
carro.km = 85000; // Adiciona km
console.log("Quilometragem:", carro.km);

// d) Removendo propriedade
delete carro.cor; // Remove cor
console.log("Após deletar cor:", carro);

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Crie um objeto "usuario" e demonstre:
// a) Como acessar propriedades dinamicamente usando colchetes
// b) Como iterar sobre todas as propriedades do objeto
// c) Como obter chaves, valores e entradas usando métodos do Object
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Acesso Dinâmico ===");

const usuario = {
  nome: "Douglas Silva",
  email: "douglas@email.com",
  idade: 28,
  cidade: "Natal",
  ativo: true,
};

// a) Acesso dinâmico com colchetes
const propriedade = "nome";
console.log("Propriedade dinâmica:", usuario[propriedade]); // Acessa "nome"

// b) Iterar sobre todas as propriedades
console.log("Todas as propriedades:");
for (const chave in usuario) {
  console.log(`  ${chave}: ${usuario[chave]}`);
}

// c) Métodos úteis de Object
console.log("Chaves:", Object.keys(usuario)); // Array de chaves
console.log("Valores:", Object.values(usuario)); // Array de valores
console.log("Entradas:", Object.entries(usuario)); // Array de pares [chave, valor]

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Crie um objeto "pessoa" com propriedades aninhadas (endereço, contatos, redes sociais):
// a) Mostre como acessar propriedades aninhadas
// b) Modifique valores em níveis profundos
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Objetos Aninhados ===");

const pessoa = {
  nome: "Douglas",
  idade: 28,
  endereco: {
    rua: "Alameda dos Anjos",
    numero: 403,
    cidade: "Natal",
    estado: "RN",
    cep: "59000-000",
    coordenadas: {
      lat: -5.7945,
      lng: -35.211,
    },
  },
  contatos: {
    telefone: "(84) 99999-9999",
    email: "douglas@email.com",
    redesSociais: {
      linkedin: "linkedin.com/in/douglas",
      github: "github.com/douglas",
    },
  },
};

// a) Acessar propriedades aninhadas
console.log("Cidade:", pessoa.endereco.cidade); // Acessa cidade
console.log("Latitude:", pessoa.endereco.coordenadas.lat); // Acessa latitude
console.log("GitHub:", pessoa.contatos.redesSociais.github); // Acessa GitHub

// b) Modificar valores aninhados
pessoa.endereco.numero = 500; // Altera número
pessoa.contatos.telefone = "(84) 98888-8888"; // Altera telefone
console.log("Endereço atualizado:", pessoa.endereco);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Trabalhe com JSON:
// a) Converta um objeto em string JSON (stringify)
// b) Converta de volta para objeto (parse)
// c) Mostre como salvar e recuperar dados simulando o localStorage
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: JSON ===");

const produto = {
  id: 101,
  nome: "Notebook Dell",
  preco: 3500,
  especificacoes: {
    processador: "Intel i5",
    ram: "8GB",
    armazenamento: "256GB SSD",
  },
  tags: ["eletrônico", "informática", "trabalho"],
};

// a) Objeto para JSON (string)
const jsonString = JSON.stringify(produto); // Serializa para string
console.log("JSON String:", jsonString);

// b) JSON formatado (indentação)
const jsonFormatado = JSON.stringify(produto, null, 2); // Com identação
console.log("JSON Formatado:\n", jsonFormatado);

// c) JSON para objeto
const produtoRecuperado = JSON.parse(jsonString); // Desserializa
console.log("Objeto recuperado:", produtoRecuperado);
console.log("Processador:", produtoRecuperado.especificacoes.processador);

// d) Simular localStorage
function salvarNoStorage(chave, objeto) {
  const json = JSON.stringify(objeto);
  // Em navegador seria: localStorage.setItem(chave, json);
  console.log(`Salvando "${chave}":`, json);
  return json;
}

function carregarDoStorage(jsonString) {
  // Em navegador seria: localStorage.getItem(chave);
  return JSON.parse(jsonString);
}

const salvo = salvarNoStorage("produto", produto);
const carregado = carregarDoStorage(salvo);
console.log("Objeto carregado:", carregado);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Demonstre desestruturação de objetos e arrays:
// a) Extraia propriedades de um objeto
// b) Renomeie variáveis ao desestruturar
// c) Use valores padrão
// d) Faça desestruturação aninhada
// e) Desestruture arrays e use rest
// f) Use desestruturação em parâmetros de função
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Desestruturação ===");

// a) Desestruturação de objeto
const { nome, idade, endereco } = pessoa; // Extrai nome, idade, endereco
console.log("Desestruturado:", nome, idade);

// b) Renomear ao desestruturar
const { nome: nomePessoa, idade: idadePessoa } = pessoa; // Renomeia variáveis
console.log("Renomeado:", nomePessoa, idadePessoa);

// c) Valores padrão
const { profissao = "Não informado" } = pessoa; // Usa valor padrão se não existir
console.log("Com padrão:", profissao);

// d) Desestruturação aninhada
const {
  endereco: { cidade, estado },
} = pessoa; // Extrai cidade e estado de endereco
console.log("Aninhado:", cidade, estado);

// e) Desestruturação de array
const cores = ["vermelho", "verde", "azul", "amarelo"];
const [primeira, segunda, ...resto] = cores; // Pega os dois primeiros e o resto
console.log("Primeira:", primeira);
console.log("Segunda:", segunda);
console.log("Resto:", resto);

// f) Em parâmetros de função
function exibirUsuario({ nome, email, idade = 0 }) {
  // Desestrutura diretamente nos parâmetros
  console.log(`Usuário: ${nome}, Email: ${email}, Idade: ${idade}`);
}

exibirUsuario({ nome: "Ana", email: "ana@email.com", idade: 25 });
exibirUsuario({ nome: "Bruno", email: "bruno@email.com" }); // idade usa padrão

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Demonstre uso de spread e rest em objetos:
// a) Mescle dois objetos
// b) Mostre como a ordem afeta o resultado
// c) Adicione/sobrescreva propriedades ao mesclar
// d) Clone um objeto
// e) Use rest para extrair propriedades
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Spread e Rest ===");

const config1 = {
  tema: "escuro",
  idioma: "pt-BR",
  notificacoes: true,
};

const config2 = {
  idioma: "en-US",
  fonte: "14px",
  zoom: 100,
};

// a) Mesclar objetos (spread)
const configFinal = { ...config1, ...config2 }; // config2 sobrescreve idioma
console.log("Config mesclada:", configFinal);

// b) Ordem importa (último sobrescreve anterior)
const configInvertida = { ...config2, ...config1 }; // config1 sobrescreve idioma
console.log("Invertida:", configInvertida);

// c) Adicionar/sobrescrever propriedades
const configAtualizada = {
  ...config1,
  tema: "claro", // sobrescreve
  notificacoes: false, // sobrescreve
  novaOpcao: "valor", // adiciona
};
console.log("Atualizada:", configAtualizada);

// d) Clonar objeto (shallow copy)
const clone = { ...config1 };
clone.tema = "automático";
console.log("Original:", config1.tema); // Não muda
console.log("Clone:", clone.tema); // Mudou

// e) Rest em objetos
const { tema, ...outrasConfigs } = config1; // Extrai tema, resto fica em outrasConfigs
console.log("Tema extraído:", tema);
console.log("Outras configs:", outrasConfigs);

// =====================================================
// EXERCÍCIO 7 - AVANÇADO
// ENUNCIADO:
// Demonstre criação de objetos reutilizáveis:
// a) Crie uma factory function para pessoas
// b) Crie uma função construtora para pessoas
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Factory e Construtoras ===");

// a) Factory Function
function criarPessoa(nome, sobrenome, idade) {
  // Retorna um novo objeto pessoa
  return {
    nome,
    sobrenome,
    idade,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    aniversario() {
      this.idade++;
      return `Feliz aniversário! Agora tem ${this.idade} anos.`;
    },
  };
}

const pessoa1 = criarPessoa("Douglas", "Silva", 28);
console.log("Factory:", pessoa1.nomeCompleto);
console.log(pessoa1.aniversario());

// b) Função Construtora
function Pessoa(nome, sobrenome, idade) {
  // this refere-se ao novo objeto criado
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  this.apresentar = function () {
    return `Olá, sou ${this.nome} ${this.sobrenome}`;
  };
}

const pessoa2 = new Pessoa("Ana", "Costa", 25);
console.log("Construtora:", pessoa2.apresentar());

// =====================================================
// EXERCÍCIO 8 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um sistema de configuração de aplicação:
// a) Crie uma classe para gerenciar configurações (get/set/merge/export/import/reset)
// b) Demonstre uso prático: definir, obter, exportar, importar e mesclar configurações
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 8: Sistema de Configuração ===");

class ConfigManager {
  constructor(configInicial = {}) {
    // Configurações padrão + sobrescritas
    this.config = {
      tema: "claro",
      idioma: "pt-BR",
      notificacoes: {
        email: true,
        push: false,
        sms: false,
      },
      preferencias: {
        autoSave: true,
        modo24h: false,
      },
      ...configInicial,
    };
  }

  // a) Obter valor por chave (suporta aninhamento com ".")
  obter(chave) {
    return chave.split(".").reduce((obj, k) => obj?.[k], this.config);
  }

  // b) Definir valor por chave (suporta aninhamento)
  definir(chave, valor) {
    const chaves = chave.split(".");
    const ultima = chaves.pop();
    const obj = chaves.reduce((o, k) => (o[k] = o[k] || {}), this.config);
    obj[ultima] = valor;
  }

  // c) Mesclar novas configurações
  mesclar(novasConfigs) {
    this.config = { ...this.config, ...novasConfigs };
  }

  // d) Exportar para JSON
  exportar() {
    return JSON.stringify(this.config, null, 2);
  }

  // e) Importar de JSON
  importar(jsonString) {
    this.config = JSON.parse(jsonString);
  }

  // f) Resetar configurações
  resetar() {
    this.config = {};
  }
}

// Uso prático do sistema de configuração
const appConfig = new ConfigManager();
console.log("Config inicial:", appConfig.config);

appConfig.definir("tema", "escuro"); // Define tema
appConfig.definir("notificacoes.push", true); // Ativa push
console.log("Tema:", appConfig.obter("tema"));
console.log("Push:", appConfig.obter("notificacoes.push"));

// Exportar configuração
const exportado = appConfig.exportar();
console.log("Exportado:\n", exportado);

// Mesclar novas configs
appConfig.mesclar({ idioma: "en-US", novaOpcao: 123 });
console.log("Após mesclar:", appConfig.config);

console.log("\n✅ Exercícios de Objetos, JSON e Desestruturação concluídos!");
