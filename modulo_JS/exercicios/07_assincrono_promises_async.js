// ========================================
// AULA 07: Assíncrono - Callbacks, Promises e Async/Await
// Objetivo didático: Dominar programação assíncrona em JavaScript (callbacks, promises, async/await, paralelismo)
// Por que importa: APIs, I/O, concorrência, robustez e performance
// Sequência: callbacks → promises → async/await → paralelismo → retry → concorrência → API robusta
// ========================================

console.log("=== AULA 07: Programação Assíncrona ===\n");

// =====================================================
// EXERCÍCIO 1 - BÁSICO
// ENUNCIADO:
// Demonstre o uso de callbacks em funções assíncronas e o problema do callback hell.
// a) Implemente funções assíncronas simuladas com callback
// b) Mostre o problema do callback hell com callbacks aninhados
// Explique cada passo com comentários.
// =====================================================

console.log("=== EXERCÍCIO 1: Callbacks ===");

// a) Função assíncrona simulada usando callback
function buscarUsuario(id, callback) {
  console.log(`Buscando usuário ${id}...`);

  setTimeout(() => {
    const usuario = {
      id: id,
      nome: "Ana Silva",
      email: "ana@email.com",
    };
    callback(null, usuario); // Padrão: (erro, resultado)
  }, 1000);
}

// Usar callback
buscarUsuario(1, (erro, usuario) => {
  if (erro) {
    console.error("Erro:", erro);
    return;
  }
  console.log("Usuário encontrado:", usuario);
});

// b) Problema: Callback Hell
console.log("\nProblema: Callback Hell");
function buscarPedidos(usuarioId, callback) {
  setTimeout(() => {
    callback(null, [
      { id: 101, valor: 150 },
      { id: 102, valor: 200 },
    ]);
  }, 500);
}

function buscarDetalhes(pedidoId, callback) {
  setTimeout(() => {
    callback(null, { items: ["Produto A", "Produto B"] });
  }, 500);
}

// Callbacks aninhados (difícil de ler e manter)
buscarUsuario(1, (err, usuario) => {
  if (err) return console.error(err);

  buscarPedidos(usuario.id, (err, pedidos) => {
    if (err) return console.error(err);

    buscarDetalhes(pedidos[0].id, (err, detalhes) => {
      if (err) return console.error(err);

      console.log("Resultado final:", { usuario, pedidos, detalhes });
    });
  });
});

// =====================================================
// EXERCÍCIO 2 - INTERMEDIÁRIO
// ENUNCIADO:
// Resolva o problema do callback hell usando Promises.
// a) Implemente funções assíncronas que retornam Promise
// b) Encadeie chamadas com then/catch/finally
// c) Teste rejeição de Promise
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 2: Promises ===");

// a) Funções que retornam Promise
function buscarUsuarioPromise(id) {
  return new Promise((resolve, reject) => {
    console.log(`[Promise] Buscando usuário ${id}...`);

    setTimeout(() => {
      if (id > 0) {
        resolve({
          id: id,
          nome: "Bruno Costa",
          email: "bruno@email.com",
        });
      } else {
        reject(new Error("ID inválido"));
      }
    }, 800);
  });
}

function buscarPedidosPromise(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 201, valor: 300 },
        { id: 202, valor: 450 },
      ]);
    }, 500);
  });
}

// b) Usar promises com then/catch
buscarUsuarioPromise(2)
  .then((usuario) => {
    console.log("Usuário:", usuario);
    return buscarPedidosPromise(usuario.id);
  })
  .then((pedidos) => {
    console.log("Pedidos:", pedidos);
  })
  .catch((erro) => {
    console.error("Erro na cadeia:", erro);
  })
  .finally(() => {
    console.log("Operação finalizada");
  });

// c) Testar rejeição
buscarUsuarioPromise(-1)
  .then((usuario) => console.log(usuario))
  .catch((erro) => console.error("Erro capturado:", erro.message));

// =====================================================
// EXERCÍCIO 3 - INTERMEDIÁRIO
// ENUNCIADO:
// Use async/await para tornar o código assíncrono mais legível.
// a) Implemente função async que usa await para buscar dados
// b) Trate erros com try/catch
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 3: Async/Await ===");

async function obterDadosCompletos(userId) {
  try {
    console.log(`[Async] Iniciando busca para usuário ${userId}`);

    // Aguardar usuário
    const usuario = await buscarUsuarioPromise(userId);
    console.log("✓ Usuário obtido:", usuario.nome);

    // Aguardar pedidos
    const pedidos = await buscarPedidosPromise(usuario.id);
    console.log("✓ Pedidos obtidos:", pedidos.length);

    // Calcular total
    const total = pedidos.reduce((sum, p) => sum + p.valor, 0);

    return {
      usuario,
      pedidos,
      totalGasto: total,
    };
  } catch (erro) {
    console.error("❌ Erro:", erro.message);
    throw erro;
  }
}

// Executar função async
obterDadosCompletos(3).then((resultado) => {
  console.log("\n📊 Resultado completo:");
  console.log(JSON.stringify(resultado, null, 2));
});

// =====================================================
// EXERCÍCIO 4 - AVANÇADO
// ENUNCIADO:
// Demonstre Promise.all para executar múltiplas promises em paralelo e comparar com execução sequencial.
// a) Implemente funções para execução sequencial e paralela
// b) Compare performance
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 4: Promise.all ===");

function delay(ms, valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), ms);
  });
}

// a) Executar sequencialmente (lento)
async function executarSequencial() {
  console.time("Sequencial");

  const resultado1 = await delay(1000, "Dado 1");
  const resultado2 = await delay(1000, "Dado 2");
  const resultado3 = await delay(1000, "Dado 3");

  console.timeEnd("Sequencial"); // ~3000ms
  return [resultado1, resultado2, resultado3];
}

// b) Executar em paralelo (rápido)
async function executarParalelo() {
  console.time("Paralelo");

  const resultados = await Promise.all([
    delay(1000, "Dado 1"),
    delay(1000, "Dado 2"),
    delay(1000, "Dado 3"),
  ]);

  console.timeEnd("Paralelo"); // ~1000ms
  return resultados;
}

// Comparar performance
setTimeout(async () => {
  await executarSequencial();
  await executarParalelo();
}, 3000);

// =====================================================
// EXERCÍCIO 5 - AVANÇADO
// ENUNCIADO:
// Demonstre Promise.race, Promise.allSettled e Promise.any para diferentes estratégias de concorrência.
// a) Implemente exemplos para cada método
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 5: Outros Métodos de Promise ===");

// a) Promise.race: retorna a primeira que resolver/rejeitar
async function testeRace() {
  const rapida = delay(500, "Rápida");
  const lenta = delay(2000, "Lenta");

  const vencedora = await Promise.race([rapida, lenta]);
  console.log("Promise.race vencedora:", vencedora);
}

// b) Promise.allSettled: espera todas, independente de erro
async function testeAllSettled() {
  const promises = [
    Promise.resolve("Sucesso 1"),
    Promise.reject("Erro 1"),
    Promise.resolve("Sucesso 2"),
    Promise.reject("Erro 2"),
  ];

  const resultados = await Promise.allSettled(promises);
  console.log("Promise.allSettled:");
  resultados.forEach((r, i) => {
    console.log(`  ${i}: ${r.status} -`, r.value || r.reason);
  });
}

// c) Promise.any: retorna a primeira que resolver (ignora rejeições)
async function testeAny() {
  const promises = [
    delay(1000, "Primeira"),
    delay(500, "Segunda"),
    delay(1500, "Terceira"),
  ];

  const primeira = await Promise.any(promises);
  console.log("Promise.any (primeira a resolver):", primeira);
}

setTimeout(async () => {
  await testeRace();
  await testeAllSettled();
  await testeAny();
}, 5000);

// =====================================================
// EXERCÍCIO 6 - AVANÇADO
// ENUNCIADO:
// Implemente retry com backoff exponencial para operações instáveis.
// a) Crie função que tenta várias vezes com delay crescente
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 6: Retry com Backoff ===");

async function operacaoInstavel() {
  const aleatorio = Math.random();
  if (aleatorio < 0.7) {
    throw new Error("Operação falhou (temporário)");
  }
  return "Operação bem-sucedida!";
}

async function retryComBackoff(fn, maxTentativas = 5, delayInicial = 1000) {
  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    try {
      console.log(`Tentativa ${tentativa}/${maxTentativas}...`);
      const resultado = await fn();
      console.log("✓ Sucesso:", resultado);
      return resultado;
    } catch (erro) {
      if (tentativa === maxTentativas) {
        console.error("❌ Falhou após todas as tentativas");
        throw erro;
      }

      // Backoff exponencial: 1s, 2s, 4s, 8s...
      const delay = delayInicial * Math.pow(2, tentativa - 1);
      console.log(`⚠ Erro: ${erro.message}. Aguardando ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

setTimeout(() => {
  retryComBackoff(operacaoInstavel, 5, 500);
}, 8000);

// =====================================================
// EXERCÍCIO 7 - AVANÇADO
// ENUNCIADO:
// Implemente controle de concorrência para limitar o número de promises simultâneas.
// a) Crie função que executa tarefas com limite de concorrência
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 7: Controle de Concorrência ===");

async function executarComLimite(tarefas, limite) {
  const resultados = [];
  const executando = [];

  for (const [indice, tarefa] of tarefas.entries()) {
    const promise = tarefa().then((resultado) => {
      resultados[indice] = resultado;
      executando.splice(executando.indexOf(promise), 1);
    });

    executando.push(promise);

    if (executando.length >= limite) {
      await Promise.race(executando);
    }
  }

  await Promise.all(executando);
  return resultados;
}

// Criar tarefas
const tarefas = Array.from(
  { length: 10 },
  (_, i) => () => delay(1000, `Tarefa ${i + 1}`)
);

setTimeout(async () => {
  console.log("Executando 10 tarefas com limite de 3 simultâneas...");
  console.time("Concorrência limitada");

  const resultados = await executarComLimite(tarefas, 3);

  console.timeEnd("Concorrência limitada");
  console.log("Resultados:", resultados);
}, 12000);

// =====================================================
// EXERCÍCIO 8 - APLICAÇÃO REAL
// ENUNCIADO:
// Implemente um cliente de API robusto com retry e cache.
// a) Crie uma classe que faz fetch com retry e cache
// b) Demonstre uso prático
// Explique cada passo com comentários.
// =====================================================

console.log("\n=== EXERCÍCIO 8: Cliente de API ===");

// a) Classe APIClient com retry e cache
// ...existing code...

// b) Usar cliente
// ...existing code...
