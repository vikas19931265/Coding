package WrapperClass;

/*

Constructors for Wrapper classes
===============================================================================

***Almost all the wrapper classes contain two constructors. One can take corresponding primitive
as argument and the other can take String as the argument.


Example1:

        Integer I = new Integer(10);

        Integer I= new Integer("10");


Example 2:

        Double d = new Double(10.5);

        Double d = new Double("10.5");

If the String argument is not representing a number then we will get run time exception
saying

        NumberFormatException

Example:

    Integer I = new Integer("Ten");



2. Float class contains 3 constructors with , float, double and String arguments


 Example

        Float f = new Float(10.5f);  //valid( taking float parameter)

        Float f = new Float("10.5f");//valid

        Float f = new Float(10.5);//valid (taking double parameter)

        Float f = new Float("10.5");//valid( taking string parameter)



3. Character class contains only one constructor which can take char argument

Example

        Character ch = new Character('a'); // valid

        Character ch = new Character("a");  // invalid





4. Boolean class contains two constructors , one can take primitive as the argument and the other 
   one can take String argument. If we pass boolean primitive as the argument then the only allowed values 
   are true or false , where case is important and content is also very important.


    Example

        Boolean b = new Boolean(true);// valid
        Boolean b = new Boolean(false);// valid
        Boolean b = new Boolean(True);// invalid
        Boolean b = new Boolean(durga);// invalid
        

     ***

        If we are passing String type as argument, then case and content both are not important. If the content is   
case insensitive string of true then it is treated as true otherwise it is treated as false.


    Boolean B= new Boolean("true");--->true
    Boolean B= new Boolean("True");--->true
    Boolean B= new Boolean("TRUE");---->true
    Boolean B= new Boolean("malaika");--->false
    Boolean B= new Boolean("jareena");---->false
    Boolean B = new Boolean("mallika");---->false
    

    Example

        Boolean X = new Boolean("yes");
        Boolean y = new Boolean("no");
        System.out.println(X); // false
        System.out.println(Y);//false
        System.out.println(X.equals(Y));// true


***Important table:


Wrapper class                               Corresponding Constructor argument


Byte                                            byte or String

Short                                           Short or String

Integer                                         int or String
                                    
Long                                            long or String
    
Float                                           float or String or  Double        

Double                                           Double or String   

Character                                        only char   

Boolean                                          boolean or String



Note
-------

In all the wrapper classes toString() method is overidden to return content directly.

In all the wrapper classes .equals() method is overidden for content comparison.



*/


 class Sample
{
    
    public static void main(String[] args)
    {
        // Boolean Class Constructors taking primitive
        
        Boolean b = new Boolean(true); // valid
        
        System.out.println(b);
        
        
        // Boolean class constructor taking String argument whose value is true.
        
        Boolean b1 = new Boolean("true");
        
        System.out.println(b1); // true
        
       
        // Boolean class constructor taking String argument whose value is not primitive.
        
        Boolean b2 = new Boolean("yes");
        
        System.out.println(b2); // false
        
        
    
    
    }
}


