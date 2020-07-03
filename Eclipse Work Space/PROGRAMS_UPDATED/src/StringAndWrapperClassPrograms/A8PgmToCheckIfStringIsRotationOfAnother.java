package StringAndWrapperClassPrograms;

/*
 Write a java program to check whether one string is a rotation of another?
 */
import java.util.*;

class MainClass
{

    public static void main(String[] args)
    {
        String s1 = "JavaJ2eeStrutsHibernate";
        String s2 = "StrutsHibernateJavaJ2ee";
        if (s1.length() != s2.length())
        {
            System.out.println("s2 is not rotated version of s1");
        } else
        {
            String s3 = s1 + s1;
            System.out.println(s3);
            if (s3.contains(s2))
            {
                System.out.println("s2 is a rotated version of s1");
            } else
            {
                System.out.println("s2 is not rotated version of s1");
            }
        }
    }
}
/*
run:
JavaJ2eeStrutsHibernateJavaJ2eeStrutsHibernate
s2 is a rotated version of s1
BUILD SUCCESSFUL (total time: 0 seconds)
*/
