/*

Selection statements
------------------------

if-else
---------------

    syntax
    ---------

    if(b)----> b should be boolean type
    {

        Action if b is true
    }

    else
     {
        Action if b is false

    }  
        
  
The argument to the if statment should be of boolean type. By mistake if we are trying to
provide any other type then we will get compile time error.


*/

class Example
{
    
    public static void main(String[] args)
    {
       
//case 1
        
        int x = 0;
        
        if(x) // invalid CCE: incompatible types , found int , required boolean
        {
            System.out.println("hello");
        }
        
        
        else
        {
            System.out.println("HI");
        }
    
      
//case 2  
      
         
        int x1 = 10;
        
        if(x1=20) // invalid CCE: incompatible types , found int , required boolean
        {
            System.out.println("hello");
        }
        
        
        else
        {
            System.out.println("HI");
        }
    
    
// case 3
     
       int x11 = 10;
        
        if(x11==20)// this is valid
        {
            System.out.println("hello");
        }
        
        
        else
        {
            System.out.println("HI"); //op Hi
        }
    
    
//case 4:
        
            boolean b =true;
            
            if(b==false)
            {
                System.out.println("Hello");
            }
    
            else
            {
                System.out.println("Hi"); // op Hi
            }
    
    
// case 5:
       
            boolean b1 =false;
            
            if(b==false)
            {
                System.out.println("Hello");
            }
    
            else
            {
                System.out.println("Hi"); //op Hello
            }
    
    
    }
}
