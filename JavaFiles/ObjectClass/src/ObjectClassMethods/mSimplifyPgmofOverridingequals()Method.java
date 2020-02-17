package javalanggpackage;

/*

Simplifying program on overriding equals() method
-------------------------------------------------

Note
----

    In instance method we can directly access the instance variable. We don’t have to use this.variableName.
*/
class Student6
{
    
    String name;
    
    int rollno;
    
    Student6(String name, int rollno)
    {
        
        this.name=name;
        
        this.rollno=rollno;
    }
// s1.equals(s2)---------s2--------
//                               |   and s1 is the current object calling equals() method                                           
    public boolean equals(Object obj)
    {
       try
       
       {
        
            /*String name= this.name; 

            int rollno= this.rollno;

            
           we dont have to do above steps as instance variable can be directly accessed 
           from the instance araa.
           
           */
            Student6 s =(Student6) obj; // RE: There is chance of ClassCastException

            
            /*String name2=s.name;

            int rollno2=s.rollno;      // NPE: There is a chance of NullPointerException

            
              we dont have to do above steps as instance variable can be directly accessed 
           from the instance araa.
            
            */

            if(name.equals(s.name) && rollno==s.rollno) // directly accessing the instance variable.
            {

                return true;
            }

            else
            {
                return false;
            }
       }    
        
       catch(ClassCastException e){ return false;}
        
       catch(NullPointerException e){return false;}
    
    }    
    public static void main(String[] args)
    {
        
        Student6 s1= new Student6("Durga",101);
        
        Student6 s2= new Student6("Ravi",102);
        
        Student6 s3= new Student6("Druga", 101);
        
        Student6 s4= s1;
        
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