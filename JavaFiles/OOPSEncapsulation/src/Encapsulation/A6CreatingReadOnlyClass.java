/*

This is a read only class as there is no setter method to set the values of the instance
variables.


Similarly we can create a write only class having only setter method with no getter method.

*/
package Encapsulation;


class Account2
{
    private int balance=200;
    
    public int getBalance()
    {
        return this.balance;
    }
}

class Driver
{
    public static void main(String[] args)
    {
        Account2 ac= new Account2();
        System.out.println(ac.getBalance());
    }
}

/*
run:
200
BUILD SUCCESSFUL (total time: 0 seconds)

*/