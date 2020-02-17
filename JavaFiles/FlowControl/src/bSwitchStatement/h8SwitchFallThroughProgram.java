
/*

Switch Fall Through Program
======================================


*/

class Example34
{
    static int x;
    
    public static void main(String[] args)
    {
        switch(x)
        {
            
            case 0:
                    System.out.println(0);
                    
            case 1: 
                    System.out.println(1);
                    break;
                    
            case 2: 
                    System.out.println(2);
                    
            default:
                
                    System.out.println("def");
                    
                            
        }
        
    }

}

/*

when x =0

0
1

when x =1

1

when x=2

2
def

when x=3

def


*/
