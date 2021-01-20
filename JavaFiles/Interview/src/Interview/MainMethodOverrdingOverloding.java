// Can we overrdie or overload main method() in java.
/*

1. It is possible to overload main method in java.
2. However it is not possible to override main method in java , as a method which is declared as static cannot be overrdien.



*/



package Interview;

public class MainMethodOverrdingOverloding {
    
    public static void main(String args)
    {
        System.out.println("1st overload");
    }

    public static void main(String[] args)
    {
        System.out.println("2nd overload");
        MainMethodOverrdingOverloding.main("vikas");
    
    }

    public static void main(String args, String args1)
    {
        System.out.println("3rd overload");
    
    }


}

class test extends MainMethodOverrdingOverloding
{
    public static void main(String args)
    {
        System.out.println("1st overload is overriden now");
    }
}



class testDrive
{
    
    public static void main(String[] args)
    {
        MainMethodOverrdingOverloding.main("");
        test.main("");
        
    }


}