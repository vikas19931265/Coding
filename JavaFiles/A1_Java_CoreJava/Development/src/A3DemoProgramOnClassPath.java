/*

C location program
=======================


public class AStudent
{
    public void m1()
    {
        System.out.println("I want JOB immediately");
    }
    
}




D location program
===========================

public class ItIndustry
{
    
    public static void main(String[] args)
    {
        
        AStudent a1= new AStudent();
        
        a1.m1();
        
        System.out.println("You will get soon");
        
        
    }
}




C:/> javac AStudent.java   

D:/> javac ItIndustry.java

        CE: cannot find symbol symobl : class AStudent location: class ITIndustry
        
D:/> javac -cp  C: Itindustry.java

D:/> java ItIndustry

        RE: NoClassDefFoundError: AStudent
        
D:/> java -cp C: ItIndustry

        RE: NOClassDefFoundError: ItIndustry
        
D:/> java -cp .;C: ItIndustry

        It will search for ItIndustry classpath in the current working directory
that is in the D drive and if any other classpath is needed then it will be searched
in the C drive.

E:/> java -cp  D:;C:  ItIndustry



*/