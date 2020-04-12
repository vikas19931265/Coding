/* 
Class Inheritance
====================

The extends keyword is used in class declarations or class 
expressions to create a class which is a child of another class. 

The extends keyword can be used to subclass custom classes as 
well as built-in objects. 
class Father { 
} 

class Son extends Father { 
} 


 Inherit Built-in Object 
– Date 
– String 
– Array 

example

class myDate extends Date { 

 

} 
*/


class Father
{
     showFmoney()
     {
         return " this is father money";
     }
}

class Son extends Father{
    showSMoney()
    {
        return "this is son money";
    }
}

var s = new Son();
console.log(s.showFmoney()); // this is father money
console.log(s.showSMoney()); // this is son money

// here both father and son money is available by inheritance.