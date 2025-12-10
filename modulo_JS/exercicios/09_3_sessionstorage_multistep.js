// 09.3 - Formulário Multi-Step com sessionStorage
// Objetivo: manter progresso de formulário somente enquanto a aba estiver aberta.
// Conceitos: salvar estado corrente (step), acumular dados parciais, finalizar e limpar.
// Requer: entendimento básico de sessionStorage (ver partes anteriores).

console.log("[09.3] Multi-step usando sessionStorage");

// ENUNCIADO:
// 1. Iniciar na etapa 1.
// 2. Salvar dados parciais por etapa.
// 3. Avançar e voltar etapas.
// 4. Finalizar: consolidar e limpar.

class FormWizard {
  constructor(chaveBase = "wizard") {
    this.chaveStep = chaveBase + "_step";
    this.chaveData = chaveBase + "_data";
    this.step = this._getStep();
    this.data = this._getData();
  }

  _getStep() {
    const raw = sessionStorage.getItem(this.chaveStep);
    return raw ? parseInt(raw, 10) : 1;
  }

  _setStep(step) {
    this.step = step;
    sessionStorage.setItem(this.chaveStep, String(step));
  }

  _getData() {
    try {
      const raw = sessionStorage.getItem(this.chaveData);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  _saveData(obj) {
    this.data = { ...this.data, ...obj };
    sessionStorage.setItem(this.chaveData, JSON.stringify(this.data));
  }

  next(stepData) {
    if (stepData) this._saveData(stepData);
    this._setStep(this.step + 1);
  }

  prev() {
    if (this.step > 1) this._setStep(this.step - 1);
  }

  finish(finalData) {
    if (finalData) this._saveData(finalData);
    const resultado = { ...this.data };
    sessionStorage.removeItem(this.chaveStep);
    sessionStorage.removeItem(this.chaveData);
    this.step = 1;
    this.data = {};
    return resultado;
  }
}

// Demonstração de fluxo simulado
const wizard = new FormWizard();
console.log("Etapa inicial:", wizard.step);

wizard.next({ nome: "Ana" }); // passo 1 -> 2
console.log("Após passo 1, step:", wizard.step, "data:", wizard.data);

wizard.next({ email: "ana@email.com" }); // passo 2 -> 3
console.log("Após passo 2, step:", wizard.step, "data:", wizard.data);

wizard.prev(); // volta para 2
console.log("Voltou para step:", wizard.step);

wizard.next({ cidade: "São Paulo" }); // assume etapa 3 novamente
console.log("Dados parciais:", wizard.data);

const final = wizard.finish({ aceite: true });
console.log("Finalizado. Consolidado:", final);
console.log(
  "sessionStorage limpo. Step atual:",
  wizard.step,
  "data:",
  wizard.data
);

// Resumo:
// - sessionStorage dura apenas enquanto aba estiver aberta.
// - Multi-step separa persistência de dados e posição.
// - finish() consolida e limpa para evitar vazamento.
