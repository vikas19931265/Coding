
/*

Assertion Program demo


*/

package Assert;



class AssertFlowChecking
{
    public static void main(String[] args)
    {
        int i;
        
        for(i=1; i<=100;i++)
        {
            /*
            
            I want to check that after finishing up the for loop the value of
            i should be 101, if its not 101 then there is some error with the 
            program and i must get the assertion error.
            
            */
            
            
        }
                
    
        assert(i==100):"i value is not 101 ";
    
    
    }
}

/*
run:
Exception in thread "main" java.lang.AssertionError: i value is not 100 
	at Assert.AssertFlowChecking.main(B3AssertPgmDemo.java:33)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/