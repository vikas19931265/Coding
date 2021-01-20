//Program: ArrayList Constructors.

/*
1. There are a total of 3 constructors present in ArrayList.

2. Below program gives a demo on usage of all the constructors.

*/


package ArrayList;

import java.util.*;
 
class P1ArrayListConstructor {
    
    public static void main(String[] args)
    {
        
        //Constructor 1:(no parameter)
        ArrayList arrays= new ArrayList();// constructor 1 to create an ArrayList.
                                         // default size of this arrayList is 10      
        System.out.println(arrays);
        
        
        //Constructor 2:(specified size)
        
        ArrayList arrays1= new ArrayList(20);//Constructor with specified ArrayList size
                                             //This is useful when ArrayList size is going to be more   
        
        arrays1.add(10);
        
        System.out.println(arrays1);
        
    

        /*Constructor 3:(equivalent to another Collection object)
    
            ArrayList(Collection c)*/
        
        LinkedList m = new LinkedList();
        m.add(40);
        ArrayList arrays3= new ArrayList(m);//This constructor will create an equivalent ArrayList of
                                            //of the object which is passed as the parameter.    
                                    
        System.out.println(arrays3);    
    
}
 
}
