package Generics;

/*

Conclusion 1:

    Polymorphism( usage of parent reference to hold the child object) concept applicable 
    only for the base type , but not for the parameter type.



    ArrayList<String> l = new ArrayList<String>();
        |       |
  Base type   parameter type      
    



*/

import java.util.*;

class Test
{
    
    public static void main(String[] args)
    {
        ArrayList<String> l = new ArrayList<String>();
        
        List<String> l2 = new ArrayList<String>();// valid as parent reference(base type) can be used to hold the child object.
        
        Collection<String> l3= new ArrayList<String>();
        
    
        /*ArrayList<Object> l4= new ArrayList<String>; This is invalid as polymorphism concept is applicable only to the
                                                       // base types and not to the parameters
                                                       
                                                       
                                        
    
        Compile Error: incompatible type found ArrayList<String> required
                       ArrayList<Object>
        
        
        */                                             
                                                       
    }
    
}
//-----------------------------------------------------------------***************************-----------------------------------------------