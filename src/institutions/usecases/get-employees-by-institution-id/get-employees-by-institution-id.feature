Feature: Retornar os colaboradores relacionadas a instituição pelo ID (institutionId).
Scenario: Será dado a identificação da instituição

@Success
- Deve retornar uma lista de colaboradores relacionados

@Exception
- NUNCA deve ser retornada uma lista vazia. É obrigatório que pelo menos um colaborador esteja relacionado.