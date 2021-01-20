package superKeyword;

/*

super is used to refer immediate parent class reference variable.
=======================================================================

*/

class Animal
{
    String color="white";
}


class Dog extends Animal
{
    String color="black";
    
    public void printColor()
    {
        System.out.println(color);
        System.out.println(super.color);
    }
    
}


 class Driver
{
    public static void main(String[] args)
    {
        new Dog().printColor();
    }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
black
white
*/