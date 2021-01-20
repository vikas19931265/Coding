
// In String class .equals() method is overridden for content comparison but not in
// the case of the StringBuffer class.


package javalanggpackage;



class ExampleDemo

{
    
    public static void main(String[] args)
    {
        String s1= new String("Durga");
        
        String s2= new String("Durga");
        
        System.out.println(s1==s2); // false
        
        System.out.println(s1.equals(s2));// true
        
        /*
        
        In String class , .equals() method is overridden for the purpose of content
        comparison, hence even though the objects are different if the content is same
        then  .equals() method will return true.
        
        
        */
        
          
        StringBuffer s3= new StringBuffer("Durga");
        
        StringBuffer s4= new StringBuffer("Durga");
        
        System.out.println(s3==s4);//false
        
        System.out.println(s3.equals(s4));//false
        
        /*
        
        In StringBuffer class , .equals() method is not overridden for the purpose of content comparison
        hence if objects are different .equals method will return false even though
        the content is the same.
        
        */
        
    }
}


/*
debug:
false
true
false
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/

