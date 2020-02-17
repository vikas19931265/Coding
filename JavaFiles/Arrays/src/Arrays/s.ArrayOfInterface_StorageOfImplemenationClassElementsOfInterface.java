/*

It is not possible to create an interface Object.
But we can create an array of interface type

For Interface type arrays as array elements, its implementation class Objects are allowed
 
*/
package Arrays;


 class NewClass18
{
    
     public static void main(String[] args)
     {
         Runnable[] r= new Runnable[10];
         
         r[0]= new Thread();// We can create thread object as thread is implementation class of runnable interface.
         
         //r[1]= new String("Durga"); We cannot create String object here as String is not implementation class of interface Runnable.
     }
 
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------