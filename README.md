# Nango

**Nango é a plataforma de ensino que acredita na evolução. A primitividade no aprendizado não precisa existir, pensamos que a tecnologia deve andar lado a lado com o modo de aprender.**

## Domain API

Este diretório se refere a API de domínio do app, projetada para ter domínio das regras de negócio da plataforma, a API tem responsabilidade de garantir a integridade dos dados. Os detalhes features e módulos da aplicação, ficam disponíveis no [repositório fonte.](https://github.com/gabrielsantinii/nango)

## Padrão de desenvolvimento

Os padrões de desenvolvimento predominantes no projeto são o BDD e TDD, descrevendo e implementando a regra de negócio como foco.

## Tecnologias utilizadas

- NodeJS;
- Typescript;
- Express (Framework);
- MongoDB (Banco de dados);
- Firebase (Auth).

## Estruturação das pastas

    .
    ├── src                                                                 # Raíz do projeto.
    ├   └──── institutions                                                  # Cada módulo tem uma pasta como essa.                     
    ├   ├       └── controllers                         
    ├   ├       ├    └───── mount-dashboard.controller.ts                   # Recebe uma "demanda" do client, acionar um caso de uso e retornar ao client.
    ├   ├       └── middlewares                         
    ├   ├       ├    └──── validate-institution-fields.middleware.ts        # Realiza qualquer tipo de interceptação de uma requisição. Ex: validações, autenticação, casos de usos intermediários etc.
    ├   ├       └── usecases
    ├   ├       ├    └── create-institution
    ├   ├       ├          └── create-institution.feature                   # Padrão de documentação do caso de uso, seguindo o padrão BDD
    ├   ├       ├          └── create-institution.interface.ts              # Criação de interface para permitir que implementações não necessitem especificamente de um usecase completo, mas sim de sua interface (inversão de dependência).
    ├   ├       ├          └── create-institution.spec.ts                   # Arquivo de testes, seguindo o padrão TDD
    ├   ├       ├          └── create-institution.ts                        # Implementação do caso de uso, de acordo as features e testes realizados.
    ├   ├       └── institutions.routes.config.ts                           # Configuração das rotas do módulo.
    ├   ├
    ├   └──── shared                                                        # Pasta compartilhada para todos os módulos, declarações genéricas e reutilizáveis.
    ├   ├       └── services                         
    ├   ├       ├    └───── mongoose.service.ts                             # Ex: Configuração do banco de dados é shared entre os módulos.
    ├   ├       └── factories                         
    ├   ├            └───── log-data.factory.ts                             # Factories para funções compartilhadas
    ├   └──── data
    ├          └── institutions                                             # Camada de infra para cada módulo
    ├               └───── daos
    ├               ├     └── institutions.dao.interface.ts                 # Inversão de dependência para o DAO.
    ├               ├     └── institutions.dao.ts                           # Data Access Objects - métodos de acesso ao banco de dados - implementação do dao.interface
    ├               └───── dtos
    ├               ├     └── create.institution.dto.ts                     # Data Transfer Objects - dados de comunicação entre infra e domínio.
    ├               └───── enums
    ├               ├     └── institution-category.enum.ts                  # Padronização de dados com Enums. - Muito recomendado para enum com mongoose.
    ├               └───── models
    ├                     └── institution.model.ts                          # Implantação do DTO no banco de dados.
    ├── server.ts                                                           # Configuração do servidor.
    └── app.ts                                                              # Configuração dos módulos e inicialização do App (Express).

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
