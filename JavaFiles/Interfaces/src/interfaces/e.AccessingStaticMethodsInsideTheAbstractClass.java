/*
1. As we know it is not possible to create an object of abstract class , but an abstract class can contain
   methods or variables which are not abstract in nature.

2. If we create a method/variable as static in abstract class then it is possible to access this method/variable from outside the class
    using class name.

*/

package interfaces;

abstract class Samples
{
    public static int x=10;
    public static void m1() // created abstract method which has nothing to do with the object
    {
        System.out.println("hai");
    }
}


class Drivers
{
    public static void main(String[] args)
    {
        Samples.m1(); // Accessing static method inside the abstract class 
        System.out.println(Samples.x);
    }
}

/*
run:
hai
10
BUILD SUCCESSFUL (total time: 1 second)


*/

//---------------------------------------------------------------------------------*******************--------------------------------------