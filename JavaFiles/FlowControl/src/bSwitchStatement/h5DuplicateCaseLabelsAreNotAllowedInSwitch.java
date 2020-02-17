
/*

duplicate case labels are not allowed otherwise we will get the compile time error.
=======================================================================================


*/


class Example7
{
    
    public static void main(String[] args)
    {
        
        int x =10;
        
        switch(x)
        {
            
            
            case 97:
                
                    System.out.println(97);
                    break;
                    
            case 98:
                
                    System.out.println(98);
                    break;
            
            case 99:
                
                    System.out.println(99);
                    break;
                    
            case 'a': // invalid..this is like int x =a; a is of char type and promoted to int will
                      // result in value 97 and 97 case is already present hence this duplicate cannot exist.
                      // CE: duplicate case label.
                    System.out.println('a');
                    
                    
        }
    }
}

