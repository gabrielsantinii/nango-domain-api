Feature: Criar um registro de instituição e salvá-lo no banco de dados.
Scenario: Os dados já são validados pelos middlewares, apenas deve armazená-los e retorná-los.

@Success:
- Deve salvar no banco de dados e retornar o id gerado