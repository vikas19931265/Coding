/*

If return statement is present in try, catch and finally then finally block return 
statement will be considered.


*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;



class Test7
{
    public static void main(String[] args)
    {
        System.out.println(m1());
    }

    public static  int m1()
    {
        try
        {
            System.out.println(10/0);
            
            return 666;
            
            
        }
    
        catch(ArithmeticException e)
        {
            return 777;
        }
    
    
        finally
        {
            return 888;  //finally block return statement overriddes try and catch block return statement
        }
    
    }
    

}

/*
run:
888
BUILD SUCCESSFUL (total time: 0 seconds)

*/