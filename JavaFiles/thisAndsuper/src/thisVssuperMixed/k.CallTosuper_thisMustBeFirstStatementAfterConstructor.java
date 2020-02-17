
/*

1. we can take super() or this() only in first line of the constructor.

2. If we are trying to take anywhere else we will get compile time error.


*/

package thisVssuperMixed;


 class Test5 {
    
    Test5()
    {
        System.out.println("constructor");
        
        /*
        super(); // We cannot put super in the second line , it should be the first line.
    
        This is illegal.
        
        Compile error: call to super must be first statement in the constructor.
        
        
        */        
                
        }
 
 
 
 }

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------
