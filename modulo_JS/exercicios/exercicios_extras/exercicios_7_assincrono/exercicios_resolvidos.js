// Exercícios 7 - Assíncrono (Resoluções)
function obterMensagem(cb) {
  setTimeout(() => cb("Mensagem pronta"), 500);
}
obterMensagem((m) => console.log(m));
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
delay(300).then(() => console.log("300ms ok"));
function passo(nome, tempo) {
  return new Promise((r) =>
    setTimeout(() => {
      console.log(nome);
      r(nome);
    }, tempo)
  );
}
passo("carregar", 300)
  .then(() => passo("processar", 200))
  .then(() => passo("salvar", 150));
async function fluxo() {
  await passo("carregar", 300);
  await passo("processar", 200);
  await passo("salvar", 150);
  console.log("fluxo concluído");
}
fluxo();
function aleatorio() {
  return new Promise((res, rej) => {
    const ok = Math.random() > 0.5;
    setTimeout(() => (ok ? res("Sucesso") : rej(new Error("Falhou"))), 300);
  });
}
async function testar() {
  try {
    console.log(await aleatorio());
  } catch (e) {
    console.error("Erro:", e.message);
  }
}
for (let i = 0; i < 3; i++) testar();
