// 09.2 - Validação e Padrões no localStorage
// Objetivo: garantir integridade dos dados, aplicar defaults e criar funções reutilizáveis.
// Dependência conceitual: já entender set/get JSON (ver 09_1_localstorage_basico.js)

console.log("[09.2] Validação e Padrões localStorage");

// ENUNCIADO:
// 1. Criar função para salvar preferências garantindo formato válido.
// 2. Usar fallback quando dado inválido.
// 3. Ler preferências sempre com defaults.
// 4. Expor pequena API de leitura/atualização.

// Defaults
const DEFAULT_PREFS = Object.freeze({
  tema: "claro",
  fonte: "media",
  contraste: "normal",
});

function isObjeto(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function salvarPreferencias(prefs) {
  if (!isObjeto(prefs)) {
    console.warn("Objeto inválido. Usando padrão.");
    prefs = { ...DEFAULT_PREFS };
  }
  // Garantir chaves mínimas
  prefs.tema = prefs.tema || DEFAULT_PREFS.tema;
  prefs.fonte = prefs.fonte || DEFAULT_PREFS.fonte;
  prefs.contraste = prefs.contraste || DEFAULT_PREFS.contraste;
  localStorage.setItem("appPrefs", JSON.stringify(prefs));
}

function lerPreferencias() {
  try {
    const bruto = localStorage.getItem("appPrefs");
    if (!bruto) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(bruto);
    if (!isObjeto(parsed)) return { ...DEFAULT_PREFS };
    return {
      tema: parsed.tema || DEFAULT_PREFS.tema,
      fonte: parsed.fonte || DEFAULT_PREFS.fonte,
      contraste: parsed.contraste || DEFAULT_PREFS.contraste,
    };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

function atualizarPreferencias(patch) {
  const atuais = lerPreferencias();
  const novas = { ...atuais, ...patch };
  salvarPreferencias(novas);
  return novas;
}

function resetarPreferencias() {
  salvarPreferencias({ ...DEFAULT_PREFS });
}

// Demonstração
resetarPreferencias();
console.log("Inicial:", lerPreferencias());

atualizarPreferencias({ tema: "escuro" });
console.log("Após tema escuro:", lerPreferencias());

atualizarPreferencias({ fonte: "grande", contraste: "alto" });
console.log("Após fonte + contraste:", lerPreferencias());

salvarPreferencias("valor inválido"); // Força fallback
console.log("Após salvar inválido (fallback):", lerPreferencias());

// Resumo:
// - Verificar formato antes de persistir.
// - Aplicar defaults para campos ausentes.
// - Funções atomizadas simplificam manutenção.
