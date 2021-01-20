package newpackage;

/*



Hashing related data structures follow the fundamental rule.

1. Two equivalent objects should be placed inside the same bucket but all objects present 
   in the same bucket need not be equal.


Contract between .equals() method and hashcode() method.
---------------------------------------------------------------------------

1. If two objects are equal by .equals() method then there hashcodes must be equal
   that is two equivalent objects should have same hashcode that is 

    if r1.equals(r2) is true then r1.hashCode==r2.hashCode is always true.


 -Object class .equals() method and hashCode() follows the above contract hence whehever
  we are overidding .equals() method compulsory we should override hashCode() method to 
  satisfy the above contract that two equivalent objects should have the same hashcode.



2. If two objects are not equal by .equals() then there is no restriction on hashCodes() . They may be equal 
   and may not be equal.


3. If hashCodes() of two objects are equal then we cannot conclude anything about .equals() method.
   It may return true or false.


4. If hashCodes of two objects are not equal , then these objects are always not equal by .equals() method.


note******
------------

To satisfy contract between equals() and hashCode() methods , whenever we are overridding .equals() method compulsory 
we have to override hashCode() method also otherwise we will not get any compile time or run time errors but it is
not a good programming practice.



In String class .equals() method is overidden for the purpose of content comparison and hence hashCode() method is also overidden
to generate the hashCode() based upon the content
*/

class Demo
{
    public static void main(String[] args)
    {
        
        String s = new String("vikas"); // by .equals() method both the objects are same.
        
        String s1 = new String("vikas");
        
        System.out.println(s1.hashCode() +"..."+ s1.hashCode());
        
        System.out.println(s==s1); //false
        
        System.out.println(s.equals(s1)); // true
        
        /*
        
            Since both the objects are equal by .equals() method hence they must return 
            the same hashCode and in this program both the objects are returning the same hashcode.
        
        
        */
    }
}

/*
run:
112209482...112209482
false
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/

