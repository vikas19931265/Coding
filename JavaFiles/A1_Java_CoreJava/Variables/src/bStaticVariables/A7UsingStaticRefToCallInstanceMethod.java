package bStaticVariables;

/*

Using Static reference to call the instance method is possible.

*/
 class Sample
{
    static Testing t = new Testing(); // static Reference
}


class Testing
{
    int i;
    
    public void Check()  // instance method.
    {
        System.out.println("Checking");
    }
}


class Driver
{
    public static void main(String[] args)
    {
        Sample.t.Check();
    }
}

/*
run:
Checking
BUILD SUCCESSFUL (total time: 0 seconds)


*/
//-------------------------------------------------------------------------------*****************------------------------