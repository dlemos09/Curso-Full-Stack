// 09.1 - Fundamentos do localStorage
// Objetivo: compreender operações básicas de armazenamento de dados persistentes no navegador.
// Conteúdo: setItem, getItem, removeItem, clear, JSON.
// Cenário: salvar preferências simples de usuário.

console.log("[09.1] Fundamentos localStorage");

// ENUNCIADO:
// 1. Salvar nome do usuário.
// 2. Ler e exibir o nome salvo.
// 3. Salvar objeto de preferências (tema, fonte) usando JSON.
// 4. Atualizar o tema e persistir novamente.
// 5. Remover apenas o nome.
// 6. (Opcional) Limpar tudo.

// PASSO 1: salvar string
localStorage.setItem("usuarioNome", "Ana");

// PASSO 2: ler string
const nome = localStorage.getItem("usuarioNome");
console.log("Nome salvo:", nome);

// PASSO 3: salvar objeto (converter para JSON)
const preferencias = { tema: "escuro", fonte: "grande" };
localStorage.setItem("preferencias", JSON.stringify(preferencias));

// PASSO 4: ler objeto
const preferenciasLidas = JSON.parse(localStorage.getItem("preferencias"));
console.log("Tema atual:", preferenciasLidas.tema);

// Atualizar tema
preferenciasLidas.tema = "claro";
localStorage.setItem("preferencias", JSON.stringify(preferenciasLidas));
console.log("Tema atualizado para:", preferenciasLidas.tema);

// PASSO 5: remover nome
localStorage.removeItem("usuarioNome");
console.log(
  "Removeu usuarioNome. Resultado agora:",
  localStorage.getItem("usuarioNome")
);

// PASSO 6 (comentado): limpar todo storage
// localStorage.clear();

// Resumo:
// - Sempre usar JSON.stringify/parse para objetos.
// - Remover com removeItem(chave).
// - clear() limpa tudo; usar com cuidado.
