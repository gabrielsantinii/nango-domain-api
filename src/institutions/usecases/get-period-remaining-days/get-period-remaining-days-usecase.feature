Feature: Retornar contagem de números em dias faltantes para finalização do semestre.
Scenario: Será dado a identificação da instituição

@Sucesso
- Deve calcular a diferença de dias entre agora e a data de finalização do semestre configurada do semestre
- Deve retornar um numérico

@Exceção
- A data da finalização do semestre sempre deve estar posterior a hoje, se não estiver deve lançar uma exceção.
