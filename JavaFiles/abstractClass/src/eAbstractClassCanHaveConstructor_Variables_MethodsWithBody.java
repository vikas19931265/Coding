/*Abstract class having constructor, data member, methods etc.
   
An abstract class can have data member, abstract method, method body, constructor and even 
    main() method */


abstract class Bikes
{
    String color; // instance variable inside class Bikes to tell color.
    
    String type; // instance variable inside class Bikes to tell type.
    
    abstract public void displayStatus(); // abstract method to display speed
    
    Bikes(String color ) // constructor in Bikes class. We can use this constructor to keep 
                         // common properties amongst various classes.
    {
        this.color=color;
        
        System.out.println("Bike manufacture started");
    }
}

class Hondaa extends Bikes
{
    Hondaa(String color, String type)
    {
        super(color);
        this.type=type;
    }
    
    public void displayStatus()
    {
        System.out.println("Bike is Ready to deliver");
    }


}


class Test
{
    public static void main(String[] args)
    {
        Bikes b = new Hondaa("Red","Funky");
        
        b.displayStatus();
        
    }
}

/*
run:
Bike manufacture started
Bike is Ready to deliver
BUILD SUCCESSFUL (total time: 0 seconds)



*/
