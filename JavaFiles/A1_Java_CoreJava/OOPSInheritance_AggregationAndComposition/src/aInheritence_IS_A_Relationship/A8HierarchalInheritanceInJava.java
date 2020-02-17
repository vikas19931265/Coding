package aInheritence_IS_A_Relationship;

/*

Hierarchical Inheritance Example
===============================

                        class A
                           | 
     ---------------------------------------------------------
     |                                                        |      
class C extends A                                       class B extends A


When more than one classes inherit a same class then this is called hierarchical inheritance.
For example class B, C extends the class A.

*/

class Animals
{
    public void eat()
    {
        System.out.println("Eating");
    }
}


class Dogs extends Animals
{
    public void bark()
    {
        System.out.println("barking");
    }
}

class Cats extends Animals
{
    public void meow()
    {
        System.out.println("Meowing");
    }
}

class TestInheritance
{
    public static void main(String[] args)
    {
        Cats  c = new Cats();
        
        c.eat();
        
        c.meow();
    }
}

/*
run:
Eating
Meowing
BUILD SUCCESSFUL (total time: 0 seconds)


*/