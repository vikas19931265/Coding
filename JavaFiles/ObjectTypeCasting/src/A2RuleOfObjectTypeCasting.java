/*

1. We can use parent reference to hold child Object.

        example
            
            Object o= new String("durga");

 2. We can use interface reference to hold implemented class object.

        example

            Runnable r= new Thread();


Syntax of Type Casting

            A b= (C) d;

      A- class/interface Name
      b- Name of Reference Variable.
      C- class/Interface name
      d- Reference variable.



Only 3 Rules for Typecasting

Rule 1: Compile time checking.
----------------------------------
1. Type of 'd' and 'C' must have some relationship.

2. Either child to parent or parent to child or same types , otherwise we will get compile time error saying.
    
                incompatible types
                found : d type
                required: c

Rule 2 : Compile time checking 2
------------------------------
1. 'C' must be either same or derived type(child) of A , otherwise we will get 
    compile time error saying incompatible types found c, required A.




Rule 3: Run Time checking
-------------------------

Run time object type of 'd' must be either same or derived type of c , otherwise we will get run time exception

saying classcastException.


 
WE  CAN TYPE CAST CHILD TO PARENT WITH NO ISSUES , BUT VICE VERSA MAY HAVE ISSUES.



*/


 class RuleOfObjectTypeCasting
{

    public static void main(String[] args)
    {

        //  example 1 Rule 1 : Compile Time Checking
        Object o = new String("durga");

        StringBuffer str = (StringBuffer) o; // Here StringBuffer ( StringBuffer) and Object (o of type object) have parent child relationship
        // hence (StringBuffer)o is valid at compile time but will have issues at run time.

        //----------------------------------------------------------------------------------------------------------------------------//
        


        //example 2 Rule 1: Compile Time error
        String s = new String("durga");

        // StringBuffer str= (StringBuffer)s; // This is incompatible types as StringBuffer and String has no relationship.
        //----------------------------------------------------------------------------------------------------------------------------//
        


        // example 1 Rule 2: Compile time checking.
        Object o1 = new String("Durga");

        StringBuffer str1 = (StringBuffer) o1; // This is valid as str is of type StringBuffer and (StringBuffer)o1 is also of same type.

        //---------------------------------------------------------------------------------------------------------------------------------//  
        


        // example 2 Rule 2 : Compile Time checking
        Object o3 = new String("Durga");

        //StringBuffer str2= (String)o3; // This will throw compile time error as String is not a child of StringBuffer 
        // Also String and StringBuffer are not same i.e  type casted object type not same as reference.
        //--------------------------------------------------------------------------------------------------------------------------------//
       
        


        // example 1: Rule 3 : Run time checking also polymorphism                                 
        Object o6 = new String("durga");

        StringBuffer str6 = (StringBuffer) o6; // here o6 at run time is of String type and we are trying to 
        // convert to StringBuffer, here string is not a child of StringBuffer and nor they are same
        // hence we will get run time error.

        /*
        
        Here at run time similar to concept of polymorphism overriding run time object is decided by JVM
        If we see here String is child of Object hence an Object reference of parent is storing a child object
        Hence at run time JVM decides the run time object which is of string type.
                                             
                                             
               error: ClassCastException:java.lang.String cannot be cast 
               to java.lang.StringBuffer.
        
        --------------------------------------------------------------------------------------------------------------------------------------
         */
        



        //example 2 : Rule 3: Run time checking by JVM.
        Object o7 = new String("durga");

        Object o10 = (String) o7;  // This is valid as run time object of String type is type casted to string only here.

    }

}


//--------------------------------------------------------------------------********--------------------------------------------------------------