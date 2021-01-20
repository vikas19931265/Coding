/*
object get(int index)

        It is used to return the object stored at the specified index within the 
        invoking collection.
*/


package a2_ListInterface_Methods;

import java.util.*;

 class C_get {
    
     public static void main(String[] args)
     {
         ArrayList a = new ArrayList();
         a.add("vikas");
         a.add("sachin");
         a.add("dravid");
         
     
         System.out.println(a.get(0));
     
     
         
         ArrayList b = new ArrayList();
         b.add(new Student());
         b.add(new Student());
         
         System.out.println(b);// Storing Student objects inside the ArrayList.
         
         
        System.out.println ( ( (Student)b.get(0) ).displayName() ); // Typecasting the "Object" return type to "Student type"
     
        /*
        
        1. Here we are typecasting Object return value obtained from get() method of List into
           Student type.
        
        2. Please note that for the user defined class toString method by default is not overridden
           Hence when we will be trying to print the value of the reference then Object class toString
           method will be called and we will be getting the hashcode.
        
        3. However in the case of String and Wrapper classes this method is already overridden hence when
           we are trying to print the value of the reference we get the actual content value held inside the object.
        
        
        
        */
     
     
     
     
     } 

 }


class Student
{
    String name="vikas";


    public String displayName()
    {
        System.out.println(name);
    
        return null ;
        
    }

}

/*
run:
vikas
[ListInterface_Methods.Student@6bc7c054, ListInterface_Methods.Student@232204a1]
vikas
null
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//---------------------------------------------------------------------******************-------------------------------------------------------------------------------------