////// 3 /////
function makeBooks(title, author, msrp, genre, nofp, desc) {
    return {
      title: title,
      author: author,
      msrp: msrp,
      genre: genre,
      nofp: nofp,
      desc: desc,
    };
  }
  var book1 = makeBooks(
    "Harry Poter and the Sorcerer's",
    'J.K.Rowling',
    '$24.99',
    'Fantasy',
    223,
    'discovers his magical heritage on his eleventh birthday'
  );
  var book2 = makeBooks(
    'Romeo and Juliet',
    'William Shakespeare',
    '20 TND',
    'Romance',
    156,
    'about two lovers'
  );
  
  ////// 4 //////
  function displayBook(book) {
    return book.title + ' ' + book.author + ' ' + book.genre + ' ' + book.msrp;
  }
  /// to read more easier for peopl :
  function displayBook(book) {
    return (
      'book title is : ' +
      book.title +
      ' ' +
      'and the author is :  ' +
      ' ' +
      book.author +
      ' ' +
      'and the genr of the book is ' +
      ' ' +
      book.genre +
      ' ' +
      'and the price' +
      ' ' +
      book.msrp
    );
  }
  ///// 5 ///////
  var Books = [book1, book2];
  ///// 6 ////
  function displayBookss(book) {
    var x = '';
    for (var i = 0; i < book.length; i++) {
      var a = i + 1;
      x += a + '.' + ' ' + displayBook(book[i]) + '/n';
    }
    return x;
  }
  
  ///// 7 ///////
  function searchBooks(qu, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].title.toLowerCase().includes(qu.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  ////// 8 ///
  function removeBook(book, name) {
    for (var i = 0; i < book.length; i++) {
      if (book[i].title === name) {
        book.splice(i, 1);
        return 'removed' + ' ' + name;
      }
    }
    return 'could not find' + ' ' + name;
  }



  function makeMovie(name, director, actor, place, duration, rating) {
    return {
      name: name,
      director: director,
      actor: actor,
      place: place,
      duration: duration,
      rating: rating,
    };
  }
  var movi1 = makeMovie('365 Dni', 'aymen', 'haythem', 'nabeul', 34, 20);
  var movi2 = makeMovie('falouja', 'sawsen', 'monji', 'gassrin', 60, 5);
  var movi3 = makeMovie('toxido', 'mohamed', 'jacki chan', 'japan', 45, 3);
  var movi4 = makeMovie('breaking bad', 'bryan cranston', 'america', 67, 10);
  
  ////// 4 /////
  function displayMovie(film) {
    return film.name + ' ' + film.director + ' ' + film.actor + ' ' + film.place;
  }
  /// 5 /////
  function displayCast(film) {
    return 'the actor is :' + ' ' + film.actor;
  }
  
  /// 6 ////
  var movies = [movi1, movi2, movi3, movi4];
  
  ///// 7 /////
  function displayMovies(film) {
    var x = '';
    for (var i = 0; i < film.length; i++) {
      var a = i + 1;
      x += a + '.' + ' ' + displayMovie(film[i]) + '/n';
    }
    return x;
  }
  ///// 8 /////
  
  function averageLengthh(array) {
    var total = 0;
    var count = 0;
  
    for (var i = 0; i < array.length; i++) {
      total = total + array[i].time;
      count++;
    }
  
    return total / count;
  }
  
  //// averag of rating
  
  function averageRating(array) {
    var total = 0;
    var count = 0;
  
    for (var i = 0; i < array.length; i++) {
      total = total + array[i].rating;
      count++;
    }
  
    return total / count;
  }
  
  ///// 9 //////
  function searchMovies(qu, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].director.toLowerCase().includes(qu.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  
  
  
  
  
  
  
  
  