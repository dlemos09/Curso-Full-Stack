// Exercícios 6 - Módulos e NPM (Resoluções Demonstrativas)
// math.js
export function soma(a, b) {
  return a + b;
}
export function subtrai(a, b) {
  return a - b;
}
// index.js (exemplo de uso)
// import { soma, subtrai } from './math.js';
// console.log(soma(2,3), subtrai(5,1));
// config.js
export default { apiUrl: "https://api.exemplo.com" };
export function versao() {
  return "1.0.0";
}
// main.js estrutura
// import config,{versao} from './config.js';
// console.log(config.apiUrl, versao());
// utils/date.js
export const hoje = () => new Date().toISOString();
// services/user.js
export const criarUser = (nome) => ({ id: Date.now(), nome });
// Comentários npm init e scripts no README.
