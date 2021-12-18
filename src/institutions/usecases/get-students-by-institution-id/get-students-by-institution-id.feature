Feature: Retornar os alunos relacionadas a instituição pelo ID (institutionId).
Scenario: Será dado a identificação da instituição

@Success
- Deve retornar uma lista de estudantes relacionados
- Se não houverem alunos, retornar uma lista vazia SEM exceção
