// AUTOMATIC PROMOTION OVERLOADING CASE 4[varargs parameter]                                             `                                                                    



package bMethodOverloading;

 class AutomaticPromotionOverloading_CASE4 {

    public static void main(String[] args) {

        Test4 t = new Test4();
        t.m1();
        /*
        1. This is valid and in this case args parameter method will get called.
        2. This is because args() parameter method can accept any number of the arguments.
        
         */

        t.m1(10, 20);
        /*
        1. This is again valid as in this case also args parameter method will be called.
        2. This is because args parameter method can accept any number of the arguments.
         */

        t.m1(10);

        /*
            1. Here exact match method will be called which is m1(int).
            2. Moreover args method functionality is new one, hence whenever there is a fight between 
               new and old feature old is given the preference.
       
        
        
        
    [Note]
        
     1. In general vararg method will get the least priority that is if no other method
        match then only vararg method will get the chance.
        
     2. It is exactly same as default case inside switch  
        
        
        
        
         */
    }

}

class Test4 {

    public void m1(int x) // this is a general way of declaration of the method.
    {
        System.out.println(" General method");
    }

    public void m1(int... x) // this is the way we declare varargs method.
    {
        System.out.println(" var- arg method");

    }

} 


/*
run:
 var- arg method
 var- arg method
 General method
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------------------*********-------------------------------------------------------------