function Booklist ()
{
  this.nbrBook = 0, // marked as read
  this.nbrBookN = 0, // marked not read yet 
  this.RefTo="", // ref to next book 
  this.current="", // ref to current book
  this.refL="", // ref last book 
  this.array=[]

  this.add = function(book) {
      this.array.push(book);
      this.RefTo=book.Title;
      this.current=book.Title;  
      this.refL=book.Title, 
    this.nbrBook++;
    if (!book.read) {
      this.nbrBookN++;
    }
  };

  this.finishCurrentBook = function(book)
  {
    if (book.read) {
      book.nbrBookN--
    }
      book.Read=true

    
  }

}


function book (Title,Genre,Author,Read,Readdate)
{
    this.Title =Title
    this.Genre =Genre
    this.Author =Author
    this.Read =false
    this.Readdate = new Date()
}

