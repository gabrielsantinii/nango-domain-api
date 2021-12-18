Feature: Retornar contagem de números em dias faltantes para finalização do semestre.
Scenario: Será dado a identificação da instituição

@Success
- Deve calcular a diferença de dias entre agora e a data de finalização do semestre configurada do semestre
- Deve retornar um numérico

@Exception
- A data da finalização do semestre sempre deve estar posterior a hoje, se não estiver deve lançar uma exceção.
