package Programs;

/*
Conditional operator in java
=================================
*/

class ConditionalOperator
{
    public static void main(String[] args)
    {
        Integer a =10;
        int b=a;
        Integer c =null;
        int d = (a==10)?a.intValue():c.intValue(); // If the condition is not satisfied then we are going to get the null pointer exception.
        System.out.println(d);
    }
}

/*
run:
10
BUILD SUCCESSFUL (total time: 1 second)

*/