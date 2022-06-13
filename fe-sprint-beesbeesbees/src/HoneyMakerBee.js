const Bee = require('./Bee');

class HoneyMakerBee extends Bee{
  // TODO..
  constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  
  makeHoney(){
    console.log(`${this.honeyPot} = this.honeyPot + 1`)
  }

  giveHoney(){ 
  this.honeyPot = this.honeyPot - 1;
    } 
  
}

let honeyB = new HoneyMakerBee();
// console.log(honeyB.__proto__.__proto__) //Grub {}
// console.log(honeyB.__proto__.__proto__.__proto__) //{}
// console.log(honeyB.__proto__.__proto__.__proto__.__proto__) //[Object: null prototype] {}
// console.log(HoneyMakerBee.__proto__);

// console.log(HoneyMakerBee.prototype.makeHoney);
// console.log(honeyB.makeHoney)

console.log(HoneyMakerBee.prototype === honeyB.__proto__)
console.log(HoneyMakerBee.prototype.makeHoney()) // 메소드에는 접근이 가능하나, 메소드의 변수를 가지지는 못함.
console.log(HoneyMakerBee.prototype.__proto__)
console.log(honeyB.__proto__)

module.exports = HoneyMakerBee;
