Feature: Retornar quantidade de atividades totais e abertas para a instituição
Scenario: Será dado a identificação da instituição

@Sucess
- Deve retornar totalCount (Total) e finishedCount (Fechadas), respectivamente.
- Se não houverem atividades relacionadas a instituição, deve retornar os valores zerados.

@Exception
- O número de atividades fechadas não pode ser maior que o número de atividades totais.
