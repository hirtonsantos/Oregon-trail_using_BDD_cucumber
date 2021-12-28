const { Given, When, Then } = require("@cucumber/cucumber")
const assert = require("assert")

const { viajante } = require("../../App")


/*  GIVEN  */

Given('um Traveler de nome {string}', function (string) {
    viajante.name = string
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    viajante.food = int
});

Given('ele sempre começa a viagem saudável.', function () {
    viajante.isHealthy = true;
});

/*  WHEN  */

When('o Travaler parar para comer {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        viajante.eat()
    }
});

When('o Travaler sair para caçar {int} vezes', function (int) {
    for (let i = 0; i < int; i++){
        viajante.hunt()
    }
});


/*  THEN  */

Then('o Travaler não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Travaler ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false)
});

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int)
});

