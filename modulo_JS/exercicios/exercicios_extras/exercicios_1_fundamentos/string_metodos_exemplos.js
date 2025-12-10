// Exemplos rápidos de métodos de string

const exemplo = "  JavaScript Avançado  ";

console.log("Original:", JSON.stringify(exemplo));
console.log("Trim:", exemplo.trim());
console.log("Upper:", exemplo.toUpperCase());
console.log("Lower:", exemplo.toLowerCase());
console.log("Slice 0..10:", exemplo.slice(0, 10));
console.log("Includes Avançado?", exemplo.includes("Avançado"));
console.log("Replace:", exemplo.replace("Avançado", "Fundamentos"));
console.log("PadStart:", "42".padStart(5, "0")); // '00042'
console.log("Repeat:", "JS".repeat(3));

// Contar palavras
function contarPalavras(str) {
  return str.trim().split(/\s+/).length;
}
console.log("Palavras:", contarPalavras(exemplo));

// Slugify simples
function slug(str) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
console.log("Slug:", slug("Título com Ação & Teste!!!"));
