# Agenda de Churras

Este projeto utiliza o [NextJS](https://nextjs.org/) com [React](https://react.dev/), testes unitários com [Jest](https://jestjs.io/pt-BR/) e [Cypress](https://www.cypress.io/) para testes end-to-end.

## Pré-requisitos

- Node.js (v18.12.1)
- Yarn

## Configuração inicial

1. Clone o repositório;

2. Navegue até o diretório do projeto;

3. Instale as dependências:

`yarn`

## Estrutura do projeto

- `public`: Contém as imagens do projeto.

- `src/__mocks__`: Contém um arquivo de mock de dados para carregar informações pré-configuradas para o projeto.
- `src/components`: Contém os componentes genéricos da aplicação, incluindo estilização e testes unitários (em alguns casos).
- `src/ducks`: Contém os Slices para manipulação da árvore de estado da aplicação com o [Redux](https://redux.js.org/).
- `src/features`: Contém as feature folders, pastas para os módulos/páginas do sistema que contemplam componentes exclusivos.
- `src/pages`: Por padrão, a pasta pages contém as páginas a serem renderizadas na aplicação de acordo com a arquitetura do Next.
- `src/store`: Contém as configurações de armazenamento, combinação de reducers e persistência da aplicação.
- `src/styles`: Contém a estilização padrão do projeto de acordo com o Next.
- `src/themes`: Contém o arquivo de tema do sistema;
- `src/utils`: Contém os arquivos de utils para auxiliar os componentes do sistema.

- `cypress/e2e`: Contém os arquivos de teste.
- `cypress/fixtures`: Utilizado para dados estáticos usados em testes.
- `cypress/plugins`: Permite adicionar plugins ao Cypress.
- `cypress/support`: Contém arquivos para comandos personalizados ou comportamentos sobrescritos.

## Executando os testes unitários

É necessário apenas executar o comando de testes

`yarn test`

## Executando os testes e2e

É necessário executar o projeto em localhost para que seja feito o teste e2e

`yarn dev`

### Modo interativo

Para executar os testes em um modo interativo, onde você pode ver os testes sendo executados em uma janela do navegador, use:

`yarn cypress:open`

Depois disso, o Cypress irá abrir uma janela. Clique no teste que deseja executar.

### Modo headless

Se você deseja executar os testes no modo headless (sem a interface gráfica):

`yarn cypress:run`

## Informações Adicionais

As informações de Login para teste são:

e-mail: trinca@email.com
senha: a1b2c3d4e5
