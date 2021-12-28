# Entrega: Oregon Trail com Sintaxe de Classe com testes usando BDD

```javascript
class Dog {
    constructor(name, breed, isGoodBoy) {
        this.name = name;
        this.breed = breed;
        this.isGoodBoy = isGoodBoy;
    }

   sit() {
       // sitting code here
   },
   fetch() {
       // fetching code here
   }
}
```

## Traveler

Um Traveler (viajante) tem algumas propriedades:  

- um name (nome) (string) que deve ser fornecido como parâmetro para o construtor. 
- uma quantidade de food (comida) (númerico) com valor inicial 1. 
- uma propriedade isHealthy (está saudável)(booleano) que indica se ele está doente com valor inicial true.  

**O principal objetivo do Traveler é racionar seus mantimentos através de caçadas e refeições para que ele não fique doente durante sua viagem**.

Para racionar seus mantimentos, o Traveler poderá:

- hunt(Caçar): Quando o Traveler sair para caçar, a quantidade de comida deve aumentar em 2.
- eat(Comer): Quando o Traveler tentar comer, caso a quantidade de comida for maior que 0, então o Traveler perde 1 comida, e continua saudável. Caso a quantidade for 0, então o Traveler não consegue comer e fica doente.
 1  
## Wagon
Uma `Wagon` (Carroça) também tem algumas propriedades:
- uma `capacity` (capacidade) (número), que deve ser fornecida como parâmetro para o construtor, determina a quantidade máxima de passageiros que cabe na carroça.
- uma lista de `passageiros` (array) que inicialmente está vazia.

**O pricipal objetivo do Cocheiro (Piloto da carroça) é monitorar os assentos e estado de saúde de todos os viajantes para que ele possa decidir seguir viagem ou manter a quarentena**.

Para monitorar seus assentos e seus viajantes, o cocheiro poderá:

- getAvailableSeatCount: Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passageiros a bordo no momento.

- join: Adicione um viajante à carroça se tiver espaço. Se a carroça já estiver cheia, não o adicione.

- shouldQuarantine: Retorna true se houver pelo menos uma pessoa não saudável na carroça. Retorna false se não houver.

- totalFood: Retorna o número total de comida de todos os ocupantes da carroça.