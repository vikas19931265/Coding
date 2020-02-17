

package LambdaExpressions;

interface Test
{
    public int addition(int a , int b);
}

class Implementation implements A1BasicLambdaExpression
{
 static  Test t= (int a , int b)->
            {
                return (a+b);
            };
   public static void main(String[] args)
   {
       System.out.println(t.addition(100, 100));
   }
}

/*
run:
200
BUILD SUCCESSFUL (total time: 0 seconds)
*/