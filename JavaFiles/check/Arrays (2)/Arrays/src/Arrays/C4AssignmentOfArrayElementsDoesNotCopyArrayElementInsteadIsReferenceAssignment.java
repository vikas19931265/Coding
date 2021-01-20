/*

Whenever we are assigning one array to another array internal elements will not be copied just
reference variables will be reassigned.

*/
package Arrays;


 class NewClass21
{
    
     public static void main(String[] args)
     {
         int[] a= {10,20,30,40,50,60}; // Created an array with 6 elements
         
         int[] b={70,80}; // Created an array with 2 elements
         
         a=b; // Now a is pointing to b array , hence b now contains 2 elements
         
         b=a;// Now b is pointing to a , but a is pointing already to b with 2 elements in it. hence both a and b are pointing to {70,80}
     
         
         // proof that both a and b are pointing to {70.80}.
         
         System.out.println(b[0]);
         
         System.out.println(a[0]);
     
         System.out.println(a.length);
         
         System.out.println(b.length);
     
     }
 
 
 }

//-----------------------------------------------------------------------------------------******************-----------------------------------------------