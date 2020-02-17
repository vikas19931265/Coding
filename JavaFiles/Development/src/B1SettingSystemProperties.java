/*

Setting System Properties
=============================================

We can set the system property explicitly from the command prompt by using the -D
option.


java  -Ddurga = ocjp   Test

D----> To Set system property and after D space is not alowed.
durga= property name
ocjp = property value.


The main advantage of setting system property is that we can customize behvaiour
of the java program


java -Dcourse=scjp Test

    o/p  SCJP information
    
java -Dcourse=scwcd Test

    o/p Other course information.



*/

class Test
{
    public static void main(String[] args)
    {
        String course= System.getProperty("Course");
        
        if(course.equals("scjp"))
        {
            System.out.println("SCJP information");
        }
    
        else
        {
            System.out.println("Other course information");
        }
        
        
    }
}






