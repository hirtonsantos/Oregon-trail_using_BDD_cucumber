
class Traveler {
    constructor (name){
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    set nome(nome){
        this._name = nome
    }

    get nome(){
        return this._name
    }

    set food (food){
        this._food = food
    }

    get food(){
        return this._food
    }

    set isHealthy (isHealthy){
        this._isHealthy = isHealthy
    }

    get isHealthy (){
        return this._isHealthy
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if (this.food > 0){
            this.food -= 1
        }
        else if (this.food === 0){
            this.isHealthy = false
        }
    }
}

class Wagon {

    constructor (capacity){
        this._capacity = capacity
        this._passengers = []
    }

    set passengers (passengers){
        this._passengers = passengers
    }

    set capacity (capacity){
        this._capacity = capacity
    }

    get passengers(){
        return this._passengers
    }

    get capacity(){
        return this._capacity
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join (variavel){
        if (this.getAvailableSeatCount() <= this.capacity){
            if (this.getAvailableSeatCount() !== 0){
            this.passengers.push(variavel)
            }
        } 
    }

    shouldQuarantine () {
        let result = true
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false){
                result = true
            }
        }
        return result
    }

    totalFood () {
        let food = 0
        for (let i = 0; i < this.passengers.length; i++) {
            food = food + this.passengers[i].food
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