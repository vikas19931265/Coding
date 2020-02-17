/*// Scope of Local Variables.

    Local variables can only be accessed inside the method or block or loop 
   in which a variable is declared.
*/



package cLocalVariables;


class Test2 {
    
    
    public static void main( String[] args)
    {
        int i=0;
        
        for ( int j=0; j<=3;j++)
        {
            i=i+j;
        }
   
        /*
        
        System.out.println(i+""+j);
        
        This will throw an error as variable j is out of out of scope and it can
        be accessed only inside the block where it is declared that is in the for
        loop in this case.
        
        */
    }
    




}
