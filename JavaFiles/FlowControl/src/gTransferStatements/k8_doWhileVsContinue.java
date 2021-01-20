/*

do-while vs continue(dangerous combination)
--------------------------------------------

*/


class Teest
{
    public static void main(String[] args)
    {
        
        int x=0;
        
        do
        {
            x++;
            
            System.out.println(x);
            
            if(++x <5)
                
                continue;  // continue statement will take the control to while(++x<10) condition
                           // please note that control will not go to beginning of do( do{}) which is
                           //mostly misunderstood
            x++;
            
            System.out.println(x);
        
        
        } while(++x<10);
    
        
        
        
        
        }
}


/*
run:
1
4
6
8
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/
