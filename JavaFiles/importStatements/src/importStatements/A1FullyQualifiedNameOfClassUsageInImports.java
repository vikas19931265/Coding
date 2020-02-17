
package importStatements;


class Test
{
    
    public static void main(String[] args)
    {
        /*
        
        ArrayList a = new ArrayList();
    
          ArrayList a = new ArrayList();
           symbol:   class ArrayList
          location: class Test
        
      We will get this error as ArrayList import is missing  
        
       
       This problem can be solved if we can use fully qualified name. 
        */


    java.util.ArrayList l = new java.util.ArrayList();
    
    /*
    
    The problem with usage of fully qualified name every time is that it increases the length of the code and 
    reduces readability.
    
    
    We can solve this problem by using import statements.
    
    Whenever we are writing import statement it is not required to use fully qualified name every time. We can use
    short name directly.
    
    like import java.util.ArrayList; If this import is done then we can use the short name directly.
    
    Hence import statement acts as the typing shortcut.
    
    
    */
    
    }


}

//-------------------------------------------------------------------------------------------******************---------------------------------------------