

class Sample
{
    public static void main(String[] args)
    {
        java.util.Date d = new java.util.Date();
        
        System.out.println(d);
        
        long l =d.getTime();
        
        java.sql.Date d1= new java.sql.Date(l);
        
        System.out.println(d1);
        
        
    }
}

/*
run:
Thu Dec 06 14:41:57 IST 2018
2018-12-06
BUILD SUCCESSFUL (total time: 0 seconds)

*/