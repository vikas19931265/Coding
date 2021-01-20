package Assert;

/*

Conclusion number 2:
=====================================

assert (b):e

For the second argument we can take the method call but void return type method
call is not allowed. Otherwise we will get the compile time error.



If m1() method return type is void then, we will get the compile time error

CE: void type not allowed here assert(x>10) :m1

note
=========

Between two versions of assertions it is recommended to use augmented version because
it provides more information for the purpose of debugging.

*/

class Test
{
    public static void main(String[] args)
    {
        int  x =10;
        
        assert(x>10); m1();
        
        System.out.println(x);
        
    }

    
    public static int m1() //void return type not allowed here in assertion.
    {
        return 777;
    }
    
    
}

/*

RE: Assertion error: 777

*/
