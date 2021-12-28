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

module.exports = Traveler;