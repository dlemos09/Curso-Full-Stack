# Hotel Lux - Projeto React

Aplicacao front-end de estudo desenvolvida com React e Vite para praticar componentes, hooks, roteamento e estilizacao com CSS.

## Visao Geral

O projeto simula o site institucional de um hotel e possui duas paginas principais:

- Home com secoes Sobre, Quartos e Suporte
- Pagina de Reserva com formulario controlado

## Funcionalidades

- Navbar fixa com alteracao visual ao scroll
- Navegacao por ancora nas secoes da home
- Roteamento com React Router
- Cards de servicos do hotel
- Formulario de reserva controlado por estado
- Layout responsivo para desktop e mobile

## Tecnologias

- React 19
- Vite 8
- React Router DOM 7
- React Icons
- CSS puro

## Estrutura de Pastas

```text
hotel-react/
  src/
    components/
      Navbar.jsx
      Hero.jsx
      Cards.jsx
      Footer.jsx
    pages/
      Reserve.jsx
    styles/
      global.css
      home.css
      navbar.css
      hero.css
      cards.css
      footer.css
      reserve.css
    App.jsx
    main.jsx
  public/
  package.json
```

## Rotas

- `/` -> Home
- `/reserve` -> Pagina de reserva

## Como Executar

### Pre-requisitos

- Node.js 18+ (recomendado)
- npm

### Instalacao

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build de Producao

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Pontos de Estudo

- Uso de `useState` e `useEffect`
- Componentizacao de interface
- Organizacao por `components`, `pages` e `styles`
- Navegacao com `BrowserRouter`, `Routes` e `Route`
- Formularios controlados no React

## Melhorias Sugeridas

- Validacao de datas no formulario de reserva
- Persistencia de reservas em API/back-end
- Mensagens de erro e sucesso mais detalhadas
- Testes de componentes com React Testing Library

## Licenca

Projeto educacional para estudo.
