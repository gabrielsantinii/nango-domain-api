Feature: Deve criar um usuário no banco de dados
Scenario: As credenciais do usuário já foram criadas, então além de receber dados cadastrais (nome, email..), receberá também o authId.

@Success:
- Deve criar o usuário e retornar os dados salvos, juntamente ao ID gerado.