/*

AssertionError
=====================================

It is the child class of the error and hence it is unchecked. If assert statement is
going to fail(that is the argument is false) then we will get the assertion error.



Even though it is legal to catch the assertion error but it is not a good programming
practice.

note

In the case of the web applications, if we run the java program in debug mode then
automatically the assert statement will be executed.


class Test
{
    public static void main(String[] args)
    {
        int x =10;
        
        
        try
        {
            assert(x>10)
            
        }
    
        
        catch(AssertionError e)
        {
            System.out.println("I stupid as i am catching assertion error");
        }
        
    
        System.out.println(x);
        
    }
}



*/
