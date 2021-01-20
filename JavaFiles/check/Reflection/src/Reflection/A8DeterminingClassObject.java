package Reflection;

/*

Determining the class object
=================================================================================

Following methods of Class class is used to determine the class object:

1) public boolean isInterface():

        determines if the specified Class object represents an interface type.

2) public boolean isArray():

        determines if this Class object represents an array class.

3) public boolean isPrimitive():

        determines if the specified Class object represents a primitive type.
Let's see the simple example of reflection api to determine the object type.


*/

 class Driver
{
    public static void main(String[] args)
    
     {    
        Integer x =10;
        
        Integer[] y={1,2,3};
        
        Class a= int.class; // we can call .class only on Classes/interfaces and primitives not on objects.
        
        if(a.isPrimitive())
        {
            System.out.println("Primitive");
        }
    
        
    
     }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Primitive

*/