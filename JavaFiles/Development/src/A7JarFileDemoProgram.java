/*


public class BhaskarColorFulCalc
{

    public static int add( int x, int y)
        {
            return x * y;
        }

    public static int multiply(int x, int y)
        {
            return 2*x*y;
        }
}

Analysis
===========

C:\> javac  BhaskarColorFulCalc.java
C:\> jar -cvf  bhaskar.jar  BhaskarColorfulCalc.class
    

class Client
{
    public static void main(String[] args)
    {
        System.out.println(BhaskarColorFulCalc.add(10,20));
        System.out.println(BhaskarColorFulCalc.multiply(10,20));
    }   
}

Analysis
===========

D:\Enum>javac -cp  c;\bhaskar.jar  Client.java (valid)
D:\Enum> java -cp .; c:\bhaskar.jar Client (valid)


Note
======

Whenever we are placing jar fine in the classpath compulsory we have to specify the name
of the jar file, just specifying the location is not enough.

*/
        














