/* 
Super ( ) 
=====================

is used to initialize parent class constructor. If there is a constructor present in subclass, 
it needs to first call super() before using "this".

A constructor can use the super keyword to call the 
constructor of a parent class. 

Class Father { 
 constructor (money) { 
 this.Fmoney = money; 
 } 
} 

Class Son extends Father { 
 constructor (money){ 
 super(money);  
 } 
} 


*/

class X
{
    constructor(x,y,z) // if no arugment constuctor is called here..then since no such constructor is
                       // present therefore this one will be called implicitly by js.
    {
        console.log("i am x constructor");
    } 
    
    display()
     {
         return "X";
     }
}

class Y extends X{
    /* constructor()
    {
        // super()  ....this is done implicitly by the js compiler if  its default constructor.
    } */
     
    constructor()
    {
          // here we have written our own constructor..there js will expect to call super() after this
          // otherwise we will get compile time error.

        super()
    }
    display()
     {
         return super.display()  // calling parent class display method using super keyword.
     }
}

var y1 = new Y();
console.log(y1.display())

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\ES6> node a4_super.js
i am x constructor
X
*/