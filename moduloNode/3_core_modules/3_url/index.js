// Importa o módulo 'url', que fornece utilitários para manipulação e análise de URLs.
const url = require('url')

// Define uma string de URL que será analisada. Neste exemplo, a URL aponta para uma página do site "meusite.com.br" com um parâmetro de busca 'produtos' com o valor 'cadeira'.
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

// Cria um objeto de URL a partir da string 'address' usando o construtor 'URL' do módulo 'url'.
// Isso permite acessar partes específicas da URL de forma estruturada.
const parsedUrl = new url.URL(address)

// Exibe o host da URL no console. O 'host' é a parte do endereço que inclui o domínio e a porta (se houver).
console.log(parsedUrl.host) // Saída: 'www.meusite.com.br'

// Exibe o 'pathname' da URL no console. O 'pathname' é o caminho após o domínio, aqui representando o diretório '/catalog'.
console.log(parsedUrl.pathname) // Saída: '/catalog'

// Exibe a parte de busca (query) da URL, que contém os parâmetros de busca. Neste caso, é '?produtos=cadeira'.
console.log(parsedUrl.search) // Saída: '?produtos=cadeira'

// Exibe o objeto 'searchParams', que contém todos os parâmetros de busca da URL em um formato estruturado.
console.log(parsedUrl.searchParams) // Saída: URLSearchParams { 'produtos' => 'cadeira' }

// Obtém e exibe o valor do parâmetro 'produtos' usando o método 'get' do 'searchParams'.
console.log(parsedUrl.searchParams.get('produtos')) // Saída: 'cadeira'
