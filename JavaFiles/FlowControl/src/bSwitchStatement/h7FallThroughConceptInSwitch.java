/*

Fall through inside the switch
-----------------------------------


1.within the switch() if any case is matched , from that case onwards all statements will
  be executed until break or end of the switch. This is called fall through inside the switch.


2. The main advantage of flow through inside the switch is that we can define common action
   for multiple cases( code reusability)

*/


/*

In this program if the month is 1 or 2 or 3 we are going to print quarter 4

and if the month is 4, 5 , 6 then we are going to print quarter 1.

This is fall through inside the switch approach.

Here if the case 1 is matched then control will fall to see where is the last break or
end of the loop here it falls to print System.out.println("Q-4"). Similarly, for the 
quarter 2 or quarter 3.

By this approach we have reduced the redundant code which in case of this concept
was not there we had to write for each and every case.

*/
class Examples
{
    
  
    public static void main(String[] args)
    {
          int x =1 ;
    
        switch(x)
        {
            case 1:
                
            case 2:
                
            case 3:
                
                    System.out.println("Q-4");
                    break;
            
            case 4:
                
            case 5:
                
            case 6:
                
                    System.out.println("Q-1");
                    break;
                    
                            
                            
           
            
            
            
        }
    }
}

/*

When int value is 1 or 2 or 3
run:
Q-4
BUILD SUCCESSFUL (total time: 0 seconds)

*/


