
/*

overridding equals() method demo program
=======================================================

*/

package javalanggpackage;

class Stud
{
    String name;
    
    Stud(String name)
    {
        this.name=name;
    }


    public boolean equals(Object o)
    {
        
        if( this.name.equals(((Stud) o).name))  // name of String type , In string class .equals() method is already overidden
        {
            return true;
        }
        
        else 
        {
            return false;
        }
    }
    
    public static void main(String[] args)
    {
        
        Stud s1= new Stud("Vikas");
        
        Stud s2= new Stud("Vikas");
    
    
        System.out.println(s1.equals(s2));
    
    }


}

/*
run:
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/