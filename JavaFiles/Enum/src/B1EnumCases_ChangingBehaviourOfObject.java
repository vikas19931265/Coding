/*

Case 3:
=====================

enum Color
{
    BLUE,RED,GREEN;
    
    public void info()
    {
        System.out.println("Universal colors");
    }
}


public class Test
{
    public static void main(String[] args)
    {
        Color[] c =Color.values();
        
        for(Color c1:c)
        {
            c1.info();
        }
    }
}


we can change the behavior of object here. For RED object instead of displaying the
universal color we want to display the dangerous color.


notes
==========

enum Color
{
    BLUE,RED
            {
                
                public void info()
                {
                    System.out.println("Dangerour color");
                }
                
            },

Here in this line what we have done is create an anonymous class. So we have three objects
one is RED,BLUE and GREEN. we stored all the objects inside Color[] c. Now when we are are trying
to call the methods on these objects first on BLUE is called which prints normal "Universal color".

But when we are trying to call the same method on RED jvm will check to which class this object
belongs to . Here we have like Color r = new Color() where red reference is holding the object
with the color RED. Now since the object is belonging to the child class as the method is overridden
hence the child class info() method will be called which will print the "Dangerous color".



*/

enum Color
{
    BLUE,RED
            {
                
                public void info()
                {
                    System.out.println("Dangerour color");
                }
                
            },
    
    
            GREEN;
    
    public void info()
    {
        System.out.println("Universal colors");
    }
}


 class Test15
{
    public static void main(String[] args)
    {
        Color[] c =Color.values();
        
        for(Color c1:c)
        {
            c1.info();
        }
    }
}



/*
$javac Test.java
$java -Xmx128M -Xms16M Test
Universal colors
Dangerous color
Universal color
*/







