Feature: Retornar instituição a partir do ID de referência.
Scenario: Será dado a identificação da instituição

@Sucesso
- Deve retornar os dados da instituição

@Exceção
- Se o ID não for encontrado, deve retornar uma exceção
