/*

program demonstarting , when equals() method is overriden, hashCode() method
should also be overidden in such a way that for equal objects same hashCode() should be returned.


Points to Note---> by vikas
-------------------------------

1. Earlier i thought that if hashCode() of two objects is same then both the references
   are pointing to same object. This is right only for those classes whose equals method 
   and hashCode() method is not overriden or we can say for user defined classes.


2. It is possible that hashCode() of two objects is same but both of them are ponting to different objects.

3. To check if two references are pointing to same object or not always use the == operator.


*/
package newpackage;


class Students
{
    
    int rollno;
    
    String name;
    
    int hashCode;
    
    Students( int rollno, String name)
    {
        this.rollno= rollno;
        
        this.name=name;
        
        this.hashCode=hashCode(); // while object is created at the same time hashCode() is also given to it. We dont have
                                  // have to write any setter code to set the value of  hashCode()
    }


    public boolean equals(Object o)
    {
        
        Students s = (Students)o;
        
        
        if(this.rollno==s.rollno && this.name.equals(name))
        {
            return true;
        }
    
        else
        {
            return false;
        }
    
    
    }


  public int hashCode()
  {
      
      return this.name.hashCode() + this.rollno;
      
      
  }


  public static void main(String[] args)
  {
      
      Students s1 = new Students(1234,"vikas");
      
      Students s2= new Students(1234,"vikas");
      
      System.out.println(s1.hashCode);//112210716
      
      System.out.println(s2.hashCode);//112210716
      
      
  }
  
  
}
