package bInheritence_HAS_A_Relationship;

/*

Aggregation
==========================

Without existing container object if there is a chance of existing contained object, then such
type of relationship is known as aggregation. In aggregation objects have the weak relationship.




Example
==========

Within a department there may be a chance of several professor working. But whenever
we are closing the department there may be a chance of existing professor object. Professor
might starting working in some other department.

Hence the relationship between the department and the professor is weak and hence such type
of relationship is weak.


*/


class Departments
{
    String DepartmentName;
    Professors p; // Association.

    Departments(String DepartmentName, Professors p)
    {
        this.DepartmentName=DepartmentName;
        this.p=p;
                
    }

}


class Professors
{
   String professorName;
   
   public void setProfessorName(String professorName)
   {
       this.professorName=professorName;
   }
           
}

class FactoryProfessor
{
     public Professors giveProfessorObject()
   {
       return new Professors();
   }
}



class Drivers
{
    
    public static void main(String[] args)
    {
        
        
        FactoryProfessor p = new FactoryProfessor();
        
        Professors p1 =p.giveProfessorObject();
        
        System.out.println("before destroying university professor object is "+p1);
        
        Departments d = new Departments("Information Technology",p1);
        
        d=null; // destroying department object.(Department object destroyed but professor will still live)
        
        System.out.println("After destroying university professor object is"+p1);
    }

}

/*
run:
before destroying university professor object is bInheritence_HAS_A_Relationship.Professors@4aa298b7
After destroying university professor object isbInheritence_HAS_A_Relationship.Professors@4aa298b7
BUILD SUCCESSFUL (total time: 0 seconds)

*/