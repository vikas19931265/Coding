package GenericClass;

/*

Generics concept applicable only at Compile time(proof)
=================================================================

*/

import java.util.*;


class Test97
{
    /*
    
    public void m1(ArrayList<String> l )
    {
        
    }
    
    public void m1(ArrayList<Integer> l)

    Compile Error: both methods have same signature
    
 Steps of Checking:
    
        Compile code normally by considering generic syntax( code compiled fine)
    
        Remove Generic Syntax( Removed Generic Syntax and ready to recomile)
    
        Compile once again resultant code( now ArrayList<String> becomes ArrayList , this 
        will make the signature of both the methods in the class as same hence we will get the 
        compile time error)
    
    */



}


class Testing
{
    
    
        
        public void m1(ArrayList<String> t)
        {
            
            
        }
        
       public void m1(ArrayList<Integer> t1)
       {
           
       }
    
}

/*

Here Generic checking is done at the compile time, ArrayList<Integer> and ArrayList<String>
at then end of compilation will become ArrayList<> ane hence method signature will become 
same and finally we will get the compile time error.


/*
 error: name clash: m1(ArrayList<Integer>) and m1(ArrayList<String>) have the same erasure
       public void m1(ArrayList<Integer> t1)
Note: Some input files use unchecked or unsafe operations.

*/