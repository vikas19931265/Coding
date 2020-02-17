/*

Tightly encapsulated classes
================================

A class is said to be tightly encapsulated if and only if every variable of that 
class is declared as private whether the variable has getter and setter method or not
and whether these methods are declared as public or not these checking are not needed
to be performed.

*/

package Encapsulation;



class Accounts
{   
    private double balance; // This should be private.
    
    public double getBalance()
    {
        return balance;
    }
}