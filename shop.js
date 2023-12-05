const EventEmitter = require('node:events');

class DrinkShop extends EventEmitter {
    constructor(name, price=10) {
        super();
        this.name = name;
        this.price = price;
    }
    makeOrder(name, price) {
        this.name = name;
        this.price = price;
        this.emit('orderMade', name, price);
    }

    getOrder(){
        console.log(`${this.name} costs ${this.price}`);
    }
}

const drinkShop = new DrinkShop('coffee', 15);


//listener
drinkShop.on('orderMade', (name, price)=>{
    console.log(`order is ${name} and costs ${price}`)
});

drinkShop.makeOrder('tea',25);