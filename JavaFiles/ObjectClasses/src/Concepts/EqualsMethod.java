

package Concepts;
class EqualsMethod {

    public static void main( String[] args)
{
   
    Students1 s1= new Students1(1234, "vikas");
    Students1 s2= new Students1(1234,"vikas");
    Teachers t1= new Teachers("srimati","HR");    
    if(s1.equals(s2))
            {
            System.out.println("Both objects are equal");
            }

        else
            {
            System.out.println(" Both objects are not equal");
            }

}
}

class Students1

{
    int rollno;
    String name;
    
    Students1( int rollno, String name)
    {
        this.rollno=rollno;
        this.name=name;
        
    }

    @Override
    public boolean equals(Object o)
    {
        if(o instanceof Students1)
            {    
                Students1 st= (Students1)o;
                if(this.rollno==st.rollno && this.name.equals(st.name))
                {
                    return true;
                }

                else
                {
                    return false;
                }

            }

        else
            {
                return false;
            }

    }

}
    class Teachers

{
    String name;
    String designation;
    
    Teachers( String name, String designation)
    {
        this.name=name;
        this.designation=designation;
    } 
    
}



