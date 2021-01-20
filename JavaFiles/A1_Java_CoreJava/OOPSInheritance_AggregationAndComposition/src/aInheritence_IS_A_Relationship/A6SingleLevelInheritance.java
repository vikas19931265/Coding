/*

Single Level Inheritance
============================

When one class extends from exactly one class. Then such type of inheritance is
knows as Single level inheritance.

                        class A
                           |
                       class B extends A


*/
package aInheritence_IS_A_Relationship;


class Animal
{
    public void eat()
    {
        System.out.println("Eating");
    }
}


class Dog extends Animal
{
    public void bark()
    {
        System.out.println("Barking");
    }

    public static void main(String[] args)
    {
        Dog d = new Dog();
        
        d.eat();
        
        d.bark();

    }


}

/*
run:
Eating
Barking
BUILD SUCCESSFUL (total time: 0 seconds)

*/