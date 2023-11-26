let Coffeeshop = function(name,menu)
{
    this.name = name ,
    this.items = [menu],
    this.orders = [],

    this.additems=function(menu)
    {
        this.items.push(menu)
    },
    
    this.addorder = function(name)
    {
        for (let i=0;i<this.items.length;i++)
            {
        if (name === this.items[i].name_of_the_item)
        {        
            this.orders.push(this.items[i].name_of_the_item)
            return("order added")
        
        }
            } console.log("This item is currently unavailable!")
    },

    this.fulfillFirstOrder = function(){
        console.log(this) // return the object parent
        var that = this // the solution !!!
         setTimeout( function()
    {
        console.log(this) // return the window object
        if (that.orders.length)
        {
          console.log(`the ${that.orders[0]} is ready`)
          that.orders.splice(0,1)  
        }
        else 
        console.log ("All orders have been fulfilled!")
    }, "5000")};

    this.fulfillAllOrders = function ()
    {
        if (!that.orders.length)
        {
        for (i=0;i<this.orders.length)
        {
        console.log(`the order number ${i} is ${this.orders[i]} is not ready`)
        }
        }
    }
    this.listOrders= function()
    {

    }
    this.dueAmount = function ()
    {
        var priced=0
        for (i=0;i<this.orders.length;i++){
        priced = priced + this.orders[i].price
        }return priced
    }

    


}

function menu (name_of_the_item,type,price)
{
    return {
    name_of_the_item : name_of_the_item ,
    type : type ,
    price : price ,
    } ;
    
}

