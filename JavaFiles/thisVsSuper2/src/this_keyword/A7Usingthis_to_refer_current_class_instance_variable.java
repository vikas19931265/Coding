/*
The this keyword can be used to refer current class instance variable. 
If there is ambiguity between the instance variables and parameters, this keyword 
resolves the problem of ambiguity. 

*/
package this_keyword;

class Students {
    
     
     String name;
     int rollno;
     
     Students(String name , int rollno)
     {
         this.name=name;  // using this keyword in order to distinguish between the local variable
         this.rollno=rollno; // and instance variable which belongs to the class.
     }
 
 

     public static void main(String[] args)
     {
         Students s = new Students("vikas",1234);
         
     }
 
}

/*
o/p

run:
I am Parent class
Child
10
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/


