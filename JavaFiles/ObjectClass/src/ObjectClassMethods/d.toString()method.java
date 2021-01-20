package javalanggpackage;



/*

toString()
----------------------------

1. We can use toString() method in order to get String representation of an Objet.

                        ------    
            String s=   |    |.toString();   
                        |----|
                        object

2. Whenever we are trying to print Object reference internally toString() method will 
   be called.



3. Example

        Student s = new Student();

        System.out.println(s)--->(s.toString())



4. If our class doesnot contain toString() method then Object class toString() method will be executed


5. How is the Object class toString() method is implemented by default


            public String toString()
            {

                return  getClass().getName() + "@ " + Integer.toHexString(hashcode());

                // classname@hashcodeinHexadecmialForm.

            }       





*/
/*

In this example, Object class toString() method got executed which is implemented as given in point(5).

*/

class Student
{
    String name;
    
    int rollno;
    
    Student(String name , int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }


    public static void main(String[] args)
    {
        Student s1 = new Student("Durga",101);
        
        Student s2= new Student("Ravi",102);
        
        System.out.println(s1);
        
        System.out.println(s1.toString());
        
        System.out.println(s2);
    }



}

/*
run:
javalang.pkgpackage.Student@6bc7c054
javalang.pkgpackage.Student@6bc7c054
javalang.pkgpackage.Student@232204a1
BUILD SUCCESSFUL (total time: 0 seconds)


           --------- 
s1-------- | durga  |
           | 101    |   
           ----------

           --------- 
s2-------- | Ravi  |
           | 102    |   
           ----------



*/
