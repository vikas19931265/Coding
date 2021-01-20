/*

Case 2:

[note]

1. If parent class contains any argument constructor then while writing child classes
   We have to take special care with respect to constructors.

2. Whenever we are writing any argument constructor. It is highly recommended to 
   write no argument constructor also.



*/


package thisVssuperMixed;

 class Parent {
    
     Parent()
     {
         // highly recommended to write no argument constructor when we have defined a parameterised constructor in our class.
     }
     
     
     Parent(int i)
     {
         super(); // Here we have a parametrised constructor in the parent class.
     }
 
 
}


class Child7 extends Parent
{
    
    Child7()
    {
        super();
    }
    
    /*
    
    1. Here we are creating a child class .
    
    2. As soon as a child class is created child class default constructor will be created as well.
    
    3. Now the default constructor will be created as 
    
                Child2()
                {
                    super();
                }
    
    4. Here , super() constructor will be  calling the parent constructor.
    
    5. Here super is a no argument constructor calling the parent class no argument constructor.
    
    6. Since we dont have any no argument constructor in the parent class hence we will get the compile time error
    
        
            error;
                    class Child2 extends Parent
  required: int
  found: no arguments
  reason: actual and formal argument lists differ in length
1 error
    
    
    */
}


class p
{
    // valid
}

class c extends p
{
    

    c(){
        super(); // calling parent class no argument constructor.
    }

}




class d
{
    d()
    {
        super();
    }   
    
}


class e extends d
{
    // valid
    /*
        e()
    {
        super()// calling no argument parent constructor.
    }
    
    */


}

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------