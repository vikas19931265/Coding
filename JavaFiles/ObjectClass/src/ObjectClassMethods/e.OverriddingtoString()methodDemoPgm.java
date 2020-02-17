/*

Based upon our required we can override toString() method to provide our own String representation.
For example, whenever we are trying to print Student object reference to print his name and rollno.
Then we have to override toString() method as follows.

    public String toString()
    {

        return name+"...."+ rollno;

    }    
    


*/
package javalanggpackage;


class Students
{
    String name;
    
    int rollno;
    
    Students(String name , int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }


    public String toString() // Overrding Object class toString method
    {
        return "This is Student with name "+ name +" and rollno "+ rollno;
    }
    
    
    
    public static void main(String[] args)
    {
        Students s1 = new Students("Durga",101);
        
        Students s2= new Students("Ravi",102);
        
        System.out.println(s1);
        
        System.out.println(s1.toString());
        
        System.out.println(s2);
    }



}

/*
run:
This is Student with name Durga and rollno 101
This is Student with name Durga and rollno 101
This is Student with name Ravi and rollno 102
BUILD SUCCESSFUL (total time: 0 seconds)

*/
