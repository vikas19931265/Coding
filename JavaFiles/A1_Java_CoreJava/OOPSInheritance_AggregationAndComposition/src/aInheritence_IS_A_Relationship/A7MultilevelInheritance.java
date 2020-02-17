/*

Multilevel Inheritance
=========================

When a class extends a class, which extends anther class then this is called multilevel inheritance.
For example class C extends class B and class B extends class A then this type of inheritance is 
known as multilevel inheritance.


                class A
                  |
               class B extends A
                   |
             class C extends B



*/
package aInheritence_IS_A_Relationship;


class Animal1
{
    public void eat()
    {
        System.out.println("Eating");
    }
}


class Dog1 extends Animal1
{
    public void bark()
    {
        System.out.println("Barking");
    }
}

class BabyDog extends Dog1
{
    public void weep()
    {
        System.out.println("Weeping");
    }

    public static void main(String[] args)
    {
        BabyDog d1 = new BabyDog();
        d1.eat();  
        d1.bark();
        d1.weep();
    
        /*
        
        In this example BabyDog directly extends from Dog1. But since Dog1 extends
        from Animal 1hence BabyDog also extends Animal class indirectly.
        
        */
    
    
    }


}

/*
Eating
Barking
Weeping
BUILD SUCCESSFUL (total time: 0 seconds)

*/