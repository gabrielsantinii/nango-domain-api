Feature: Retornar as atividades relacionadas a instituição pelo ID (institutionId).
Scenario: Será dado a identificação da instituição

@Success
- Deve retornar uma lista de atividades relacionadas
- Se a lista estiver vazia, retornar vazia sem exceção
