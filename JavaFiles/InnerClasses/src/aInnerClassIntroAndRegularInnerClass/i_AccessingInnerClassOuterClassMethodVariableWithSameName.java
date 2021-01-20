package aInnerClassIntroAndRegularInnerClass;

/*

Within the inner class this always refers, current inner class object. If we want to 
refer current outer class object then we have to use.

    Outerclassname.this.


*/


class Outer7
{
    int x=10;
    
    class Inner
    {
        
        int x =100;
    
        public void m1()
        {
            int x =1000;
            
            System.out.println(x);//1000
            
            System.out.println(this.x); // or System.out.println(Inner.this.x)=100 to access current inner class object x value
                                        // Here this refers to the current inner class object.    
            
            System.out.println(Outer7.this.x); // to access current outer class x value.
        }
    
    
    }

    public static void main(String[] args)
    {
        
        new Outer7(). new Inner().m1();
    }


}

/*
run:
1000
100
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------*************************---------------------------------