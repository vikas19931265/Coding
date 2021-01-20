package Generics;

/*

Case 2: TypeCasting.
================================================================================


1. In the case of Arrays , at the time of retrial , it is not required to perform typecasting
   because there is a guarantee for the type of elements present inside Array.


        String[] s = new String[1000];

        s[0]="durga";

        String name=s[0];
                      |
                   TypeCasting not required.



But in the case of Collections at the time of retrieval compulsory we should perform typecasting, because 
there is no guarantee for the type of elements present inside the collection

       ArrayList l = new ArrayList();

       l.add("durga");

                        
                
       String name=l.get(0);

            CE: incompatible type, found java.lang.Object required java.lang.String

       String name1= (String)l.get(0);
                         |       
                     TypeCasting is mandatary.    


       Hence typecasting is a bigger headache in Collection.



To overcome typecasting and type-safety problems , SUN introduced Generics concept in 1.5 version of java. Hence
the main objectives of Generics are:


        a. To provide Type-Safety

        b. To resolve Type-Casting problems.



*/
//----------------------------------------------------------------*************************---------------------------------------------------------