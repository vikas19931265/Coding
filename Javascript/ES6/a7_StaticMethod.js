/* 
static keyword
================
The static keyword is used to define a static method for a class. Static methods 
are called without creating object and cannot be called through a class instance 
(object). Static methods are often used to create utility functions for an 
application. 
Ex:-  
class Mobile { 
         constructor ( ) {     } 
         static disp ( ) { return “Static Method”; } 
} 
Mobile.disp( ) ; 

*/


class Calculator
{
   static  sqrt(num) // static function is related to class and not object and must be called by class name.
    {
        return (num*num);
    }
}

class ScientificCalculator extends Calculator
{
   
    show()
    {
        console.log(ScientificCalculator.sqrt(10)); // sqrt function is inherited from calculator class
    }
}


var s = new ScientificCalculator();
s.show();