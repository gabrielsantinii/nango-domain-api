Feature: Criar autenticação para o usuário no Firebase com e-mail e senha.
Scenario: O e-mail deve ser recebido como propriedade, a senha deve ser gerada automaticamente.

@Success
- O usuário deve ser criado no Firebase Authentication.

@Exception
- Caso o e-mail não esteja preenchido deve retornar uma exceção.
- Caso o retorno do Firebase não seja de sucesso, deve retornar uma exceção. 