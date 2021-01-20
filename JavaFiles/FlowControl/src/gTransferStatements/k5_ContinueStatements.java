/*

Continue statement
----------------------
/*

1. We can use continue inside the loops to skip the current iteration and continue
   for the next iteration.


2. We can use continue statement only inside the loops. If we are trying to use it
   anywhere else then immediately we will get compile time error saying 

    Continue outside of loop.

    Example

        class Test
        {

            public static void main(String[] args

            {
                int x=10;
                
                if(x==10)
                    continue;

                System.out.println("Hello");
            }   
        }

        We are trying to use continue statement inside the method here , which is invalid.

CE: continue outside of loop.



*/


class Contd
{
    
    public static void main(String[] args)
    {
        
        for(int i=0 ;i<10;i++)
        {
            
            if(i%2==0)
            {
                continue;
            }
        
            System.out.println(i);
        
        
        }
    }
}


/*
run:
1
3
5
7
9
BUILD SUCCESSFUL (total time: 0 seconds)

*/
