
package AutoBoxingAndAutoUnboxing;


class  Sample2 {


    public static void main(String[] args)
    {

       /*

        CASE1

      Integer x = new Integer(10)

      With this line a new object is created, similarly for y. But both are different
      objects hence the references would be different. */





        Integer x = new Integer(10); // A new object will definitely be created if we use new operator.

        Integer y= new Integer(10);

        System.out.println(x==y);//false

 //-------------------------------------------------------------------------------------------------------

      /*
        Case2:

         Integer x1= new Integer(10); with this line a new object is created

         Integer y1=10; here we are performing auto boxing for 10 , hence a new object will be created.
                        like Integer y1= Integer.valueOf(10).

        now both the references are pointing to different objects hence the result is false.

      */

        Integer x1= new Integer(10);

        Integer y1=10;

        System.out.print("result");

        System.out.println(x1==y1);//false


 //--------------------------------------------------------------------------------------------------------

        /*

        Case 3:

        Integer x2=10; A new object is created by auto boxing of 10

        Integer y2=10 ; compiler will check if already any such autoboxed object exists or not
                        Since the object already exists hence the same object will be reused.


        Now both the references x and y are pointing to the same object hence the result would be true.
        */

        Integer x2=10;

        Integer y2=10;

        System.out.println(x2==y2);//true

    //-----------------------------------------------------------------------------------------------------
        /*

        Case 4: same reason as 3
        */



         Integer x3=100;

         Integer y3=100;

         System.out.println(x3==y3);//true



      /*
   //------------------------------------------------------------------------------------------------

         CASE 5:

         Internally to provide support for autoboxing a buffer of wrapper objects will be
         created at time of wrapper class loading. By autoboxing if an object is required
         to be created first JVM will check whether this object is already present in the
         buffer or not.

         If it is already present in the buffer then the existing buffer object  will be used.
         If it is not already available in the buffer then JVM will create a new object

         1000 not in the buffer hence a new object got created

         class Integer
         {
            static
                {

         ------------------------------------------
         |                                         |
         | -128 | -127|.....10|.....100     |127   |
         ------------------------------------------
                           |         |
         x-----------------|         |
         y-----------------|         |
                                     |
                                     |
         x---------------------------|--
         y---------------------------|-

                }



         Buffer concept is available only in the following ranges.

         Byte----> always
         short---->-128 to 127
         Integer--->-128 to 127
         Long------>-128 to 127
         Character----> 0 to 127
         Boolean------->Always


         no Buffer concept for float and double as it is impossible to represent float range.
         Example just to represent just numbers between 0 to 1 infinite objects need to be
         created which will lead to wastage of memory and performance.

         Except this range in all the remaining cases a new object will be created

         */




        Integer x5=1000;

        Integer y5=1000;

        System.out.println(x5==y5);//false


        Integer x6=127;

        Integer y6=127;

        System.out.println(x6==y6);//true



        Integer x7=128;

        Integer y7=128;

        System.out.println(x7==y7);//false



        Boolean x8=false;

        Boolean y8=false;

        System.out.println(x8==y8);//true


        Double x9=10.0;

        Double y9=10.0;

        System.out.println(x9==y9); //false
    }


}