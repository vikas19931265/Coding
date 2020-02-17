// AUTOMATIC PROMOTION OVERLOADING CASE 3                                                                                                                     



package bMethodOverloading;


 class AutomaticPromotionOverloading_CASE3 {
    
    public static void main( String[] args)
    {
        
        Test3 t= new Test3();
        t.m1(10, 10.5f); // this is valid as exact signature is available in the called method of test class.
        t.m1(10.5f,10); // this is also valid as the exact signature is available in the called method of test class.
        //t.m1(10, 10); // this is illegal
        
        /*
          1. this is an interesting scenarios as if we see first parameter 10 is int and next 10 is  also int.
          2. int is available and the next parameter of type int will be converted to float and this combination is available in the called method.
          3. However if we read the parameters from right to left , this is also valid and satisfies another method available in the calling method.
          4. Hence this lead to ambiguity and will cause a compile time error
        
        Error:  reference to m1() is ambiguous.
        
        
        
        //t.m1(10.5f,10.5f)
        
        1. In this case first parameter which is float is available in the called method.
        2. However the next parameter which is float is not available and no higher data type is also available.
        3. Hence this will lead to the compile time error as
        
        Error: cannot find symbol m1( float, float) location class test.
        
        
        
        */
        
   }

}


      

class Test3
{
    public void m1( int i, float f)
    {
        System.out.println("int- float version");
    }


    public void m1( float f, int i)
    {
        System.out.println("float- int version ");
        
   }


    
} 


//-----------------------------------------------------------------------------*********-------------------------------------------------------------