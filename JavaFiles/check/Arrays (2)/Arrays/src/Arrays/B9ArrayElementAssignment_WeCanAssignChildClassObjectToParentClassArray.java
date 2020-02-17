// Object and Number Type array elements. Case_2

/*

1. In the case of Object type arrays as array elements. We can provide either declared type objects
   or its child class objects.


2. Byte, short, int , long, float , double are child class of Number class.

*/

package Arrays;


 class Objects
{
    
     public static void main(String[] args)
     {
     Object[] a = new Object[10];
     
     a[0] = new Object(); 

     a[1]= new String("durga");// These are valid as String and integers are child class of Objects
     
     a[2]= new Integer(10);
     
     }
 }
     
class Numbers
{
    public static void main(String[] args)
    {
    
    Number[] n = new Number[10];
  
    n[0]= new Integer(10); // These are valid as integers and double are child class of numbers.
    
    n[1]= new Double(10.5);
    
   // n[2]= new String("Durga"); // This is invalid as String is not a child  class of number
    
    /*
        Compile error: Incompatible types found java.lang.String , required java.lang.Integer.
     */
    
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------
