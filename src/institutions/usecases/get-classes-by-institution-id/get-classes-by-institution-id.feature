Feature: Retornar as classes relacionadas a instituição pelo ID (institutionId).
Scenario: Será dado a identificação da instituição

@Success
- Deve retornar uma lista de classes relacionadas
- Se não houverem classes, retornar uma lista vazia SEM exceção
