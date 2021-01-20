/*

1. Until 1.4 version we cannot declare a method with variable number of arguments.

If there is a change in number of arguments compulsory we should go for new method.

It increases length of the code and reduces readability. To overcome this problem SUN 

introduced varargs methods in 1.5 version according to which we can declare a method which

can take variable number of arguments.

Such type of methods are called VarArgs methods.


2. We can declare a varArg method as follows
    
    int m1( int... x)

    We call this method by passing any number of int values including 0 number.

     m1().. m1(10)..m1(10,20)...m1(10,20,30)...m1(10,20,30,40)   



*/
package varArgsMethods;


 class Test
{
    
    public static void test( int... x)  // This is a vararg method.
    {
        System.out.println("Var args");
    }

        public static void main(String[] args)
        {
            test(10);   // using method directly as we are calling static method inside a static method or else we have to create an object.
            test(10,20);
            test(10,20,30);
            test();
        }
}

//--------------------------------------------------------------------------********--------------------------------------------------------------
