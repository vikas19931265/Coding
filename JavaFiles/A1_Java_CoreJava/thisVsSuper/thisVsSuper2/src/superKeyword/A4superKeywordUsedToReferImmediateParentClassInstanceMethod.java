package superKeyword;

/*

super is used to refer immediate parent class method.
=======================================================================

*/

class Animals
{
    void eat()
    {
        System.out.println("Eating");
    }
}


class Dogs extends Animals
{
    void eat()
    {
        System.out.println("Eating bread");
    }
    
    void bark()
    {
        System.out.println("Barking");
    }
    
    
    void work()
    {
        super.eat();
    
        bark();
        
    }
}


 class Driver1
{
    public static void main(String[] args)
    {
        new Dogs().work();
    }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Eating
Barking
*/