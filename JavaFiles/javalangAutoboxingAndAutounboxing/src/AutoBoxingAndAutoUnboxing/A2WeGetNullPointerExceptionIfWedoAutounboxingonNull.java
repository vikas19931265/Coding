//Example 2

package AutoBoxingAndAutoUnboxing;


class Test9
{
    static Integer I=0;

    public static void main(String[] args)
    {
        int m=I;

        System.out.println(m);  //0
    }
}


class Test10
{
    static Integer I;  // I default value is null

    public static void main(String[] args)
    {
        int m=I; // After compilation int m=I.intValue()....Here I is null, and on null calling any method will result
                // in null pointer exception



                System.out.println(m);
    }
}

/*

note
--------

On null reference if we are trying to perform autounboxing then we will get the Runtime exception
saying NullPointerException.


run:
Exception in thread "main" java.lang.NullPointerException
	at Programs.Test10.main(NewClass44.java:24)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/