# language: pt

Funcionalidade: Traveler
    Como um Traveler
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável.

    Contexto: 
        Dado um Traveler de nome "João"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        # Given / Dado => Dado não é necessário por causa do cenário + contexto
        # When / Quando
        # Then / Então
        Quando o Travaler sair para caçar 1 vezes  
        Então a quantidade de refeições deve ser igual a 3

    Cenário: Comeu e seguiu saudável
        # Given / Dado => Dado não é necessário por causa do cenário + contexto
        # When / Quando
        # Then / Então
        Quando o Travaler parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Travaler não ficará doente
    
    Cenário: Comeu e ficou doente
        # Given / Dado => Dado não é necessário por causa do cenário + contexto
        # When / Quando
        # Then / Então
        Quando o Travaler parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Travaler ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        # Given / Dado => Dado não é necessário por causa do cenário + contexto
        # When / Quando
        # Then / Então
        Quando o Travaler sair para caçar 2 vezes 
        E o Travaler parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 3
        E o Travaler não ficará doente
