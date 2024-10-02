
const carro = {}

carro.nome = prompt('Digite o nome do carro: ');

while (!isNaN(carro.nome)) {
    carro.nome = prompt('Valor inválido, digite o nome do carro: ');
}

carro.cor = prompt('Digite a cor do carro: ');
carro.marca = prompt('Digite a marca do carro: ');
carro.ano = prompt('Digite o ano do carro: ');
carro.km = prompt('Digite a quilometragem do carro: ');

const divCarro = document.getElementById('dadosCarro');

divCarro.innerHTML = `
    <p><strong>Nome:</strong> ${carro.nome}</p>
    <p><strong>Cor:</strong> ${carro.cor}</p>
    <p><strong>Marca:</strong> ${carro.marca}</p>
    <p><strong>Ano:</strong> ${carro.ano}</p>
    <p><strong>Quilometragem:</strong> ${carro.km} km</p>
`;