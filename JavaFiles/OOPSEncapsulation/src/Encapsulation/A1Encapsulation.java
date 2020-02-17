package Encapsulation;



/*

What is Encapsulation in Java?
=============================================================================

Encapsulation is a principle of wrapping data (variables) and code together as a single unit. 
It is one of the four OOP concepts. The other three are Inheritance, Polymorphism, and Abstraction.
	
Learn Encapsulation with an Example.
==============================================================================

To understand what is encapsulation in detail consider the following bank account class 
with deposit and show balance methods.

The entire code can be thought of a capsule, and you can only communicate through the messages. 
Hence the name encapsulation. Here our data will be private in nature so that no one
can access it directly. If someone want to access this private data then it must be
done through the method calls( messaging ).


Technically in encapsulation, the variables or data of a class is hidden from any 
other class and can be accessed only through any member function of own class in which 
they are declared.

As in encapsulation, the data in a class is hidden from other classes, so it is also known 
as data-hiding.

Encapsulation can be achieved by: Declaring all the variables in the class as private 
and writing public methods in the class to set and get the values of variables.


Advantages of Encapsulation:
================================================================================

Data Hiding:

    The user will have no idea about the inner implementation of the class. It will not be visible to the user 
    that how the class is storing values in the variables. He only knows that we are 
    passing the values to a setter method and variables are getting initialized with that value.


Increased Flexibility: 

    We can make the variables of the class as read-only or write-only depending on our requirement. 
    If we wish to make the variables as read-only then we have to omit the setter methods like setName(), setAge() etc. 
    from the above program or if we wish to make the variables as write-only then we have to omit the get methods 
    like getName(), getAge() etc. from the above program.
    
    
Reusability:

    Encapsulation also improves the re-usability and easy to change with new requirements.

Testing code is easy: 

    Encapsulated code is easy to test for unit testing.




*/

 class Account
{
    
    private int accountNumber;
    private double accountBalance;
    
        /*
        
        We have declared our variables as private in nature so that no one from
        outside the class can access these variables directly. This will provide
        more security from the outside world. In order to access these variables
        the outside world has to go through the method which will provide more
        security as number of validations can be performed upon the data which
        will be passed.
        
        Also here the variables and the methods are wrapped together into one single
        unit which provides more flexibility.
        
        */
    
    public int getAccountNumber()
    {
        return accountNumber; //we need the above method in order to access the instance variable.
    }
    
    public double getAccountBalance()
    {
        return accountBalance;
    }
    
    public void deposit(double amount )
    {
        if(amount<100)
        {
            System.err.println("Invalid amount");
        }
    
        else
        {
            accountBalance=amount+accountBalance;
        }
    }
    
}


 class Hacker
{
    public static void main(String[] args)
    {
        Account a = new Account();
        a.deposit(200);
        System.out.println(a.getAccountBalance());
        
    }
}

/*
run:
200.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/
