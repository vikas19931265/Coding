/*

Specialty of java Enum
================================

In old languages enum we can take only the constants. But in the case of java Enum
in addition to the constants we cant take methods constructors, normal variables etc.

Hence java enum is more powerful then old languages Enum.


Even inside the Java enum , we can declare main method and we can run enum class directly
from the command prompt.


note in addition to constants if we are taking any extra member like method then the 
list of constant should be in the first line and should end with semicolon.

example 1

    enum Fish
    {
        STAR,GUPPY; //Here the semicolon is mandatary
        public void m1()
        {
            
        }
    }

example 2----> this is invalid as no semicolon.
===============

enum Fish
{
    STAR,GUPPY  // invalid as there is no semicolon

    public void m1()
    {
        
    }
    
}


Exmaple 3:
==============

enum Fish
{
    public void m1()
    {
        
    }

    
    STAR,GUPPY; // this is invalid place to declare the enum constants.
    
}


example 4:
===============
This is also invalid as first line should contain constants , atleast semicolon

Inside enum if we are taking any extra member like a method , then compulsory the
first line should contain list of constants at least a semicolon.

invalid
enum Fish
{
    public void m1()
    {
        
    }
}

valid
enum Fish
{
    ; // we have taken semicolon so this is valid as semicolon is mandatary
    public void m1()
    {
        
    }
}

valid
enum Fish
{
    
    // An empty enum is also a valid java statement.
}


*/


 enum Fish
{
    STAR,GOLD,GUPPY;
    
    public static void main(String[] args)
    {
        System.out.println("ENUM MAIN METHOD");
    }

}

/*
$javac Fish.java
$java -Xmx128M -Xms16M Fish
ENUM MAIN METHOD
*/
