/*

assert program to check the flow of control
==============================================

Assert program is the best choice where we dont want our program control to reach.

 */
package Assert;

class assertChoice {

    public static void main(String[] args) 
    
    {
        for (int i = 1; i <= 100; i++) {

            assert (false): "Assertion Error at i value" + i; //Here we want to raise an Assertion error when value of i is more then 90.

            System.out.println(i);
        }
    }
}


/*
run:
Exception in thread "main" java.lang.AssertionError: Assertion Error at i value1
	at Assert.assertChoice.main(NewClass.java:18)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/