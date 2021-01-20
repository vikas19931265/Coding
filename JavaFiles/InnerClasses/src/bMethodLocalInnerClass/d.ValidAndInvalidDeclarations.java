/*

Consider the following code


In 1.8 it is possible to access variables from all the below areas.


According to durga
--------------------

At line 1 which of the following variables we can access directly.


i

j

k

m

Till 1.6 it was not possible to access k but now in 1.8 all can 
be accessed. But if we are trying to change the value of k once it is initialized
then we will get the error to declare it as final.



2.

    If we declare m1() method as static then at line 1 which variables we can access 
    directly.

i(cant access as its an instance variable)

j(access)

k(access from 1.8) same reason as point 1.

m(access)	



3.

    If we declare m2() method as static then at line 1( that is code inside it) which variables we 
    can access directly.


    We will get compile time error in this case because we can’t declare static members inside the 
    inner classes.


4.

    The only applicable modifiers for method local inner classes are 

        final / abstract / strictfp

    If we are trying to apply any other modifier, then we will get compile time error.


*/


class Test8
{ 
    
    int i =10;
    
    static int j=20;
    
    public void m1()
    {
        int k =30;
        
        final int m =40;
        
        class Inner
        {
            public void m2() //Note: we can’t declare static methods inside inner class but are free to access.
            {
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println(m);
            }
            
        }
        
        Inner i = new Inner();
        
        i.m2();
        
    }  

    public static void main(String[] args)
    {
        Test8 test= new Test8();
        
        test.m1();
    }
}

/*
run:
10
20
30
40
BUILD SUCCESSFUL (total time: 0 seconds)

*/
