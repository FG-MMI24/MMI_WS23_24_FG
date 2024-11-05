const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it('test below 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    })
    it
});