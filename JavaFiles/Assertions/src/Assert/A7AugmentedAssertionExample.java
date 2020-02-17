/*


Assertion Example
======================


*/
package Assert;


class AssertionExample
{
   
    public static void main(String[] args)
    {
    
    int assertionValue=0; //Firslty we have set the value of assertionValue=0.
                          //after that we wrote lot of code
    
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    assertionValue=1;
    
    assert(assertionValue==0):"Flow has not reached"; 

        /*Now in this line we are checking if the value of assertionValue is 0
          or not, if its not 0 then we will display the text "Flow has not reached"*/
                
    
  

    }
}

/*
run:
Exception in thread "main" java.lang.AssertionError: Flow has not reached
	at Assert.AssertionExample.main(NewClass.java:21)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/