/*

Final variable evaluation is performed at the compile time
======================================================================================


Every final variable will be replaced by the value at the compile time only. If all
the variables are final then there calculation will also be performed at the compile time
only.


If every argument is a final variable( compile time constant) then that operation should
be performed at compile time only.

*/


class Examples{
    
    
        
            public void example1()
        {
            
            final int a =10;
            
            int b =20;
            
            System.out.println(a);
            
            System.out.println(b);
       
//---------------After compilation these println lines will become like as below
       
           System.out.println(10); // a is final variable
           
           System.out.println(b); // b is normal variable whose  evaluation will be performed at the run time.
          
            
        }
//-----------------------------------------------------------------------------------------------------------
            
            
            

       public void example2()
       {
           final int a =10, b =20;
           
          int c=20;
           
           System.out.println(a+b); // after compilation  System.out.println(30);
           
           System.out.println(a+c)// after compilation     System.out.println(10+c);
           
           System.out.println(a<b);// after compilation  System.out.println(true);
           
           System.out.println(a<c);// after compilation   System.out.println(10<c);

//--------After compilation these println lines will become as below           


       System.out.println(30); // a and b are final variables hence there values got replaced at compile time
                               // and the operation was also performed at the compile time
                               
        
       System.out.println(10+c); // a is final variable whose value is replaced at compile time but  c is normal
                                 // variable hence its value will be evaluated at the run time and the operation
                                 // will also be performed at the run time.
       
       System.out.println(10<20);// a and b both are final variables hence there values will be replaced at the compile
                               // time only and operation will be performed at the compile time only. Hence (a<b)
                               // will return true. {System.out.println(true) at compile time.
       
       
       System.out.println(10<c); // a is final variable whose value is replaced at the compile time only and c is normal
                               // variable hence its value is evaluated at the run time. Also the calculation operation
                              // will also be performed at the run time only as one is normal variable and the other one 
                              // is final variable.
       
       
       }


}

