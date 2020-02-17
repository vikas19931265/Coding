/*

Method Chaining
===============================================================================


For most of the methods in String, StringBuffer and StringBuilder return types are same type hence after
applying a method on the result we can call another method which will form method chaining.


sb.m1().m2().m3().m4().....

In method chaining , method calls will be executed from left to right


*/
package StringBuilder;

/**
 *
 * @author vikas
 */
class methodChaining {
    

    public static void main(String[] args)
    {
        
        StringBuffer sb = new StringBuffer();
        
        sb.append("durga").append("software").append("solutions").insert(2,"xyz").reverse().delete(2, 5);
      
    
        System.out.println(sb); //snuloserawtfosagrzyxud
    
    
    }


}