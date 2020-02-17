/*

public StringBuffer append(String s) // overloaded methods
public StringBuffer append(int  s)
public StringBuffer append(long s)
public StringBuffer append(char s)
public StringBuffer append(boolean s)

We can apply append not only for String, but for any type given as example 
above.
  

If we apply append on string buffer then this will append the string with the already 
existing string buffer and return a StringBuffer object.


*/
package StringBufferConstructorsAndMethods;

class AppendExample
{
    public static void main(String[] args)
    {
        
        StringBuffer sb1= new StringBuffer("Vikas");
        
        sb1.append("Gautam");
        
        System.out.println(sb1); // VikasGautm
        
        sb1.append(10);
        
        System.out.println(sb1);//VikasGautam10
        
        sb1.append('c');
        
        System.out.println(sb1);//VikasGautam10c
        
        sb1.append(true);
        
        System.out.println(sb1);//VikasGautam10ctrue
        
    }
    
    
}