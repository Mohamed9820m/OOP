let Shiritori = function (words) {
    this.words = [words],
    this.game_over = false,
  
  this.play = function (word)
  {
    var x = this.words[this.words.length-1]
       // console.log(x[x.length-1]) // to cut the last caractere of a word into an array OR x.at(-1) !!!!!
        if (word[0]=== x[x.length-1] )
        {
            this.words.push(word)
            this.game_over = false
            return('ok')
        }
        this.game_over = true
        return ('game over')
    },

    this.wordss = function ()
    {
      for (i=0;i<this.words.length;i++)
      {
        console.log (`words number ${i+1} is ${this.words[i]}`)
      }
    }

    this.restart = function ()
    {
       while (this.game_over = true  && this.words.length)
       {
        this.words=[] 
        console.log('all is done')
       }
       this.game_over = false
    }
    

  } 
 
