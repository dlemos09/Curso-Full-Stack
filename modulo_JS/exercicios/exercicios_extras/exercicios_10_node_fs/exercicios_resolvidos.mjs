import { promises as fs } from "fs";
// 1 Criar arquivo
await fs.writeFile("dados.txt", "Linha inicial", "utf-8");
console.log("Criado");
// 2 Ler
console.log(await fs.readFile("dados.txt", "utf-8"));
// 3 Append
await fs.appendFile("dados.txt", "\nNova linha", "utf-8");
// 4 Listar diretório
console.log(await fs.readdir("."));
// 5 Argumento CLI
const nome = process.argv[2];
if (!nome) {
  console.log("Forneça nome de arquivo");
  process.exit(1);
}
const stats = await fs.stat(nome);
console.log("Tamanho (bytes):", stats.size);
