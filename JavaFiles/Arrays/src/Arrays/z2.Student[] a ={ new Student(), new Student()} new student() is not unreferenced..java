/*

Objects which are stored in  Student[] a ={ new Student(), new Student()} format

are not unreferenced.

*/
package Arrays;

class Student {
    

    String name="vikas";
    

}

class Driver
{
    
    public static void main(String[] args)
    {
        
        Student[] a ={new Student() ,new Student() };
        
        for(Student s : a)
        {
            
            System.out.println(s);
        }
    }
}

/*
run:
newpackage.Student@6bc7c054
newpackage.Student@232204a1
BUILD SUCCESSFUL (total time: 0 seconds)

*/