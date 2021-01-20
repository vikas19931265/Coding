/*

Consider the following person class.
-------------------------------------

Choose which of the hashCode() method is correct.


note
----------

Based upon the parameters we override .equals() method , it is highly recommended to use the 
same parameters while overriding hashCode() method also based upon same parameters.

In all the collection classes, in all wrapper classes and in the String class .equals() method 
is overridden for the purpose of content comparison hence it is highly recommended to override 
equals() method in our class also for content comparison.

*/

package newpackage;


class Person
{
    
    String name;
    
    int age;
    
    
    Person(String name, int age)
    {
        this.name=name;
        
        this.age=age;
    }
    
    public boolean equals(Object obj)
    {
        if(obj instanceof Person)
        {
            Person p =(Person)obj;
            
            if(name.equals(p.name) && age==p.age)
            {
                return true;
            }
        
            else
            {
                return false;
            }
        
        
        
        
        }
    
    
        return false;
    
    }



    public int hashCode()
    {
        return name.hashCode()+age;
    }



    public static void main(String[] args)
    {
        
        Person p = new Person("vikas",12); //112209494
        
        Person p1= new Person("vikas",12);//112209494
        
        System.out.println(p.hashCode());
        
        System.out.println(p1.hashCode());
        
    }
    
    
    
}

/*
run:
112209494
112209494
BUILD SUCCESSFUL (total time: 0 seconds)

*/

/*

which of the below code is valid for hashCode()method

1. public int hashCode()
    {
        return 100;
    }


2. public int hashCode()
    {

        return age+ssno;
    }


3. public int hashCode()------> This is valid rest are invalid
    {

        return name.hashCode()+age;
    }


4. No restrictions




*/
