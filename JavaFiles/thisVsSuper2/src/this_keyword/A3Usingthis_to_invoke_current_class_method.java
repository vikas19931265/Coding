/*

You may invoke the method of the current class by using the this keyword. If you
don't use the this keyword, compiler automatically adds this keyword while 
invoking the method. Let's see the example


*/
package this_keyword;

class Student2
{
    String name;
    int rollno;
    
    Student2(String name, int rollno)
    {
       
        this.name=name;
        this.rollno=rollno;
        
        this.showName(); // here on current object constructor we are calling a method showName();
                          // this method will be called on the current class object that is the reason
                          // it is this.showName , however we dont need to do this explicitly as compiler
                          // by default will add the necessary code.
        
      
    }
    
    
    public void showName()
    {
        
        int rollno=this.showRollno();
        
        System.out.println(rollno);
        
        System.out.println(this.name);
    }

    public int showRollno()
    {
        return this.rollno;
    }

    
    public static void main(String[] args)
    {
        Student2 s2= new Student2("vikas",1234);
    }

}

/*
run:
1234
vikas
BUILD SUCCESSFUL (total time: 0 seconds)


*/