/*

1. We can mix varArg parameter with normal parameter.

  eg m1( String x, int... y) is fine

    but m1(int...y, String x) is illegal.


2. If we mix normal parameter with VarArg parameter then varArg parameter should be 

   last parameter.




*/




package varArgsMethods;


 class MixedTypeOfArgumentAllowed_Case2
{
    
public static void m1(String x, int... y) // In this case we have mixed both String type as well as varArg parameter
{                                          // This is valid but in this case first parameter must be string and then any number of parameters are allowed.
    
    
    /*
    [note]  m1(int...y String x) // this is not allowed as compulsory last argument should be of VarArg Type.
    
    */
    
    for(int y1:y)
    {
        System.out.println("String is "+x + " and number is "+y1);
    }


}


public static void main(String[] args)
{
    m1("dhoni");
    m1("vikas",2,4,5);
    m1("sachin",3);

}

}

//--------------------------------------------------------------------------********--------------------------------------------------------------
