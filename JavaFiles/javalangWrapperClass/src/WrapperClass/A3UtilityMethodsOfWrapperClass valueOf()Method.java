package Programs;

/*

utility method of wrapper classes
===============================================================================


1. valueOf()

2. xxxValue()

3. parseXXX()

4. toString()



valueOf()


1. We can use valueOf() methods to create wrapper object for the given primitive or String.


Form1:
===================================

    Every wrapper class  contains a static valueOf method to  create wrapper 
    object for the given String.

        public static wrapper valueOf(String s);

Example

    Integer I= Integer.valueOf("10");

    Double d =Double.valueOf("10.5");

    Boolean B = Boolean.valueOf("durga");---> internally false value will be saved
    


Form 2:(only integral data types)
======================================

    Every integral data type wrapper class( byte, short, int , long) contains the following valueOf method
    to create wrapper object for the given specified Radix String.


        public static wrapper valueof(String s, int radix);
                    
                    The allowed range of radix is 2: 36
                    
      Example

        Integer I= Integer.valueOf("100",2); // 100 binary is 4
        
        System.out.println(I); //4

        
        Integer I = Integer.valueOf("101",4);

        System.out.println(I); //17



Form 3:
========================================

Every wrapper class including character class contains a static valueOf() to create wrapper 
object for the given primitive.


        public static wrapper valueOf(primitive p);

Example
-------------

        Integer I = Integer.valueOf(10);

        Character ch = Character.valueOf('a');

        Boolean B = Boolean.valueOf(true);




for primitive/String---------valueOf() used to create-----------> wrapper object.


*/

class Demo
{
    
    public static void main(String[] args)
    {
       
      // Converting char primitive to Character using valueOf() example.
        
      char ch1= 'a'; 
        
      Character ch=  Character.valueOf(ch1);
        
      System.out.println(ch);
    
    
      // Wrapper object of specified radix string
      
        
       System.out.println(Integer.valueOf("100",2)); //100 is binary value of 4.
      
      
      
    }
    
}
