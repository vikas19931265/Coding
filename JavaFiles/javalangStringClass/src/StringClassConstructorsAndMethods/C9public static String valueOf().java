/*

Java String valueOf
================================================================================

The java string valueOf() method converts different types of values into string. 
By the help of string valueOf() method, you can convert int to string, long to string, boolean to string, 
character to string, float to string, double to string, object to string and char array to string.


Signature

The signature or syntax of string valueOf() method is given below:

    public static String valueOf(boolean b)  
    public static String valueOf(char c)  
    public static String valueOf(char[] c)  
    public static String valueOf(int i)  
    public static String valueOf(long l)  
    public static String valueOf(float f)  
    public static String valueOf(double d)  
    public static String valueOf(Object o)  

Returns

string representation of given value


*/
package StringClassConstructorsAndMethods;


class Example23
{
    public static void main(String[] args)
    {
       // Converting char[] to String
        
            char[] ch={'v','i','k','a','s'};

            String str1= String.valueOf(ch);

            System.out.println(str1); //vikas
 
      // Converting char to String

            char ch1='v';
            
            System.out.println(String.valueOf(ch1));//v
            
     // Converting int to String
     
            int a =10;
            
            System.out.println(String.valueOf(a));//10
            
     // Converting long to String
     
            long b=10;
            
            System.out.println(String.valueOf(b)); //10
            
     //  Converting float to String
     
            float f= 10.8f;
            
            System.out.println(String.valueOf(f)); //10.8
            
      // Converting double to String

            double d = 19.7;
            
            System.out.println(String.valueOf(d));//19.7
            
            
      // Converting Object to String

        Integer i= new Integer(10);
        
        System.out.println(String.valueOf(i)); //10
    
    
    
    }
    
}
