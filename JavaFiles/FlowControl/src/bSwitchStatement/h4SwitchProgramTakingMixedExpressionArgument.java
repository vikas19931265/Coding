/*

Switch program taking expression argument.
============================================

*/



public class Test1
{
    public static void main(String[] args)
    {
    
        byte b=1;
        //When the value of b is 1000
        switch( b+999 ) //----> b is of byte type...This means when the value of b is 11
                      // case with the value 11 will be executed. Also b+1= max(int, byte, int) is of
                      // int type hence case value can be 1000 and we will not get any compile time
                      // error but if it was byte we would have got the loss of precision error.
        {
            
            case 10:
            
                System.out.println(10);
                
                break;
                
            case 11:
                
                System.out.println(100);
                    
                break;
                
            case 1000: /* This was invalid if b would have been of byte type but here max(int(by default) 
                         , byte(b) , 999(int)) is int hence b at last becomes of int type and 1000 becomes 
                          a valid value hence this statement evaluates true */
                
                System.out.println("value"+ 1000);
                    
                break;    
        
        
        }
    
    
    }
}
/*
run:
value1000
BUILD SUCCESSFUL (total time: 0 seconds)

*/
