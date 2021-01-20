/*

1. Interface reference or abstract class reference can hold child objects.

2. In other words we can say that Objects of Childs classes of interface and abstract 
   classes are also childrens of interface and abstract classes.

*/
package interfaces;

abstract class Check  // we can replace interface with abstract class also.
{
    public abstract void Check();
}

class Checking extends Check
{
    public void Check()
    {
        System.out.println("checking completed.");
    }

   public void newMethod()
   {
       System.out.println("I am new");
   }

}

class Driver
{
    public static void main(String[] args)
    {
        Check c = new Checking(); // important point-->c is interface which is pointing to implemented class Object here
        
       
        
        if(c instanceof Check) // c of type 'checking' class is also an instance of Check which
                               // is interface. This is true because parent reference can hold child objects.
                               // Or we can say that Parents objects are also childrens of Grandparent.
        {
            c.Check();
            System.out.println("true");
        }
    }
}

/*
o/p

run:
checking completed.
true
BUILD SUCCESSFUL (total time: 0 seconds)



*/