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

module.exports = Wagon;