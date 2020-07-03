/*

Return causes flow to go to caller of method
==================================================


*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;


class Test5
{
    public static void main(String[] args)
    {
        int i =10;
        
        if(i==10)
            
            return; // This will cause control to go to caller of main which is JVM hence
                    // lines written below this statement will not be executed.
        
        System.out.println("Hai");
    }
}

/*
run:

BUILD SUCCESSFUL (total time: 0 seconds)

*/