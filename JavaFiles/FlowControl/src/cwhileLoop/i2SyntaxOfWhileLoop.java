/*

syntax of while
---------------

while(b) ---------> b should be always of boolean type

{

    Action

}


The argument should be of boolean type. If we are trying to provide any other 
type then we will get the compile time error


Are these programs valid??
------------------------------------

while(1)

{
    System.out.println("Hello");

}

Compile Error: incompatible types, found : int , required :boolean



curly braces are optional and without the use of curly braces we can take only one statement
under while which should not be declarative statement.

*/
 class whiles {
    

     
    public void case1()
    {
         
  //case 1       
         
            while(true)
            {
                System.out.println("hello"); // this is valid program
            }
     
    }
         
 //case 2        
    public void case2()
    {
         
            while(true); // this is also valid
            
     }
    
 // case 3  
    
    public void case3()
    {
        while(true)
        {
            int x =10;  // this is also valid , as we can declare variable inside while 
                        // with the curly braces.
        }
     
    }
     
 //case 4 
    
   public void case4()
   {
       while(true)
           
           int x =10;  // this is invalid program as while with braces can contain only one 
                       // line and the line should not be a declarative statement.
 
 
 }
 
 }

