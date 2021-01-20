package cLocalVariables;

// Local Variable Modifier.

/*

1. The only modifier applicable to local variable is final.

2. If any other modifier is applied other than final, then we will get compile time error.

3. If we are not declaring an instance/static variable without any modifier then, by default it is default.

4. But the above rule is applicable only for instance/static variables but not for local variables.


[by Durga]

1. For Instance and static variables JVM will provide default values and we are not required to perform initialization explicitly.
2. But for local variables JVM will not provide default values, compulsory we should perform initialization explicitly before using variable.



*/


/*


class Test
{

    public int x=10;
    private int x=10;
    protected int x=10;
    static int x=10;
    transient int x=10;
    volatile int x=10;


ALL THESE DECLARATIONS WILL GIVE COMPILE TIME ERROR.


    final int x=10;  // Final is the only allowed modifier with local variable , hence it is valid.



}


*/
