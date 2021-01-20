/*

else part and curly braces are optional. Without the curly braces only one statement
is allowed  which should not be declarative statement.

Semicolon is a valid java statement which is also known as empty statement

*/

class Exzmple3
{
   public static void main(String[] args)
   {
    

// Case 1:

    if(true)
    

    System.out.println("hello"); // hello

//--------------------------------------------------------------------------------------------------------
    
 //Case 2: if(true) ;// valid 
   
 
//----------------------------------------------------------------------------------------------------------

  
 //Case 3:
 
 
     if(true)
     
         int x =10; // invalid, declaration statement is not allowed in if statement
                   // without the curly braces. The reason is because if it would have
                   // been allowed then its scope would have been limited to only one line
                   // which cant be accessed from outside and has no use  in if statement
                   // hence its use is prevented by compiler and we will get compile time error here
 
  
  //Case 4:
  
  
        if(true)
        {
            int x=10; // This is valid. We can write declaration statement inside
        }             // if statement containing braces.  
   
   
   
   }
    
}
