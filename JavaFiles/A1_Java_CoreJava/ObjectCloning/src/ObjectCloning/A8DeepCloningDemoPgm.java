package ObjectCloning;

/*

    Deep Cloning Demo program
    ============================
    
*/

class Student13 implements Cloneable
{
    Graduate13 c;
    int rollNo;
    
    Student13(Graduate13 c, int rollNo)
    {
        this.c=c;
        this.rollNo=rollNo;
    }

    
    protected Object clone() throws CloneNotSupportedException
    {
        
        
        
        Graduate13 c= new Graduate13(this.c.i); 
        /*
        
            c.j
            ============
            
            Current object is of Student type so on Student object we
            are accessing Graduate c reference held inside that. And 
            then using the c reference we are trying to get access to the
            j variable.
            
            **So what we have done is that , we have extracted the value
            of Graduate from the Student and using the value we have 
            created a new Graduate object.
            
            This graduate object will be later passed to the Student object.
        
        
        */
        
        Student13 s1= new Student13(c, rollNo); // rollNo value is fetched from current Student object. 
        
        return s1;
        
    }
    
    
}


class Graduate13
{
    int i;
    
    Graduate13(int i)
    {
        this.i=i;
    }
}



 class Driver13
{
    public static void main(String[] args) throws CloneNotSupportedException
    {
        Graduate13 c = new Graduate13(10);
        
        Student13 s = new Student13(c,20);
        
        System.out.println("Main object values"+s.c.i+" "+s.rollNo);
        
        Student13 s1 = (Student13)s.clone();
        
        System.out.println("Cloned object values "+ s1.c.i+" "+s1.rollNo);
   
        s.c.i=40; // changing main object value of i which belongs to type Graduate.
        
        System.out.println("main object value after change" + s.c.i+" "+ s.rollNo);
        
        System.out.println("value of cloned object after change" + s1.c.i+ " "+s1.rollNo);
        
    }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Main object values10 20
Cloned object values 10 20
main object value after change40 20
value of cloned object after change10 20
*/

