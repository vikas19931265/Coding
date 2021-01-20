package Operators;

/*

equality operators( ==, !=)
---------------------------------

1. We can apply equality operators for any primitive type including the boolean type also


2. Whenever we are comparing small data type to bigger , smaller one is promoted to bigger.


3. We can apply equality operators for object s types also. 
    
        For object reference r1, r2 will return true if and only if both of the references 
        are pointing to the same object.( reference comparison or address comparison)



                    ------------
         r1---->    |   object |<-----r2 
                    -----------




4.*/
class Demo89 {
    

    public static void main(String[] args)
    {
        
        System.out.println(10==20); // false
    
        System.out.println('a'=='b');//false
        
        System.out.println('a'==97.0);// true
        
        System.out.println(false==false);// true
   
    
        //Exmaple 1
    
        Thread t1 = new Thread();
        
        Thread t2= new Thread();
        
        Thread t3=t1;
        
        System.out.println(t1==t2);// false
        
        System.out.println(t1==t3);// true--> both references are pointing to the same object.
    
    
    
    
    
    }


}

