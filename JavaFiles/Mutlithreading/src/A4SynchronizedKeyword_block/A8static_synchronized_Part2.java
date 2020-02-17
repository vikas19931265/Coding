package A4SynchronizedKeyword_block;

/*

1. While a thread is executing  static synchronized method , the remaining threads are not 
   allowed to execute any static synchronized method of that class simultaneously.

2. But remaining threads are allowed to execute the following methods simultaneously.

1: normal static methods ( static m3())

2: synchronized instance methods( synchronized m4())

3: normal instance methods   (m5())


    class X

{

        static synchronized m1(){}
        
        static synchronized m2(){}

        static m3(){}

        static m4(){}

        m5()

}




                                          
                                            ---------
                                            |        |
             -t2  m1()------------------->           |-------t1 ---class level lock(X object)  m1{  }                         
                                            |       
         (waiting)   --t3 m2()------------->         |
                                            |X OBJECT
            ---t4 m3()------------------->           |    
                                            |    
            ---t5 m4()------------------>            |    
                                            |
            ---t6 m5()------------------->  ---------|
                                            

1. Thread2 is executing m1() method which is static synchronized.

2. While its executing , no thread is allowed to execute this or any other static synchronized method.

3. Thread4 , 5 and 6 can execute m3(), m4() and m5() as they are the normal methods.



*/










