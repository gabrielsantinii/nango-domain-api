Feature: Retornar instituição a partir do ID de referência.
Scenario: Será dado a identificação da instituição

@Success
- Deve retornar os dados da instituição

@Exception
- Se o ID não for encontrado, deve retornar uma exceção
