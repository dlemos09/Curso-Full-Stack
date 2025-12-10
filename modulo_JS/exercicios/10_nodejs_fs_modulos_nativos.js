// ========================================
// AULA 10: Node.js, FS e Módulos Nativos
// Objetivo didático: trabalhar com APIs nativas do Node para I/O e automação
// Por que importa: scripts, CLIs e processamento eficiente em backend
// Sequência: fs → diretórios → path → process → streams → CLI → aplicação real
// ========================================

/*
NOTA: Estes exercícios são para ambiente Node.js.
Execute com: node 10_nodejs_fs_modulos.js
*/

console.log("=== AULA 10: Node.js e Módulos Nativos ===\n");

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre como ler, escrever, adicionar, copiar, mover e deletar arquivos usando o módulo fs/promises do Node.js.
// a) Escreva e leia arquivos
// b) Adicione conteúdo, copie, mova e delete arquivos
// c) Obtenha informações detalhadas de arquivos
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: File System ===");

const exemploFS = `
import { promises as fs } from 'fs';
import path from 'path';

// Escrever arquivo
async function escreverArquivo() {
    const dados = 'Olá, mundo!\\nEsta é a segunda linha.';
    await fs.writeFile('output.txt', dados, 'utf-8');
    console.log('Arquivo escrito com sucesso!');
}

// Ler arquivo
async function lerArquivo() {
    const conteudo = await fs.readFile('output.txt', 'utf-8');
    console.log('Conteúdo:', conteudo);
    return conteudo;
}

// Adicionar ao arquivo (append)
async function adicionarAoArquivo() {
    await fs.appendFile('output.txt', '\\nLinha adicional', 'utf-8');
}

// Verificar se arquivo existe
async function arquivoExiste(caminho) {
    try {
        await fs.access(caminho);
        return true;
    } catch {
        return false;
    }
}

// Deletar arquivo
async function deletarArquivo(caminho) {
    if (await arquivoExiste(caminho)) {
        await fs.unlink(caminho);
        console.log('Arquivo deletado');
    }
}

// Copiar arquivo
async function copiarArquivo(origem, destino) {
    await fs.copyFile(origem, destino);
}

// Renomear/mover arquivo
async function moverArquivo(origem, destino) {
    await fs.rename(origem, destino);
}

// Obter informações do arquivo
async function infoArquivo(caminho) {
    const stats = await fs.stat(caminho);
    return {
        tamanho: stats.size,
        criado: stats.birthtime,
        modificado: stats.mtime,
        ehDiretorio: stats.isDirectory(),
        ehArquivo: stats.isFile()
    };
}

// Executar
await escreverArquivo();
await lerArquivo();
await adicionarAoArquivo();
const info = await infoArquivo('output.txt');
console.log('Info:', info);
`;

console.log("Operações básicas com arquivos:");
console.log(exemploFS);

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Demonstre como criar, listar, copiar e deletar diretórios usando fs/promises e path.
// a) Crie e liste diretórios
// b) Liste detalhes, copie e delete diretórios recursivamente
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Diretórios ===");

const exemploDiretorios = `
import { promises as fs } from 'fs';
import path from 'path';

// Criar diretório
async function criarDiretorio(caminho) {
    await fs.mkdir(caminho, { recursive: true });
    console.log('Diretório criado:', caminho);
}

// Listar conteúdo do diretório
async function listarDiretorio(caminho) {
    const itens = await fs.readdir(caminho);
    console.log('Itens:', itens);
    return itens;
}

// Listar com informações detalhadas
async function listarDetalhado(caminho) {
    const itens = await fs.readdir(caminho, { withFileTypes: true });
    
    const detalhes = await Promise.all(
        itens.map(async (item) => {
            const caminhoCompleto = path.join(caminho, item.name);
            const stats = await fs.stat(caminhoCompleto);
            
            return {
                nome: item.name,
                tipo: item.isDirectory() ? 'pasta' : 'arquivo',
                tamanho: stats.size,
                modificado: stats.mtime
            };
        })
    );
    
    return detalhes;
}

// Deletar diretório vazio
async function deletarDiretorio(caminho) {
    await fs.rmdir(caminho);
}

// Deletar diretório recursivamente (com conteúdo)
async function deletarRecursivo(caminho) {
    await fs.rm(caminho, { recursive: true, force: true });
}

// Copiar diretório recursivamente
async function copiarDiretorio(origem, destino) {
    await fs.mkdir(destino, { recursive: true });
    
    const itens = await fs.readdir(origem, { withFileTypes: true });
    
    for (const item of itens) {
        const origemPath = path.join(origem, item.name);
        const destinoPath = path.join(destino, item.name);
        
        if (item.isDirectory()) {
            await copiarDiretorio(origemPath, destinoPath);
        } else {
            await fs.copyFile(origemPath, destinoPath);
        }
    }
}

// Uso
await criarDiretorio('minha-pasta/subpasta');
const itens = await listarDetalhado('.');
console.log('Conteúdo:', itens);
`;

console.log("Operações com diretórios:");
console.log(exemploDiretorios);

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como manipular caminhos de arquivos e diretórios de forma multiplataforma usando o módulo path.
// a) Extraia informações, construa, normalize e converta caminhos
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Path ===");

const exemploPath = `
import path from 'path';

// Informações sobre caminho
const caminho = '/user/docs/arquivo.txt';

console.log('Diretório:', path.dirname(caminho));     // '/user/docs'
console.log('Nome:', path.basename(caminho));         // 'arquivo.txt'
console.log('Extensão:', path.extname(caminho));      // '.txt'
console.log('Nome sem ext:', path.parse(caminho).name); // 'arquivo'

// Construir caminhos (funciona em Windows e Unix)
const novoCaminho = path.join('pasta', 'subpasta', 'arquivo.js');
console.log('Caminho:', novoCaminho);

// Caminho absoluto
const absoluto = path.resolve('pasta', 'arquivo.js');
console.log('Absoluto:', absoluto);

// Caminho relativo entre dois caminhos
const relativo = path.relative('/data/orandea/test/', '/data/orandea/impl/');
console.log('Relativo:', relativo); // '../impl'

// Normalizar caminho
const normalizado = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log('Normalizado:', normalizado); // '/foo/bar/baz/asdf'

// Parse completo
const parsed = path.parse('/home/user/dir/file.txt');
console.log('Parse:', parsed);
/*
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Format (inverso de parse)
const formatted = path.format({
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log('Formatted:', formatted); // '/home/user/dir/file.txt'

// Separador do sistema operacional
console.log('Separador:', path.sep); // '/' no Unix, '\\\\' no Windows
console.log('Delimitador:', path.delimiter); // ':' no Unix, ';' no Windows
`;

console.log("Módulo Path:");
console.log(exemploPath);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como acessar argumentos, variáveis de ambiente, informações do processo e manipular eventos usando o módulo process.
// a) Leia argumentos, variáveis, memória, eventos e stdin/stdout
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Process ===");

const exemploProcess = `
// Argumentos da linha de comando
console.log('Argumentos:', process.argv);
// node script.js arg1 arg2
// ['node', '/path/script.js', 'arg1', 'arg2']

// Diretório atual
console.log('CWD:', process.cwd());

// Plataforma e arquitetura
console.log('Plataforma:', process.platform); // 'linux', 'darwin', 'win32'
console.log('Arquitetura:', process.arch);    // 'x64', 'arm', etc

// Versão do Node
console.log('Node version:', process.version);

// Variáveis de ambiente
console.log('PATH:', process.env.PATH);
console.log('HOME:', process.env.HOME);

// Definir variável de ambiente (apenas no processo atual)
process.env.CUSTOM_VAR = 'valor';

// Memória
console.log('Memória:', process.memoryUsage());

// Uptime
console.log('Uptime:', process.uptime());

// Sair do processo
// process.exit(0); // 0 = sucesso, outro = erro

// Event listeners
process.on('exit', (code) => {
    console.log(\`Saindo com código \${code}\`);
});

process.on('uncaughtException', (erro) => {
    console.error('Exceção não capturada:', erro);
    process.exit(1);
});

// Stdin/Stdout (entrada/saída padrão)
process.stdout.write('Digite algo: ');
process.stdin.on('data', (data) => {
    console.log('Você digitou:', data.toString().trim());
    process.exit(0);
});
`;

console.log("Process:");
console.log(exemploProcess);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Demonstre como processar arquivos grandes de forma eficiente usando streams do Node.js.
// a) Leia, copie, transforme e comprima arquivos com streams
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Streams ===");

const exemploStreams = `
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

// Ler arquivo grande linha por linha
async function lerLinhas(caminho) {
    const stream = createReadStream(caminho, 'utf-8');
    let buffer = '';
    
    for await (const chunk of stream) {
        buffer += chunk;
        const linhas = buffer.split('\\n');
        buffer = linhas.pop(); // Última linha incompleta
        
        for (const linha of linhas) {
            console.log('Linha:', linha);
        }
    }
    
    if (buffer) {
        console.log('Última linha:', buffer);
    }
}

// Copiar arquivo usando streams
async function copiarComStream(origem, destino) {
    const readStream = createReadStream(origem);
    const writeStream = createWriteStream(destino);
    
    await pipeline(readStream, writeStream);
    console.log('Cópia concluída');
}

// Transform stream: processar durante leitura/escrita
class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const transformado = chunk.toString().toUpperCase();
        callback(null, transformado);
    }
}

async function converterParaMaiusculas(origem, destino) {
    const readStream = createReadStream(origem);
    const transformStream = new UppercaseTransform();
    const writeStream = createWriteStream(destino);
    
    await pipeline(readStream, transformStream, writeStream);
}

// Pipeline com múltiplos transforms
class ContadorLinhas extends Transform {
    constructor() {
        super();
        this.count = 0;
    }
    
    _transform(chunk, encoding, callback) {
        this.count += chunk.toString().split('\\n').length - 1;
        callback(null, chunk);
    }
    
    _flush(callback) {
        console.log(\`Total de linhas: \${this.count}\`);
        callback();
    }
}

async function contarECopiar(origem, destino) {
    const readStream = createReadStream(origem);
    const contadorStream = new ContadorLinhas();
    const writeStream = createWriteStream(destino);
    
    await pipeline(readStream, contadorStream, writeStream);
}

// Compressão com streams
import { createGzip } from 'zlib';

async function comprimirArquivo(origem, destino) {
    const readStream = createReadStream(origem);
    const gzip = createGzip();
    const writeStream = createWriteStream(destino);
    
    await pipeline(readStream, gzip, writeStream);
    console.log('Arquivo comprimido');
}
`;

console.log("Streams:");
console.log(exemploStreams);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente uma ferramenta de linha de comando (CLI) robusta usando Commander, Chalk e ora.
// a) Crie comandos para criar projetos, listar arquivos e buscar padrões
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: CLI Tool ===");

const exemploCLI = `
#!/usr/bin/env node
import { program } from 'commander'; // npm install commander
import chalk from 'chalk'; // npm install chalk
import ora from 'ora'; // npm install ora
import { promises as fs } from 'fs';
import path from 'path';

// Configurar CLI
program
    .name('my-tool')
    .description('Ferramenta CLI de exemplo')
    .version('1.0.0');

// Comando: criar projeto
program
    .command('create <name>')
    .description('Criar novo projeto')
    .option('-t, --template <type>', 'Template do projeto', 'basic')
    .action(async (name, options) => {
        const spinner = ora('Criando projeto...').start();
        
        try {
            const projectPath = path.join(process.cwd(), name);
            
            // Criar estrutura
            await fs.mkdir(projectPath);
            await fs.mkdir(path.join(projectPath, 'src'));
            await fs.mkdir(path.join(projectPath, 'tests'));
            
            // Criar package.json
            const packageJson = {
                name,
                version: '1.0.0',
                main: 'src/index.js',
                scripts: {
                    start: 'node src/index.js',
                    test: 'jest'
                }
            };
            
            await fs.writeFile(
                path.join(projectPath, 'package.json'),
                JSON.stringify(packageJson, null, 2)
            );
            
            // Criar arquivo inicial
            await fs.writeFile(
                path.join(projectPath, 'src', 'index.js'),
                "console.log('Hello, World!');"
            );
            
            spinner.succeed(chalk.green('Projeto criado com sucesso!'));
            console.log(chalk.blue(\`\\nPróximos passos:
  cd \${name}
  npm install
  npm start
\`));
        } catch (erro) {
            spinner.fail(chalk.red('Erro ao criar projeto'));
            console.error(erro);
            process.exit(1);
        }
    });

// Comando: listar arquivos
program
    .command('list [directory]')
    .description('Listar arquivos do diretório')
    .option('-a, --all', 'Mostrar arquivos ocultos')
    .option('-l, --long', 'Formato detalhado')
    .action(async (directory = '.', options) => {
        const itens = await fs.readdir(directory, { withFileTypes: true });
        
        for (const item of itens) {
            if (!options.all && item.name.startsWith('.')) continue;
            
            if (options.long) {
                const caminho = path.join(directory, item.name);
                const stats = await fs.stat(caminho);
                const tipo = item.isDirectory() ? 'DIR' : 'FILE';
                const tamanho = stats.size;
                console.log(\`\${tipo.padEnd(5)} \${tamanho.toString().padStart(10)} \${item.name}\`);
            } else {
                const cor = item.isDirectory() ? chalk.blue : chalk.white;
                console.log(cor(item.name));
            }
        }
    });

// Comando: buscar em arquivos
program
    .command('search <pattern> [directory]')
    .description('Buscar padrão em arquivos')
    .option('-r, --recursive', 'Busca recursiva')
    .option('-i, --ignore-case', 'Ignorar maiúsculas/minúsculas')
    .action(async (pattern, directory = '.', options) => {
        const regex = new RegExp(pattern, options.ignoreCase ? 'i' : '');
        
        async function buscar(dir) {
            const itens = await fs.readdir(dir, { withFileTypes: true });
            
            for (const item of itens) {
                const caminho = path.join(dir, item.name);
                
                if (item.isDirectory() && options.recursive) {
                    await buscar(caminho);
                } else if (item.isFile()) {
                    const conteudo = await fs.readFile(caminho, 'utf-8');
                    const linhas = conteudo.split('\\n');
                    
                    linhas.forEach((linha, i) => {
                        if (regex.test(linha)) {
                            console.log(
                                chalk.yellow(caminho) + 
                                chalk.gray(\`:\${i + 1}:\`) + 
                                linha
                            );
                        }
                    });
                }
            }
        }
        
        await buscar(directory);
    });

// Parsear argumentos
program.parse();
`;

console.log("CLI Tool completo:");
console.log(exemploCLI);

// =====================================================
// EXERCÍCIO 7 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um processador de logs capaz de analisar grandes arquivos, gerar estatísticas e relatórios.
// a) Leia logs linha a linha, agrupe por nível e gere relatório
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Processador de Logs ===");

const exemploLogs = `
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

class LogAnalyzer {
    constructor() {
        this.stats = {
            total: 0,
            porNivel: {},
            erros: [],
            warnings: []
        };
    }
    
    async analisar(caminhoLog) {
        const stream = createReadStream(caminhoLog);
        const rl = createInterface({
            input: stream,
            crlfDelay: Infinity
        });
        
        for await (const linha of rl) {
            this.processarLinha(linha);
        }
        
        return this.gerarRelatorio();
    }
    
    processarLinha(linha) {
        this.stats.total++;
        
        // Parse de linha de log típica
        // Formato: [TIMESTAMP] [LEVEL] Message
        const match = linha.match(/\\[(.*?)\\]\\s*\\[(.*?)\\]\\s*(.*)/);
        if (!match) return;
        
        const [, timestamp, nivel, mensagem] = match;
        
        // Contar por nível
        this.stats.porNivel[nivel] = (this.stats.porNivel[nivel] || 0) + 1;
        
        // Guardar erros
        if (nivel === 'ERROR') {
            this.stats.erros.push({ timestamp, mensagem });
        }
        
        if (nivel === 'WARN') {
            this.stats.warnings.push({ timestamp, mensagem });
        }
    }
    
    gerarRelatorio() {
        return {
            resumo: {
                totalLinhas: this.stats.total,
                distribuicao: this.stats.porNivel,
                taxaErro: (this.stats.porNivel.ERROR || 0) / this.stats.total * 100
            },
            erros: this.stats.erros.slice(0, 10), // Top 10 erros
            warnings: this.stats.warnings.slice(0, 10)
        };
    }
}

// Uso
const analyzer = new LogAnalyzer();
const relatorio = await analyzer.analisar('app.log');

console.log('📊 Relatório de Logs:');
console.log('Total de linhas:', relatorio.resumo.totalLinhas);
console.log('Distribuição:', relatorio.resumo.distribuicao);
console.log('Taxa de erro:', relatorio.resumo.taxaErro.toFixed(2) + '%');
console.log('\\nÚltimos erros:', relatorio.erros);
`;

console.log("Processador de logs:");
console.log(exemploLogs);

console.log("\n✅ Exercícios de Node.js, FS e Módulos Nativos concluídos!");
console.log("\n💡 Módulos principais do Node.js:");
console.log("   - fs: File System (arquivos e diretórios)");
console.log("   - path: Manipulação de caminhos");
console.log("   - process: Informações e controle do processo");
console.log("   - stream: Processamento eficiente de dados");
console.log("   - os: Informações do sistema operacional");
console.log("   - crypto: Criptografia");
console.log("   - http/https: Servidores e clientes HTTP");
