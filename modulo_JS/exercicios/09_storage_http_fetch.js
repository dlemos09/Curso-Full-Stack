// =============================================
// AULA 09 (CONSTRUÇÃO EM PARTES SEQUENCIAIS)
// Tema geral: Armazenamento Web (localStorage / sessionStorage) + HTTP (Fetch API)
// Estrutura incremental: 9.1 → 9.8
// Cada parte adiciona um conceito novo sobre o anterior.
// =============================================

console.log("=== AULA 09: Storage & HTTP (Construção Incremental) ===");

// Ambiente: navegador (localStorage, sessionStorage e fetch disponíveis).
// Dica: abra o DevTools (F12) para acompanhar os logs.

// =============================================================
// 9.1 FUNDAMENTOS localStorage
// Objetivos:
// - Armazenar e recuperar strings
// - Usar JSON para objetos
// - Atualizar e remover valores
// - Entender clear()
// =============================================================

console.log("\n[9.1] Fundamentais localStorage");

/*
// 1. Salvar um valor simples (sempre string)
localStorage.setItem('usuarioNome', 'Ana');

// 2. Ler o valor
const nomeSalvo = localStorage.getItem('usuarioNome');
console.log('Nome salvo:', nomeSalvo); // Ana

// 3. Salvar objeto (converter para JSON)
const preferencias = { tema: 'escuro', fonte: 'grande' };
localStorage.setItem('preferencias', JSON.stringify(preferencias));

// 4. Ler objeto (parse JSON)
const prefsLidas = JSON.parse(localStorage.getItem('preferencias'));
console.log('Tema atual:', prefsLidas.tema);

// 5. Atualizar um campo e salvar novamente
prefsLidas.tema = 'claro';
localStorage.setItem('preferencias', JSON.stringify(prefsLidas));

// 6. Remover item específico
localStorage.removeItem('usuarioNome');

// 7. Limpar todo storage (cuidado!)
// localStorage.clear();
*/

// Helper inicial (será expandido em 9.2 e 9.7)
const StorageHelper = {
  setJson(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  },
  getJson(chave, padrao = null) {
    const bruto = localStorage.getItem(chave);
    if (!bruto) return padrao;
    try {
      return JSON.parse(bruto);
    } catch {
      return padrao;
    }
  },
  remove(chave) {
    localStorage.removeItem(chave);
  },
};

// =============================================================
// 9.2 VALIDAÇÃO E PADRÕES
// Objetivo: garantir integridade dos dados armazenados.
// =============================================================
console.log("\n[9.2] Validação e padrões");
/*
function isObjeto(val) { return typeof val === 'object' && val !== null; }
function salvarPreferencias(prefs) {
    if (!isObjeto(prefs) || !prefs.tema) {
        prefs = { tema: 'claro', fonte: 'media' }; // fallback
    }
    StorageHelper.setJson('prefs', prefs);
}
function lerPreferencias() {
    const p = StorageHelper.getJson('prefs', { tema: 'claro', fonte: 'media' });
    return isObjeto(p) ? p : { tema: 'claro', fonte: 'media' };
}
salvarPreferencias({ tema: 'escuro', fonte: 'grande' });
console.log('Preferências validadas:', lerPreferencias());
*/

// =============================================================
// 9.3 sessionStorage PARA FLUXOS TEMPORÁRIOS
// Objetivo: simular formulário multi-step só na sessão atual.
// =============================================================
console.log("\n[9.3] Multi-step com sessionStorage");

// -------------------------------------------------
// EXERCÍCIO 2: sessionStorage - Dados Temporários
// -------------------------------------------------
// ENUNCIADO:
// 1. Salve dados de um "passo" de formulário.
// 2. Simule avançar passo e acumular dados.
// 3. Finalize e limpe.
// -------------------------------------------------

console.log("\n[Exercício 2] sessionStorage Básico");

/*
// Cada nova aba tem seu próprio sessionStorage.

// Passo 1
sessionStorage.setItem('formStep', '1');
sessionStorage.setItem('dadosForm', JSON.stringify({ nome: 'Ana' }));

// Avançar para Passo 2
sessionStorage.setItem('formStep', '2');
const atual = JSON.parse(sessionStorage.getItem('dadosForm'));
atual.email = 'ana@email.com';
sessionStorage.setItem('dadosForm', JSON.stringify(atual));

// Finalizar
const final = JSON.parse(sessionStorage.getItem('dadosForm'));
console.log('Dados finais:', final);
sessionStorage.removeItem('formStep');
sessionStorage.removeItem('dadosForm');
*/

// =============================================================
// 9.4 FETCH GET BÁSICO
// Objetivo: entender status, ok e json sem abstrações.
// =============================================================
console.log("\n[9.4] Fetch GET básico");

/*
fetch('https://api.github.com/users/octocat')
  .then(function(res) {
    console.log('Status:', res.status);
    if (!res.ok) throw new Error('Falha HTTP: ' + res.status);
    return res.json();
  })
  .then(function(dados) {
    console.log('Login:', dados.login);
  })
  .catch(function(erro) {
    console.error('Erro na requisição:', erro.message);
  });
*/

// =============================================================
// 9.5 FETCH COM async/await
// Objetivo: reescrever fluxo em sintaxe mais clara com try/catch.
// =============================================================
console.log("\n[9.5] Fetch async/await");

/*
async function buscarUsuarioGit(login) {
  try {
    const res = await fetch('https://api.github.com/users/' + login);
    if (!res.ok) throw new Error('Falha HTTP: ' + res.status);
    const json = await res.json();
    console.log('Nome:', json.name);
    return json;
  } catch (e) {
    console.error('Erro ao buscar usuário:', e.message);
    return null;
  }
}

buscarUsuarioGit('octocat');
*/

// =============================================================
// 9.6 MÉTODOS HTTP (POST / PUT / DELETE)
// Objetivo: praticar envio de corpo e alteração de recursos.
// =============================================================
console.log("\n[9.6] Métodos HTTP");

/*
async function criarPostExemplo() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Teste', body: 'Conteúdo', userId: 1 })
    });
    if (!res.ok) throw new Error('Falha HTTP: ' + res.status);
    const criado = await res.json();
    console.log('Post criado (ID):', criado.id);
  } catch (e) {
    console.error('Erro ao criar post:', e.message);
  }
}

// criarPostExemplo();
*/

// =============================================================
// 9.7 UTILITÁRIO fetchJSON + CACHE
// Objetivo: centralizar validação e otimizar requisições repetidas.
// =============================================================
console.log("\n[9.7] Utilitário fetchJSON + cache");

/*
async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

async function exemploUso() {
  try {
    const dados = await fetchJSON('https://api.github.com/users/octocat');
    console.log('Avatar:', dados.avatar_url);
  } catch (e) {
    console.error('Erro geral:', e.message);
  }
}

// exemploUso();
*/

// (Integrado à parte 9.7)
console.log("\n[9.7] Cache simples de GET");

/*
const cache = new Map();

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

async function fetchComCache(url) {
  if (cache.has(url)) {
    console.log('Cache HIT:', url);
    return cache.get(url);
  }
  console.log('Cache MISS:', url);
  const dados = await fetchJSON(url);
  cache.set(url, dados);
  return dados;
}

async function testarCache() {
  await fetchComCache('https://api.github.com/users/octocat'); // MISS
  await fetchComCache('https://api.github.com/users/octocat'); // HIT
}

// testarCache();
*/

// =============================================================
// 9.8 MINI PROJETO FINAL
// Objetivo: Integrar tema (localStorage) + multi-step (sessionStorage) + fetch.
// =============================================================
console.log("\n[9.8] Mini Projeto Final");

/*
function salvarTema(tema) {
  localStorage.setItem('appTema', tema);
}
function carregarTema() {
  return localStorage.getItem('appTema') || 'claro';
}

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

async function iniciarApp() {
  const temaAtual = carregarTema();
  console.log('Tema carregado:', temaAtual);
  const usuario = await fetchJSON('https://api.github.com/users/octocat');
  console.log('Usuário (login):', usuario.login);
}

// salvarTema('escuro');
// iniciarApp();
*/

// -------------------------------------------------
// RESUMO FINAL
// -------------------------------------------------
// localStorage: persiste entre sessões (strings). Usar JSON para objetos.
// sessionStorage: somente durante a aba/guia aberta.
// fetch: realizar requisições HTTP. Verificar sempre response.ok.
// async/await: sintaxe mais limpa para fluxo assíncrono.
// Helper fetchJSON: reutilizar padrão (status + json).
// Cache com Map: melhora performance evitando requisições repetidas.
// -------------------------------------------------

console.log("\n✅ Concluído: partes 9.1 → 9.8 consolidadas.");
// ========================================
// AULA 09: Armazenamento Web e HTTP Básico
// Objetivo didático: Dominar localStorage, sessionStorage, Fetch API, tratamento de erros e cache
// Por que importa: Persistência, comunicação com APIs, performance e UX
// Sequência: storage → fetch → erros → cliente → cache → app real
// ========================================

console.log("=== AULA 09: Storage e HTTP ===\n");

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre como usar o localStorage para persistir dados no navegador.
// a) Armazene e recupere strings e objetos
// b) Remova, limpe e itere sobre itens
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: LocalStorage ===");

/*
// Armazenar dados simples (apenas strings)
localStorage.setItem('usuario', 'Ana Silva'); // Salva o nome do usuário
localStorage.setItem('tema', 'escuro'); // Salva preferência de tema

// Recuperar dados
const usuario = localStorage.getItem('usuario');
console.log(usuario); // "Ana Silva"

// Remover item específico
localStorage.removeItem('tema');

// Limpar todo o storage
localStorage.clear();

// Armazenar objetos (precisa serializar com JSON)
const config = {
    idioma: 'pt-BR',
    notificacoes: true,
    volume: 80
};
localStorage.setItem('config', JSON.stringify(config));

// Recuperar objeto (deserializar)
const configRecuperada = JSON.parse(localStorage.getItem('config'));
console.log(configRecuperada.idioma); // "pt-BR"

// Verificar existência de chave
if (localStorage.getItem('usuario')) {
    console.log('Usuário logado');
}

// Tamanho do storage
console.log('Itens:', localStorage.length);

// Iterar sobre todos os itens
for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(chave, valor);
}
*/

// Exemplo didático: Classe helper para localStorage
// Permite salvar e recuperar qualquer tipo de dado de forma segura
const exemploStorage = `
// Classe helper para localStorage
class Storage {
    static set(key, value) {
        try {
            const json = JSON.stringify(value);
            localStorage.setItem(key, json);
            return true;
        } catch (erro) {
            console.error('Erro ao salvar:', erro);
            return false;
        }
    }
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (erro) {
            console.error('Erro ao recuperar:', erro);
            return defaultValue;
        }
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }
    static has(key) {
        return localStorage.getItem(key) !== null;
    }
}
// Uso
Storage.set('usuario', { nome: 'Ana', id: 1 });
const usuario = Storage.get('usuario');
console.log(usuario.nome); // "Ana"
`;

console.log("Helper de localStorage:");
console.log(exemploStorage);

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Demonstre como usar o sessionStorage para armazenar dados temporários na sessão.
// a) Salve e recupere dados
// b) Explique diferenças para o localStorage
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: SessionStorage ===");

/*
// API idêntica ao localStorage, mas dados são perdidos ao fechar a aba/janela
sessionStorage.setItem('tempData', 'valor temporário'); // Salva dado temporário
const temp = sessionStorage.getItem('tempData'); // Recupera

// Diferenças:
// - localStorage: persistente entre sessões
// - sessionStorage: apenas durante a sessão (aba/janela)
*/

// Exemplo didático: Formulário multi-step usando sessionStorage
const exemploSession = `
// Salvar progresso de formulário multi-step
class FormWizard {
    constructor() {
        this.step = this.getStep();
        this.data = this.getData();
    }
    getStep() {
        return parseInt(sessionStorage.getItem('wizardStep') || '1');
    }
    setStep(step) {
        sessionStorage.setItem('wizardStep', step);
        this.step = step;
    }
    getData() {
        const data = sessionStorage.getItem('wizardData');
        return data ? JSON.parse(data) : {};
    }
    saveData(stepData) {
        this.data = { ...this.data, ...stepData };
        sessionStorage.setItem('wizardData', JSON.stringify(this.data));
    }
    nextStep(stepData) {
        this.saveData(stepData);
        this.setStep(this.step + 1);
    }
    previousStep() {
        this.setStep(this.step - 1);
    }
    finish() {
        const finalData = this.data;
        sessionStorage.removeItem('wizardStep');
        sessionStorage.removeItem('wizardData');
        return finalData;
    }
}
// Uso
const wizard = new FormWizard();
wizard.nextStep({ nome: 'Ana', email: 'ana@email.com' });
wizard.nextStep({ endereco: 'Rua X', cidade: 'São Paulo' });
const dados = wizard.finish();
`;

console.log("Formulário multi-step com sessionStorage:");
console.log(exemploSession);

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como usar a Fetch API para fazer requisições HTTP (GET, POST, PUT, DELETE).
// a) Mostre exemplos com then/catch e async/await
// b) Explique headers, body e tratamento de resposta
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Fetch API ===");

// Exemplo didático: Fetch API para requisições HTTP
const exemploFetch = `
// GET simples usando then/catch
fetch('https://api.github.com/users/octocat')
    .then(response => {
        console.log('Status:', response.status); // Status HTTP
        console.log('OK:', response.ok); // true se 2xx
        return response.json(); // Converte resposta em objeto
    })
    .then(data => {
        console.log('Usuário:', data.name);
    })
    .catch(erro => {
        console.error('Erro:', erro);
    });

// GET usando async/await (mais limpo)
async function buscarUsuario(username) {
    try {
        const response = await fetch('https://api.github.com/users/' + username);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status + ': ' + response.statusText);
        }
        const usuarioData = await response.json();
        return usuarioData;
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
        throw erro;
    }
}
// Uso
buscarUsuario('octocat').then(usuarioData => {
    console.log(usuarioData.name);
});

// POST com dados (criar recurso)
async function criarPost(dados) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });
    return response.json();
}

// PUT (atualizar recurso)
async function atualizarPost(id, dados) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    return response.json();
}

// DELETE (remover recurso)
async function deletarPost(id) {
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE'
    });
}

// Headers customizados
const headers = new Headers();
headers.append('Authorization', 'Bearer token123');
headers.append('Custom-Header', 'valor');
fetch('/api/protegida', { headers });
`;

console.log("Exemplos de Fetch:");
console.log(exemploFetch);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como tratar erros HTTP e diferentes status codes ao consumir APIs.
// a) Crie classe de erro customizada
// b) Implemente tratamento por status e timeout
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Tratamento de Erros ===");

// Exemplo didático: Tratamento de erros HTTP
const exemploErros = `
// Classe de erro customizada para HTTP
class HTTPError extends Error {
    constructor(response) {
        super('HTTP ' + response.status + ': ' + response.statusText);
        this.response = response;
        this.status = response.status;
    }
}

// Função que lança erro se status não for OK
async function fetchComErro(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new HTTPError(response);
    }
    return response;
}

// Uso com tratamento específico por status
async function buscarDados(url) {
    try {
        const response = await fetchComErro(url);
        return await response.json();
    } catch (erro) {
        if (erro instanceof HTTPError) {
            switch(erro.status) {
                case 400:
                    console.error('Requisição inválida');
                    break;
                case 401:
                    console.error('Não autorizado - fazer login');
                    // Redirecionar para login
                    break;
                case 404:
                    console.error('Recurso não encontrado');
                    break;
                case 500:
                    console.error('Erro no servidor');
                    break;
                default:
                    console.error('Erro HTTP:', erro.status);
            }
        } else {
            console.error('Erro de rede:', erro);
        }
        throw erro;
    }
}

// Timeout para requisições
async function fetchComTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (erro) {
        clearTimeout(timeoutId);
        if (erro.name === 'AbortError') {
            throw new Error('Requisição excedeu o tempo limite');
        }
        throw erro;
    }
}
`;

console.log("Tratamento de erros HTTP:");
console.log(exemploErros);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Implemente um cliente HTTP completo (wrapper para Fetch) com interceptors, timeout e tratamento de erros.
// a) Crie classe APIClient com métodos get, post, put, delete
// b) Adicione interceptors de request/response
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Cliente HTTP ===");

// Exemplo didático: Cliente HTTP completo (APIClient)
const exemploCliente = `
// Classe APIClient: wrapper para Fetch com interceptors e timeout
class APIClient {
    constructor(baseURL, options = {}) {
        this.baseURL = baseURL;
        this.defaultHeaders = options.headers || {};
        this.timeout = options.timeout || 10000;
        this.interceptors = {
            request: [],
            response: []
        };
    }
    addRequestInterceptor(fn) {
        this.interceptors.request.push(fn);
    }
    addResponseInterceptor(fn) {
        this.interceptors.response.push(fn);
    }
    async request(endpoint, options = {}) {
        let url = this.baseURL + endpoint;
        // Merge headers
        const headers = {
            ...this.defaultHeaders,
            ...options.headers
        };
        let config = {
            ...options,
            headers
        };
        // Request interceptors
        for (const interceptor of this.interceptors.request) {
            config = await interceptor(config);
        }
        // Timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            let response = await fetch(url, {
                ...config,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            // Response interceptors
            for (const interceptor of this.interceptors.response) {
                response = await interceptor(response);
            }
            if (!response.ok) {
                throw new HTTPError(response);
            }
            return response;
        } catch (erro) {
            clearTimeout(timeoutId);
            throw erro;
        }
    }
    async get(endpoint, params) {
        if (params) {
            const query = new URLSearchParams(params).toString();
            endpoint = endpoint + '?' + query;
        }
        const response = await this.request(endpoint);
        return response.json();
    }
    async post(endpoint, data) {
        const response = await this.request(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    async put(endpoint, data) {
        const response = await this.request(endpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    async delete(endpoint) {
        await this.request(endpoint, { method: 'DELETE' });
    }
}
// Uso
async function exemploAPIClient() {
    const api = new APIClient('https://api.example.com', {
        headers: {
            'Authorization': 'Bearer token123'
        },
        timeout: 5000
    });
    // Adicionar interceptor de request
    api.addRequestInterceptor(async (config) => {
        console.log('Request:', config);
        // Adicionar timestamp
        config.headers['X-Timestamp'] = Date.now();
        return config;
    });
    // Adicionar interceptor de response
    api.addResponseInterceptor(async (response) => {
        console.log('Response:', response.status);
        return response;
    });
    // Fazer requisições
    const usuarios = await api.get('/users', { page: 1, limit: 10 });
    const novoPost = await api.post('/posts', { title: 'Título', body: 'Conteúdo' });
    await api.delete('/posts/1');
}
// Para testar:
// exemploAPIClient();
`;

console.log("Cliente HTTP completo:");
console.log(exemploCliente);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente cache de requisições HTTP para melhorar performance e reduzir chamadas repetidas.
// a) Crie classe CachedAPIClient estendendo APIClient
// b) Implemente cache com TTL e métodos de invalidação
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Cache de Requisições ===");

// Exemplo didático: Cache de requisições HTTP
const exemploCache = `
// Classe CachedAPIClient: estende APIClient e adiciona cache
class CachedAPIClient extends APIClient {
    constructor(baseURL, options = {}) {
        super(baseURL, options);
        this.cache = new Map();
        this.cacheTTL = options.cacheTTL || 60000; // 1 minuto
    }
    getCacheKey(endpoint, params) {
        return endpoint + '?' + JSON.stringify(params || {});
    }
    getFromCache(key) {
        const cached = this.cache.get(key);
        if (!cached) return null;
        const agora = Date.now();
        if (agora - cached.timestamp > this.cacheTTL) {
            this.cache.delete(key);
            return null;
        }
        console.log('📦 Cache hit:', key);
        return cached.data;
    }
    setInCache(key, data) {
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    }
    async get(endpoint, params, useCache = true) {
        const cacheKey = this.getCacheKey(endpoint, params);
        if (useCache) {
            const cached = this.getFromCache(cacheKey);
            if (cached) return cached;
        }
        console.log('🌐 Fetching:', endpoint);
        const data = await super.get(endpoint, params);
        if (useCache) {
            this.setInCache(cacheKey, data);
        }
        return data;
    }
    clearCache() {
        this.cache.clear();
    }
    invalidate(endpoint) {
        // Remover todas as entradas que começam com endpoint
        for (const key of this.cache.keys()) {
            if (key.startsWith(endpoint)) {
                this.cache.delete(key);
            }
        }
    }
}
// Uso
async function exemploCacheAPIClient() {
    const api = new CachedAPIClient('https://api.example.com', {
        cacheTTL: 30000 // 30 segundos
    });
    // Primeira chamada: busca da API
    const usuarios1 = await api.get('/users');
    // Segunda chamada: usa cache
    const usuarios2 = await api.get('/users');
    // Forçar busca da API
    const usuarios3 = await api.get('/users', null, false);
    // Invalidar cache de usuários
    api.invalidate('/users');
}
// Para testar:
// exemploCacheAPIClient();
`;

console.log("Cache de requisições:");
console.log(exemploCache);

// =====================================================
// EXERCÍCIO 7 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um gerenciador de preferências do usuário usando localStorage, com exportação/importação e listeners.
// a) Crie classe PreferenciasUsuario com métodos get/set/reset/exportar/importar
// b) Implemente listeners para atualização em tempo real
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Gerenciador de Preferências ===");

// Exemplo didático: Gerenciador de preferências do usuário
const exemploPreferencias = `
// Classe PreferenciasUsuario: gerencia preferências com localStorage
class PreferenciasUsuario {
    constructor() {
        this.chave = 'preferencias_usuario';
        this.preferencias = this.carregar();
        this.listeners = new Map();
    }
    carregar() {
        const salvas = localStorage.getItem(this.chave);
        return salvas ? JSON.parse(salvas) : this.getDefaults();
    }
    getDefaults() {
        return {
            tema: 'claro',
            idioma: 'pt-BR',
            notificacoes: {
                email: true,
                push: false,
                sms: false
            },
            exibicao: {
                densidade: 'confortavel',
                tamanhoFonte: 16,
                animacoes: true
            },
            privacidade: {
                compartilharDados: false,
                cookies: true
            }
        };
    }
    salvar() {
        localStorage.setItem(this.chave, JSON.stringify(this.preferencias));
        this.notificarMudancas();
    }
    get(caminho) {
        return caminho.split('.').reduce((obj, key) => obj?.[key], this.preferencias);
    }
    set(caminho, valor) {
        const chaves = caminho.split('.');
        const ultima = chaves.pop();
        const obj = chaves.reduce((o, k) => o[k] = o[k] || {}, this.preferencias);
        obj[ultima] = valor;
        this.salvar();
    }
    resetar() {
        this.preferencias = this.getDefaults();
        this.salvar();
    }
    exportar() {
        return JSON.stringify(this.preferencias, null, 2);
    }
    importar(json) {
        try {
            this.preferencias = JSON.parse(json);
            this.salvar();
            return true;
        } catch (erro) {
            console.error('Erro ao importar:', erro);
            return false;
        }
    }
    onChange(callback) {
        const id = Date.now();
        this.listeners.set(id, callback);
        return () => this.listeners.delete(id);
    }
    notificarMudancas() {
        for (const callback of this.listeners.values()) {
            callback(this.preferencias);
        }
    }
}
// Uso
const prefs = new PreferenciasUsuario();
// Ler preferências
console.log('Tema:', prefs.get('tema'));
console.log('Notif. email:', prefs.get('notificacoes.email'));
// Alterar preferências
prefs.set('tema', 'escuro');
prefs.set('exibicao.tamanhoFonte', 18);
prefs.set('notificacoes.push', true);
// Observar mudanças
const unsubscribe = prefs.onChange((novasPrefs) => {
    console.log('Preferências alteradas:', novasPrefs);
    // Atualizar UI
});
// Exportar/Importar
const backup = prefs.exportar();
console.log('Backup:', backup);
prefs.importar(backup);
// Parar de observar
unsubscribe();
`;

console.log("Gerenciador de preferências:");
console.log(exemploPreferencias);

console.log("\n✅ Exercícios de Storage e HTTP concluídos!");
console.log("\n💡 Conceitos importantes:");
console.log("   - localStorage: persistente, ~5-10MB");
console.log("   - sessionStorage: temporário (sessão)");
console.log("   - Fetch API: requisições HTTP modernas");
console.log("   - CORS: Cross-Origin Resource Sharing");
console.log("   - Cache: melhorar performance e UX");
