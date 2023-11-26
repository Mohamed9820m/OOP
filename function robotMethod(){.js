function robotMethod(){
    var obj={}
    var robot;
    
    obj.sayHi=function(word){
     if (word === undefined)
     {
    var counter=0
            robot=setInterval(function(){
                console.log('Hello Freind '+counter++)
            },3000)
     }else {
         clearInterval(robot)
         console.log('tahnks') 
     }
      
    }
    
    return obj
}


function robotMethod(){
    var obj={}
    var robot;
    var counter=0

    obj.sayHi=function(word)
    {
     if (word === undefined)
     {
            robot=setInterval(function(){
                console.log('Hello Freind '+counter++)
            },1000)
     }
     else if (counter >=10) {
         console.log('nope i dont want to be your freind you are too late') 
         clearInterval(robot)
                  counter = 0 

     }else {
         console.log(counter)
         console.log ('Yey lets Be freinds')
        clearInterval(robot)
         counter = 0 

     }
      
    }
    
    return obj
}


