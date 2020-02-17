/*

While overriding equals() method for content comparison we have to take care of the following.


    1. What is the meaning of equality ( that is whether we have to check only name or only roll numbers or both.

    2. If we are passing different type of object then our equals method should not raise ClassCastException
       that is we have to handle ClassCastException to return false.

    3. If we are passing null Argument then our equals() method should not raise NullPointerException that is we 
       have to handle NullPointerException to return false.

    4. The following is the proper way of overriding equals() method for Student class content comparison.

             ---------------
s1--------->|             |  
            |Durga, 101   |  
s4--------->|             |  
            ---------------
            
            --------------    
s2-------->|              |  
           |Ravie, 102    |  
           |              |  
           ---------------- 


               ------------- 
s3------------>|           | 
               |Durga, 101 |
               |           | 
               |------------ 

*/
package javalanggpackage;


class Student5
{
    
    String name;
    
    int rollno;
    
    Student5(String name, int rollno)
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
        
            String name= this.name;

            int rollno= this.rollno;

            Student5 s =(Student5) obj; // RE: There is chance of ClassCastException

            String name2=s.name;

            int rollno2=s.rollno;      // NPE: There is a chance of NullPointerException

            if(name.equals(name2) && rollno==rollno2)
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
        
        Student5 s1= new Student5("Durga",101);
        
        Student5 s2= new Student5("Ravi",102);
        
        Student5 s3= new Student5("Druga", 101);
        
        Student5 s4= s1;
        
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
