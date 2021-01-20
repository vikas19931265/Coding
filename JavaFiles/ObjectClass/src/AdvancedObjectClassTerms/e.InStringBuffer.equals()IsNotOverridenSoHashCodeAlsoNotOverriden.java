
/*
In StringBuffer .equals() method is not overridden for the content comparison and hence
hashCode() method is also not overridden.


*/


package newpackage;

class Demo23
{
    public static void main(String[] args)
    {
        
        StringBuffer s = new StringBuffer("vikas"); // by .equals() method both the objects are same.
        
        StringBuffer s1 = new StringBuffer("vikas");
        
        System.out.println(s1.hashCode() +"..."+ s1.hashCode());//1808253012...1808253012
        
        System.out.println(s==s1); //false
        
        System.out.println(s.equals(s1)); // false
        
   
    }
}


/*
run:
1808253012...1808253012
false
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/
