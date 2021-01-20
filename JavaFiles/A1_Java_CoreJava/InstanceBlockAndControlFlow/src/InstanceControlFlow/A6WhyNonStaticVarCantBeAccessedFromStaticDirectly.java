/*

Why non static variable cannot be referenced from a static context????
=====================================================================


Instance members are identified only after the object is created. If we try
to directly access the instance variable without creating the object then we will get
the error non-static variable cannot be referred from the static context.


*/


package InstanceControlFlow;

class Testing3
{
    
    int x=10;
    
    public static void main( String[] args)
    {
        /*
                System.out.println(x);
    
                error: non static variable cannot be referenced from a static context.         
                
       
       1. from static area we cannot access instance variable directly.
        
       2. This is because while executing static area, jvm may not identify instance members.
        
       3. In order to make JVM identify about the instance variables we need to create the objects
          and then access the variable.
        
       4. Read the instance control flow to understand this better. As instance members
          are identified only when objects are created we cannot directly access the instance variable.
        
      */
        Testing3 t= new Testing3();
        System.out.println(t.x);
        
        
        
        
                
    
    }
}

//--------------------------------------------------------------------------*******------------------------------------------