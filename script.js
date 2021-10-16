
class Traveler {
    constructor (name){
        this.name = name
        this._food = 1
        this.isHealthy = true
    }

    hunt(){
        this._food += 2
    }

    eat(){
        if (this._food > 0){
            this._food -= 1
        }
        else if (this._food === 0){
            this.isHealthy = false
        }
    }
}

class Wagon {

    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }

    get passageiros(){
        return this.passengers
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join (variavel){
        if (this.getAvailableSeatCount() <= 10){
            this.passengers.push(variavel)
        } 
    }

    shouldQuarantine () {
        let result = true
        for (let i = 0; i < this.passageiros.length; i++) {
            if (this.passageiros[i].isHealthy === false){
                result = true
            }
        }
        return result
    }

    totalFood () {
        let food = 0
        for (let i = 0; i < this.passageiros.length; i++) {
            food = food + this.passageiros[i]._food
        }
        return food
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);