package aInstanceVariables;

/*

* Based on type of value represented by a variable, all variables are divided into two types.

 Division 1)   
    
    1. Primitive Variables.

        Can be used to represent values eg. int x=10;

    2. Reference Variables.

        Can be used to refer objects. ex Student s= new Student();


 Division 2)

   Based on position of declaration and behavior, all variables are divided into 3 types.

        1. Instance variables. ( Not Thread Safe)
        2. Static variables. (Not Thread Safe)
        3. Local variables.  (Thread Safe)



* Every variable in java should be instance, static or local.

* Every variable in java should be either primitive or reference.

* Hence various possible combinations of variables in java are.

        instance- primitive/reference
        static - primitive/reference.
        local - primitive/reference.
        

    
eg.

            class Test
            {

                int x=10;  // instance - primitive
                static String s= "durga" //  static reference

                public static void main( String[] args)

                    {
                        int[] y= new int[5]  // local - reference
                    }

            }



*/
