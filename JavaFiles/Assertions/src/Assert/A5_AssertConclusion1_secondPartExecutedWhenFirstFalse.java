package Assert;

/*
Conclusion number 1:

assert(b):e

e will be executed if and only if first argument is false that is if the first argument
is true then the second argument will not be evaluated or executed.



*/

 class Testingss
{
    public static void main(String[] args)
    {
        int  x =10;
        
        assert(x==10):++x;
        
        /*
        
        Here ++x is not executed as (x==10) will be returned as true and not false.
        
        */
        
        System.out.println(x);
    }
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
10
*/
