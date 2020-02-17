// Local Variables Initialization

/*

1. For local variables JVM does not provide default values , compulsory we should 
   perform initialization explicitly before using that variable.

2. But if we are not using the variable then it is not required to perform initialization however that hardly happens.

*/


package cLocalVariables;

class Test6
{
    
    public static void main( String[] args)
    {
        int x; // Before using the var , please initialize it.
        
        System.out.println("hai"); //this will compile fine as we are not initializing the local var but not using it as well.
    
       /*
            System.out.println(x);
        
            If we do this then we will get error as we are using the x variable but not initializing it.
        
        error: variable x might not have been initialized.
        
        */    
    }


}
