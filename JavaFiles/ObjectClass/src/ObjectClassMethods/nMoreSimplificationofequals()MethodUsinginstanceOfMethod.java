/*

More simplification on overriding equals method using instanceof operator.


Note

        obj instanceof Null----> is always false.


To make the method even more efficient we have to write the following code at the beginning
inside the equals() method

            if(obj==this)
            {
                return true;
            }    

According to this if both the references are pointing to the same Object then then without performing 
any comparison. equals() method will returns directly


*/
package javalanggpackage;

class Student61
{
    
    String name;
    
    int rollno;
    
    Student61(String name, int rollno)
    {
        
        this.name=name;
        
        this.rollno=rollno;
    }
// s1.equals(s2)---------s2--------
//                               |   and s1 is the current object calling equals() method                                           
    public boolean equals(Object obj)
    {
          if(obj==this)
            {
                return true;
            } 
    
            if(obj instanceof Student61)
        {
        
            /*String name= this.name; 

            int rollno= this.rollno;

            
           we dont have to do above steps as instance variable can be directly accessed 
           from the instance araa.
           
           */
            Student61 s =(Student61) obj; // RE: There is chance of ClassCastException

            
            /*String name2=s.name;

            int rollno2=s.rollno;      // NPE: There is a chance of NullPointerException

            
              we dont have to do above steps as instance variable can be directly accessed 
           from the instance area.
            
            */

            if(name.equals(s.name) && rollno==s.rollno) // directly accessin the instance variable.
            {

                return true;
            }

            else
            {
                return false;
            }
       }    
        
         return false;
                
    }   
     
    public static void main(String[] args)
    {
        
        Student61 s1= new Student61("Durga",101);
        
        Student61 s2= new Student61("Ravi",102);
        
        Student61 s3= new Student61("Druga", 101);
        
        Student61 s4= s1;
        
        System.out.println(s1.equals(s2));  // false
         
        System.out.println(s1.equals(s3)); // false
        
        System.out.println(s1.equals(s4));// true
    
        System.out.println(s1.equals("durga"));  //false

        System.out.println(s1.equals(null));//false
    
    }

    

}

/*
run:
false
false
true
false
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/



