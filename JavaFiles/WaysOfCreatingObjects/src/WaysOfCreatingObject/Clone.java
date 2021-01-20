
package WaysOfCreatingObject;


      

class Employees implements Cloneable
{
    /*
    
    It is important to implement cloneable interface to make a clone of an object.
    */
    
    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();  // Here we have overriden clone method of Cloneable and return clone method implementation.
                               // implementation of the object class
    }
    
    
    public static void main(String[] args) throws CloneNotSupportedException
    {
       Employees e1= new Employees(); // created an employee object.
        
       
       //Object Cloned.
       Employees e2= (Employees)e1.clone(); // on e1 of employee type we are calling clone method which has been overriden in our class.
                                            // clone method returns object of , Object type
                                            // Since the type returned here is of Object hence we need to typecast it to Student class type
    
       System.out.println(e2);
    
    }



}


//--------------------------------------------------------------------------*******------------------------------------------