/*


1. Both switch argument and the case labels can be expressions. But case label should be constant
   expression.


*/


public class Exmple3
{
    
    public static void main(String[] args)
    {
       
        int x =10;
        
        switch(x+1) // we can declare switch arguments as expression.
        {
            
            case 10:
                
                    System.out.println(10);//10
                     break;
        
        
            case 10+20+30: 
                
                    System.out.println(60); //60
        
        }
        
    }
}

