/* 

Method Overriding 
======================

Same function name with different implementation. 

Parent  ---> show ( ) {return “Super Class”; } 
Child   ---> show ( ) {return “Sub Class”; } 

*/


class Father
{
    display()
    {
        return "i am father";
    }
}

class Son extends Father
{
    display()  // method inherited from father is overridden
    {
        return "I am son";
    }
}

var s1= new Son();
console.log(s1.display()); // i am son
