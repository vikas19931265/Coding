
package Classes_Objects_OOPS_Enum;

class GeneratingNullPointerException
{
    public static void main(String[] args)
    {
        int a =null;
        System.out.println(null);
    }
}

/*
run:
Exception in thread "main" java.lang.RuntimeException: Uncompilable source code - incompatible types: <nulltype> cannot be converted to int
	at Classes_Objects_OOPS.GeneratingNullPointerException.main(A4NullPointerExceptionWhenUsingPrimitive.java:12)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/