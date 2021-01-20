/*

Swap by using third variable

*/
package BasicPrograms;


class Pgm6
{
    
    public static void main(String[] args)
    {
        int a =10;
        int b= 20;
        int temp;
        System.out.println("Before Sorting a value is " +a+"and b value is "+b);
        temp=b;
        b=a;
        a=temp;
        System.out.println("After Sorting a value is " +a+"and b value is "+b);
        
    }
    
}

/*
run:
Before Sorting a value is 10and b value is 20
After Sorting a value is 20and b value is 10
BUILD SUCCESSFUL (total time: 0 seconds)

*/