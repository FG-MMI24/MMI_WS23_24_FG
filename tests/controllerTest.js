const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')
const apiGreeting = require('../public/js/auxiliaryAPI')


//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it('test below 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelsius(30)*10)/10).to.equal(-1.1)
    })
    it('test exactly 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelsius(32)*10)/10).to.equal(0.0)
    })
    it('test above 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelsius(34)*10)/10).to.equal(1.1)
    })
});

describe("celsiusToFahrenheit()", function(){
    it('test below 0', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-10)*10)/10).to.equal(14)
    })
    it('test exactly 0', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*10)/10).to.equal(32)
    })
    it('test above 0', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(10)*10)/10).to.equal(50,0)
    })
});

describe("getGreetingDependOnTime()", function(){
    it('test ab 06:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T08:30'))).to.match(/^Guten Morgen/)
    })
    it('test genau 06:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T06:00'))).to.match(/^Guten Morgen/)
    })
    it('test vor 06:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T04:00'))).to.match(/^Guten Abend/)
    })
    it('test nach 22:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T00:00'))).to.match(/^Guten Abend/)
    })
    it('test genau 22:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T22:00'))).to.match(/^Guten Abend/)
    })
    it('test vor 22:00', function(){
        expect(apiGreeting.getGreetingDependOnTime(new Date('2024-11-05T21:30'))).to.match(/^Guten Morgen/)
    })
});