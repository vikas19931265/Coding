/*

Demo program illustrating the concept of HAS-A relationship
==============================================================


*/
package bInheritence_HAS_A_Relationship;


class University
{
    static String UniversityName="Anna University";
   
    Department d = new Department(); //Strong association-HAS A relationship
    
}


class Department
{
    
    String DepartmentName;
    
    public void setDepartmentName(String DepartmentName)
    {
        this.DepartmentName=DepartmentName;
    }
}


class Driver
{
    public static void main(String[] args)
    {
        /*
            Step1
        ===============
        
            Created University Object and in the university department is
            there.
        
            please note that department object is strong associated with university
            object as whenever we are creating university object, department object
            will also be created.
        
        
        */
        
        University u =new University();
        
        u.d.setDepartmentName("Information Technology");
        
        System.out.println(University.UniversityName);
        
        System.out.println(u.d.DepartmentName);
   
    
        /*
            Step2
        ================
        
        Now we will delete the university object. Now since the department object
        is strongly associated with the university object hence whenever we are going
        to delete the university object, department object will also get destroyed.
        
        */
    
        
        u=null;
        
        System.out.println(u.d); //department object no longer exists as university object is deleted.
    }
    
}

/*
run:
Anna University
Information Technology
Exception in thread "main" java.lang.NullPointerException
	at bInheritence_HAS_A_Relationship.Driver.main(NewClass.java:70)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/