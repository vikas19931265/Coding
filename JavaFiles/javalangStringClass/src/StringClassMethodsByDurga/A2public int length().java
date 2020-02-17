/*

public int length()

        This will return number of characters present in the String.

        dont use length as that is applicable to arrays.


Note
========
length variable is applicable for Arrays but not for whereas length() method is applicable for
String objects but not for arrays.


*/
package StringClassMethodsByDurga;


 class length {

     public static void main(String[] args)
     {

         String s ="Durga";

         /*
         System.out.println(s.length); // we are using length variable here which is not correct.

                    CE: cannot find symbol
                    symbol: variable length
                    location: java.lang.String

          */

         System.out.println(s.length());; //5

}


 }