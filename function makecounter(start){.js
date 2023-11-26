function makecounter(start){
    var number = start ; 
    return {
           up : function count(){
           number = number + 1
           return number
               },

        down : function count(){
           number = number - 1
           return number
        }
    }
};


function makecounter(start){
    var number = start ; 
    return {
           up : function count(){
           number = number + 1
           return number
               },

        down : function count(){
           number = number - 1
           return number
        },
        reset : function count(){
            number = start ;
            console.log ('ok')
        }
    }
};


function makegame(number){
    var upperBound = number; 
    var n = Math.floor(Math.random() * (upperBound + 1)); 
    var numGuesses = 0; 
    
    return {
        hint : function() {
            console.log(n)
            var start = n+1 ;
            var end = n-1 ;
            var message = 'the number is between ' + start + ' and ' + end ;
            return message ;
        },
        guess: function(x) { 
            numGuesses++; 
            if (x < 0 || x > upperBound) {
                return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
            } else if (x === n) {
                var message = 'You guessed my number in ' + numGuesses + ' guesses!';
                n = Math.floor(Math.random() * (upperBound + 1));
                numGuesses = 0;
                return message;
            }
            return 'Nope! That wasn\'t it!';
        },
        giveup: function() {
            n = Math.floor(Math.random() * (upperBound + 1));
            numGuesses = 0;
            return 'The game was reset.';
        },
        numguesses: function() {
            return numGuesses;
        }
    };
}

function someeven (array)
    {
        for (i=0;i<array.length;i++)
            {
                if (array[i] % 2 === 0)
                {
                    return true 
                }
                
            } return false

    }

    function someodd (array)
    {
        for (i=0;i<array.length;i++)
            {
                if (array[i] % 2 !== 0)
                {
                    return true 
                }
                
            } return false

    }


    function someodd (array)
    {
        for (i=0;i<array.length;i++)
            {
                if (array[i] >= 0)
                {
                    return true 
                }
                
            } return false

    }

    function someeven (array,string)
    {
                  
        return string(array)        
    }

    someeven([-1,-2,-3],someodd)


    function len (str)
    {
        if (str.length>4)
        {
            return true 
        }else return false 
    }

    function test (str,func)
    {
        var array = str.split(' ')
        for (i=0;i<array.length;i++)
            {
        return func(array) 
            }
    }