# Nango

**Nango é a plataforma de ensino que acredita na evolução. A primitividade no aprendizado não precisa existir, pensamos que a tecnologia deve andar lado a lado com o modo de aprender.**

## Search API

Este diretório se refere a API de consultas do app, projetada para o front-end construir as telas de acordo a regra de negócio. Os detalhes features e módulos da aplicação, ficam disponíveis no [repositório fonte.](https://github.com/gabrielsantinii/nango)


## Instalação

Para a instalação, certifique-se de que tem o NodeJS instalado.\
Basta rodar `yarn` na raíz do projeto que serão instaladas todas as dependências.

## Scripts de inicialização

### `yarn dev`

Inicia o app em sua versão de desenvolvimento. Utiliza do ts-node-dev para a não geração da pasta de build.\
Utilize [http://localhost:8080](http://localhost:8080) realizar as requisições localmente.

### `yarn test`

Executa todos os arquivos de testes, gerando um relatório (Coverage) de cobertura da aplicação.\
Utilize [http://localhost:8080](http://localhost: ) realizar as requisições localmente.

### `yarn start`

Gera o build de produção, na pasta `dist` que será criada na raíz do projeto com os arquivos transpilados de Typescript para Javascript.
