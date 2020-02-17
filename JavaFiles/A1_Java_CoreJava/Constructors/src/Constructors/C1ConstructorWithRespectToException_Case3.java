/*
 
1. If parent class constructor throws checked exception then child class constructor should
   show same checked exception or its parent, otherwise code will not compile.

2. In our below program super() constructor call is made from the child class constructor.
   hence child class constructor is the caller therefore if the parent class constructor
   was throwing some sort of exception then the child class constructor must handle that
   exception as it is the caller. The same rule is applicable to handling exceptions in
   Exception handling.


Case 3:

1. If the called method throws checked exception then caller is responsible to 
    handle that exception

    example

        m2() throws IOException
        {
        
        }

        m1(){

            try{}
            catch(IO Exception){}
        }


        or

        m1() throws IOException
        {
            m2();

        }


The same concept can also be applied to the constructors as well.


*/
package Constructors;

import java.io.IOException;


 class Parent2 {
    
     Parent2() throws IOException
     {
         
     }
     
     
 }


class Child5 extends Parent2{
    
   
    Child5() throws IOException, Exception
    {
        //try  we cannot write try block here as super() must be first line inside the constructor.
        
        super();
        
    /*
    1. Note the super() method here which is calling parent class constructor.
    
    2. Now a call to the parent class no args constructor will be made.
    
    3. But since parent class constructor is throwing a checked exception hence
       it is compulsory for the child class constructor to throw that particular exception at least.
        
    4. Here child class constructor can also throw parent class constructor. 
        
    5. Point to note is that this is opposite of what the rule says in overriding, wherein
       if a child method throws any checked exception then parent must throws the same
       exception or the parent of exception thrown.
        
    
     If we are not throwing exception in default constructor then we will get the 
        
        error
        
       unreported exception
        
        java.io.IOException
        
        in default constructor.
        
     */
    
    
    }


   public static void main(String[] args)
   {
       
   }
   
}

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------