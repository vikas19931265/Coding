
/*

Default in Switch()
===============================================================================

1. Within the switch() we can take the default case at most at once.

2, Default case will be executed if and only if there is no case matched.

3. Within the switch() we can write default anywhere , but it is recommended to 
   write it as the last case.


*/


class SwitchExamples
{
    
    public static void main(String[] args)
    {
        int x =0;
        
        switch(x)
        {
            default:
                
                System.out.println("def");
                
            case 0: 
                  
                System.out.println(0);
                break;
                
            case 1:
                
                System.out.println(1);
                
            case 2:
                
                System.out.println(2);
        }
    }
}

/*

when x is 0
---------------------

o/p-->0


when x is 1
----------------------

o/p----> 

1

2



when x is 2
-------------------------

o/p------->(match from 2 to break or end of switch don’t include default in that list)

2



when x is 3
----------------------

o/p---( match from default to break or end of switch)

def

0
*/
