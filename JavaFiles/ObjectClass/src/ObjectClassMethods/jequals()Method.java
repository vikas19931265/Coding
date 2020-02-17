/*
equals() method
--------------------------

1. We can use equals() method to check equality of two objects.

    example

            obj1.equals(obj2)

2. If our class does not contain equals() method then Object class equals() method will be 
   executed.


3. In the below example Object class equals method got executed which is meant for reference comparison(address comparison).
   that is if 2 references are pointing to the same object then only. equals() method will return true.

4. Based upon our requirement, we can override equals() method for content comparison.


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


class Student4
{
    
    String name;
    
    int rollno;
    
    Student4(String name, int rollno)
    {
        
        this.name=name;
        
        this.rollno=rollno;
    }


    public static void main(String[] args)
    {
        
        Student s1= new Student("Durga",101);
        
        Student s2= new Student("Ravi",102);
        
        Student s3= new Student("Druga", 101);
        
        Student s4= s1;
        
        System.out.println(s1.equals(s2));  // false
         
        System.out.println(s1.equals(s3)); // false
        
        System.out.println(s1.equals(s4));// true
    }

    

}

