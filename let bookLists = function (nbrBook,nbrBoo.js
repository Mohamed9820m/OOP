let BookLists = function ()
{
    
    this.nbrBook=0 ,
    this.nbrBookN=0 ,
    this.refbookR={},
    this.refbookC={} ,
    this.refbookL={},
    this.array=[],
    this.add = function (book)
    {
        this.array.push(book)  
        this.refbookC = book

    },
    this.finishCurrentBook= function(book)
    {
        
        this.refbookC.Read=true 
        this.refbookL = this.refbookC
        this.refbookC = {} 
    }

}

let book = function (Title,Genre,Author,Read,Readdate)
{
    this.Title=Title,
    this.Genre=Genre,
    this.Author=Author,
    this.Read=false ,
    this.Readdate=Readdate
}