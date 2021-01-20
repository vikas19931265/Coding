/*

Every case label should be in the range of switch() argument type otherwise we will
get a compile time error.


*/

class Test
{
    public static void main(String[] args)
    {
    
        byte b=10;
        
        switch( b) //----> b is of byte type
        {
            
            case 10:
            
                System.out.println(10);
                
                break;
                
            case 100:
                
                System.out.println(100);
                    
       
            case 1000: // this is invalid, b is of byte type and b cannot take value of 1000
                       // CE : possible loss of precision, found int required byte
                
                System.out.println(1000);
                    
                    
        
        
        }
    
    
    }
}
/*
run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/
