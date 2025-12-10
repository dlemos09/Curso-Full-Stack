// ========================================
// AULA 06: Módulos, NPM e Estrutura de Projeto
// Objetivo didático: Entender modularização, gerenciamento de dependências e organização profissional de projetos JS/Node
// Por que importa: Escalabilidade, manutenção, colaboração e uso de pacotes externos
// Sequência: ES Modules → CommonJS → package.json → SemVer → estrutura → utilitários → CLI → config
// ========================================

// NOTA: Estes exercícios demonstram conceitos. Para executar totalmente,
// você precisaria criar arquivos separados e configurar package.json

console.log("=== AULA 06: Módulos e NPM ===\n");

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre o conceito de ES Modules (export/import) e como organizar código em arquivos separados.
// a) Simule exports e imports em arquivos distintos
// b) Mostre uma estrutura de pastas recomendada
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: ES Modules (Conceito) ===");

// a) Exemplo de export/import (comentado, pois exige arquivos separados)
// ...existing code...

console.log(`
📁 Estrutura de módulos:
  projeto/
  ├── src/
  │   ├── main.js
  │   └── utils/
  │       ├── math.js
  │       ├── string.js
  │       └── validation.js
  └── package.json
`);

// =====================================================
// EXERCÍCIO 2 - BÁSICO
// ENUNCIADO:
// Demonstre o conceito de CommonJS (require/module.exports) e compare com ES Modules.
// a) Simule exports e require em arquivos distintos
// b) Explique diferenças entre CommonJS e ES Modules
// =====================================================

console.log("\n=== EXERCÍCIO 2: CommonJS (Conceito) ===");

// a) Exemplo de require/module.exports (comentado, pois exige arquivos separados)
// ...existing code...

console.log(`
CommonJS vs ES Modules:

CommonJS (require):
  ✓ Síncrono
  ✓ Suporte nativo em Node.js
  ✗ Não funciona no navegador
  
ES Modules (import):
  ✓ Assíncrono
  ✓ Funciona navegador e Node.js
  ✓ Treeshaking (bundlers)
  ✓ Sintaxe moderna
`);

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Demonstre como configurar um projeto Node.js com package.json e scripts úteis.
// a) Mostre um exemplo de package.json comentado
// b) Liste comandos npm importantes
// =====================================================

console.log("\n=== EXERCÍCIO 3: Package.json ===");

// a) Exemplo de package.json (objeto JS para visualização)
// ...existing code...

console.log("Exemplo de package.json:");
console.log(JSON.stringify(exemploPackageJson, null, 2));

console.log(`
Comandos NPM importantes:
  npm init -y              # Criar package.json
  npm install express      # Instalar dependência
  npm install -D jest      # Instalar dev dependency
  npm install              # Instalar todas dependências
  npm run dev              # Executar script "dev"
  npm test                 # Executar testes
  npm update               # Atualizar pacotes
  npm outdated             # Verificar pacotes desatualizados
`);

// =====================================================
// EXERCÍCIO 4 - INTERMEDIÁRIO
// ENUNCIADO:
// Explique o versionamento semântico (SemVer) e como interpretar versões de dependências.
// a) Crie função para explicar major/minor/patch
// b) Mostre exemplos de símbolos de versão no package.json
// =====================================================

console.log("\n=== EXERCÍCIO 4: SemVer (Semantic Versioning) ===");

// a) Função para explicar SemVer
// ...existing code...

console.log("Versão 1.4.2:");
console.log(explicarVersao("1.4.2"));

console.log(`
Símbolos de versão no package.json:
  "express": "4.18.0"    # Exato (não recomendado)
  "express": "^4.18.0"   # Permite minor/patch (4.x.x)
  "express": "~4.18.0"   # Permite apenas patch (4.18.x)
  "express": "*"         # Qualquer versão (perigoso!)
  "express": ">=4.18.0"  # Maior ou igual
`);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Mostre uma estrutura de projeto profissional para Node.js/JavaScript.
// a) Explique o papel de cada pasta/arquivo
// =====================================================

console.log("\n=== EXERCÍCIO 5: Estrutura de Projeto ===");

// a) Estrutura comentada
// ...existing code...

console.log(estruturaProjeto);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente um módulo utilitário com funções de validação comuns.
// a) Crie funções para validar email, telefone, CPF, senha forte e valor vazio
// b) Teste cada função
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Módulo Utilitário ===");

// a) Simulação de módulo utils/validators.js
// ...existing code...

// b) Testar validadores
console.log("Testes de Validação:");
console.log("Email válido:", Validators.isEmail("usuario@example.com"));
console.log("Email inválido:", Validators.isEmail("usuario@"));
console.log("Telefone:", Validators.isPhone("(11) 98888-7777"));
console.log("CPF:", Validators.isCPF("123.456.789-10"));
console.log("Senha forte:", Validators.isStrongPassword("Senha@123"));
console.log("Senha fraca:", Validators.isStrongPassword("123456"));
console.log("Vazio:", Validators.isEmpty(""), Validators.isEmpty([]));

// =====================================================
// EXERCÍCIO 7 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente uma ferramenta de linha de comando (CLI) simples que processa argumentos.
// a) Crie uma classe que interpreta comandos e opções
// b) Simule o uso da CLI com diferentes comandos
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: CLI Tool ===");

// a) Simulação de CLI que processa argumentos
// ...existing code...

// b) Simular uso da CLI
// ...existing code...

// =====================================================
// EXERCÍCIO 8 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um gerenciador de configuração que carrega, mescla e acessa configs de diferentes fontes.
// a) Crie uma classe para gerenciar configurações
// b) Demonstre uso prático: carregar env, mesclar custom, acessar valores
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 8: Config Manager ===");

// a) Classe para gerenciar configurações
// ...existing code...

// b) Uso prático
// ...existing code...

console.log("\n✅ Exercícios de Módulos, NPM e Estrutura concluídos!");
console.log("\n💡 Para praticar completamente:");
console.log("   1. Crie arquivos separados para cada módulo");
console.log("   2. Configure package.json com scripts");
console.log("   3. Instale e use pacotes do NPM");
console.log("   4. Organize um projeto com a estrutura sugerida");
