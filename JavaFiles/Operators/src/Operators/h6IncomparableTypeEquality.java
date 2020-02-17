package Operators;

/*

Incomparable types Equality
=======================================================================


If we apply equality operator for the object types , then compulsory there should be some
relation between the argument types( either child to parent relationship) or parent to child
relationship or of the same type. 

Otherwise we will get the compile time error saying 
incomparable types java.lang.String and java.lang.Thread.


*/

class Equality
{
    
    public static void main(String[] args)
    {
        
        Thread t = new Thread();
        
        Object o = new Object();
        
        String s = new String("Durga");
        
        System.out.println(t==o);// false
        
        System.out.println(o==s);// false
        
       //  System.out.println(s==t);
       
                /*
                 Compile error: incomparable type : java.lang.String, java.lang.Thread.
                */
        
    }
}

