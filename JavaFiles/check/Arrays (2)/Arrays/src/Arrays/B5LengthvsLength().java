// length vs length()

/*

length

        1. length is a final variable applicable to arrays.

        2. length variable represents size of the array.

        3. This is used to find out length of the array. Since this variable is final hence length of array
           cannot be changed once it is declared.



length()

        1. length() method is a final method applicable for string objects.

        2. length() method returns number of characters present in the string.

    
[note]

    length variable is applicable for arrays but not for string objects.
    whereas length() method applicable for string objects but not for arrays.





*/


package Arrays;


 class Test9
{
    
     public static void main(String[] args)
     {
         int[] x = new int[6];
         
         System.out.println(x.length);
         
       //  System.out.println(x.length()); // length() is not applicable
    
       // Error : Cannot find symbol : method length() , location class int[]
     
     
          String s ="Durga";
          
          System.out.println(s.length());// o/p 5.
          
          /* System.out.println(s.length); // length variable is not applicable to string , we have to use length() method.
     
           System.out.println(s.length);
  symbol:   variable length
  location: variable s of type String
1 error
1 warning
     
            */

}
 
}
