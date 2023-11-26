class Animals  {
    constructor(name)
    {
        this.name= name 
    }
eat() {
return `${this.name} is eating ...  ${this.food}`;
};

};

 class Cows extends Animals {
    constructor(name)
    {
super(name)
this.food = "grass";
    }
}


class Lions extends Animals {
        constructor(name){
super(name)
this.food = "l7am";
        }
}


const Animal = function (name) {
    this.name = name;
    };
    Animal.prototype.eat = function () {
        setTimeout(() => {
    console.log( `${this.name} is eating ...  ${this.food}`);
        },3000);
    };
    
    const Cow = function (name) {
    Animal.call(this,name);
    this.food = "grass";
    };
    Cow.prototype = Object.create(Animal.prototype);
    Cow.prototype.constructor = Cow;
    
    const Lion = function (name) {
    Animal.call(this,name);
    this.food = "l7am";
    };
    Lion.prototype = Object.create(Animal.prototype);
    Lion.prototype.constructor = Lion;


    