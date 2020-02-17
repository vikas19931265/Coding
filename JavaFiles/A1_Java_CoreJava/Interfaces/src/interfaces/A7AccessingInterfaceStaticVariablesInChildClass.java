package interfaces;

/*
static variables in Interface
======================================

static variables are also accessible to the implemented class. But note that in interfaces
all the variables are public static final by default and hence changing its value in the
child class is not allowed.

But we can declare a new variable with the same name if we dont want to use the variable
which is coming from the parent class.


*/

interface A1
{
    public static final int x =10;
}


 class B1 implements A1
{
    //static int x =20; This is legal.
 
    public static void main(String[] args)
    {
     //   x=20; this is invalid as error: cannot assign a value to final variable x
        
        System.out.println(x);
    }
}

/*
run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/