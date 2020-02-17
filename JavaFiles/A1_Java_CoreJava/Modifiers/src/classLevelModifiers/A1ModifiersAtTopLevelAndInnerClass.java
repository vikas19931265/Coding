/*

1. Whenever we are writing our own classes , we have to  provide some information about our class to the JVM.
like.

   a) Whether this class can be accessible from anywhere or not.

    b) Whether child class creation is possible or not.

    c) Whether Object creation is possible or not. etc.

    We can specify this information by using appropriate modifiers.

2. These are the modifiers in total which are available. (12 modifiers)

    public          final           native

    private         abstract        strictfpp

    default         static          transient

    protected        synchronized    volatile



3. Following are the modifiers which are applicable for the top level classes.(5 modifiers)

    public

    default

    final

    abstract

    strictfpp.


4. Following are the modifiers which are applicable for the inner classes. (8 modifiers)

    public

    default

    final

    abstract

    strictfpp.

    private

    protected

    static


5.  private class Test

            {
                public static void main(String[] args)

                {       System.out.println("hai");

                }

            }


         In this case we will get the compile time error as "modifier private not allowed here.
                    


*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------