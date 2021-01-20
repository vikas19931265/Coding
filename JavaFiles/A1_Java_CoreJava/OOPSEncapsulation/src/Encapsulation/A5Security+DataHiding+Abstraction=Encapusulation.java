/*

Encapsulation
=================

(Data hiding+ Abstraction)



*/
package Encapsulation;


class Accounts2 
{
  private  double balance; // Instance variable cant be accessed outside class as its private.
    
    public double getBalance()
    {
        return balance;
    }

    /*
        Method working on the instance variable is encapsulated inside the class only
    hence the implementation cannot be seen by someone from outside the class. In order
    to get access to the instance variable the user has to go through the method which
    will do the filtering before the control can reach to the instance variable.
    
    
    This leads to two things Security and Abstraction. Here variables have been secured
    by using private access modifier and method implementation is tightly encapsulated
    inside the class hence caller cannot see the implementation.
    
    A caller can just call the method without knowing what work the method is going to do.
    
    
    */



}