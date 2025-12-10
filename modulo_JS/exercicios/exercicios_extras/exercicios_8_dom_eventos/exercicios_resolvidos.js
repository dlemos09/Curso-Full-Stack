// Exercícios 8 - DOM e Eventos (Resoluções)
// Executar em ambiente browser
// 1. Seleção múltipla
// const paragrafos=document.querySelectorAll('p');paragrafos.forEach(p=>p.style.color='blue');
// 2. Criar elemento
// const ul=document.getElementById('lista');const li=document.createElement('li');li.textContent='Item novo';ul.appendChild(li);
// 3. Botão toggle
// const btn=document.getElementById('btn');btn.addEventListener('click',()=>{btn.textContent=btn.textContent==='Ligado'?'Desligado':'Ligado';});
// 4. Delegação
// ul.addEventListener('click',e=>{if(e.target.tagName==='LI'){console.log(e.target.textContent);}});
// 5. Classe dinâmica
// const campo=document.getElementById('campo');campo.addEventListener('input',()=>{campo.value.trim()===''?campo.classList.add('erro'):campo.classList.remove('erro');});
