// AUTOMATIC PROMOTION OVERLOADING CASE 2        

package bMethodOverloading;

 class AutomaticPromotionOverloading_CASE2 {

    public static void main(String[] args) {

        Test2 t = new Test2();
        t.m1(new Object());
        t.m1(new String());
        t.m1(new StringBuffer("vikas"));
        
        //  t.m1( null);
        
        /*
        
        1. Here null will be assigned to the String reference because children 
           of  Object class is given the priority , there is no need to disturb
           the Object which is a parent of the string and hence  method accepting String will execute.
        
        2. But if there are 2 children class of Object , here in our case StringBuffer
           and String then we will get a compile time error
        
        Error: reference to m1() is ambiguous.
        
        
 [Note]
        
     While resolving overloaded methods compiler will always give the precedence for child type argument
     when compared with parent type argument , but if both are children’s and no parent exists then we will
     get compile time error.
        
        
         */

    }

}

class Test2 {

    public void m1(String s) {
        System.out.println(" String version");
    }

    public void m1(Object o) {
        System.out.println(" Object Version");

    }

    public void m1(StringBuffer sb) {
        System.out.println(" String Buffer Version");
    }

}


//-----------------------------------------------------------------------------*********-------------------------------------------------------------