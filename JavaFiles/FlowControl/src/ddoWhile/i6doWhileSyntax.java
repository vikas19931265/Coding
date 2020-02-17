/*

Curly braces are optional and without curly braces we can take only one statement between
do and while which should not be a declarative statement.


*/

class dowile
{
    
    public void case1()
    {
        
        do
          System.out.println("Hello");
        while(true);  // this is valid program
    }    
    
    //--------------------------------
    
    
    public void case2()
    {
        do
            ; // we have take semicolon statement inside the do-while loop
        
        while(true); // this is also valid as we are taking one statement in body that
                    // is semicolon which is non declarative statement
        
    }

    //---------------------------------
    
    
    public void case3()
    {
        do
            int x=10; // this is invalid, as we cannot take declarative statement inside
                     // a do while loop which does not have braces.
        
        while(true);
    }
    
    //-------------------------
    
    
    public void case4()
    {
        do
        {
            int x =10; // we can take declarative statement inside a do-while loop which contains 
                       // braces 
        }
            
        while(true); // this is valid program 
                
    }
    
    //---------------------------
    
    
    public void case5()
    {
        do
            while(true); // this is invalid as we should have at some body( at least one statement)
                        // inside the do-while body
    }
    
}

