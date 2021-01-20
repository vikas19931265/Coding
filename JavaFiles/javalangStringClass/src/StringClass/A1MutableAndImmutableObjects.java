package StringClass;

/*
	
java.lang.String class
=============================================================

In java, string objects are immutable. Immutable simply means unmodifiable or unchangeable.

Once string object is created its data or state can't be changed but a new string object is created.

Let's try to understand the immutability concept by the example given below:


Immutable and mutable objects: 

Case 1:


        String s = new String("Druga");

        s.concat("software");
        
        System.out.println(s);//Durga


Once we create a String object , we cannot perform any changes in the existing  object
If we are trying to perform any change in the existing object, then with those changes
a new object will be created. This non changeable behavior is nothing but immutability
of String.

                     ------
        s----------> |durga|
                     ------ 

                     --------------
                    | durgasoftware|  ----> eligible for garbage collection
                    ----------------

-----------------------------------------------------------------------------------

        StringBuffer sb= new StringBuffer("Durga");

        sb.append("software");

        System.out.println(sb); // Durgasoftware


Once we create StringBuffer object we can perform any change in the existing object.
This changeable behavior is nothing but mutability of StringBuffer object.


                     ------
        sb----------> |durga|
                     ------ 

                     --------------
        sb--------->| durgasoftware|  ----> update happened in the same object.
                    ----------------


Why String objects are immutable in nature??
==========================================================

This is because java uses the concept of String constant pool in which one 
objects is used by a number of references, now if we make a change in the object
then it will affect all the references hence String objects are immutable in nature.

*/



class TestingImmutableString
{
    
    public static void main(String[] args)
    {
        
        String s = "sachin";
        
        s.concat("Tendulkar");
        
        System.out.println(s); // This will print sachin only as the String objects are immutable in nature
                               // and its contents cannot be changed.
        
        
       // If we want we can reassign the reference variable s
       
       s= s.concat("Tendulkar"); // In this case s starts pointing to the object Tendulkar
                                 // but please note that content of the object is still not
                                 // modified.
                               
                               
        
    }
}


/*
run:
sachin
BUILD SUCCESSFUL (total time: 0 seconds)

*/