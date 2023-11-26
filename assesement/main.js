/*****************************  1  ***********************/
// Write a JavaScript program to check whether the last digit 
// of the three given positive integers is same.
// lastDigit(23, 2563, 1254823) => true
// lastDigit(293, 3568, 29) => false

function lastDigit(num1, num2, num3) {
  let n1 = String(num1);
  let n2 = String(num2);
  let n3 = String(num3);
      if ((n1[n1.length-1] === n2[n2.length-1]) && (n1[n1.length-1] === n3[n3.length-1]))
   {
       return true
   }return false
  }

/*****************************  2  ***********************/
// Using a for loop THEN a while loop THEN recursion
// Write a JavaScript function that will iterate from n to 0. For each iteration,
// it will check if the current number is odd or even, and display a message to the screen.
// iterateAndLog(3); =>
// Sample Output :
// "2 is even"
// "1 is odd"
// "0 is even"


  function reverseIterateAndLogWithFor(n) {
    for (i=n;i>=0;i--)
        {
            if (i%2===0)
            {
                console.log(`${i} is even`)
            }else console.log(`${i} is odd`)
        }
}


function reverseIterateAndLogWithFor(n) {
  let i = n ;
  while (i<0) {
          console.log(i)
          if (i%2===0)
          {
              console.log(i + 'is even')
          }
           else {
               console.log(i)
               
           }i--
      }
}


function reverseIterateAndLogRecursively(n) {
  if (n < 0)
  {
    return 0
  }
  if (i%2===0)
          {
              console.log(i + 'is even')
          }
           else {
               console.log(i + 'is odd')
               
           }
           reverseIterateAndLogRecursively(n-1) 
}

/*****************************  3  ***********************/

// write a Tv class that has the the following properties :
// channelNumber ==> the is number of the current channel on the screen defaults to 0
// and these methods :
// watch ==> takes no params and displays a message of the curent channel number
// changeChannel ==> take a channelNumber (number) and switches the channel to that number
// var myTv = Tv()
// myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
// myTv.watch() //=> "you are now watching channel #0"
// myTv.changeChannel(5) //=> "switched to channel #5"
// myTv.channelNumber //=> 5
// myTv.watch() //=> "you are now watching channel #5"
function Tv() {
// TODO: your code here
}


