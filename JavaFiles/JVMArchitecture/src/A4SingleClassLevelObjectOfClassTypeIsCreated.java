/*

For every loaded type , only one Class class  object will be created even though we are using
the class multiple types in our program.

In the below program even though we are using the Student class multiple times only
one class Class object got created.

*/


class Students
{
    public String getName()
    {
        return null;
    }

    public int getRollno()
    {
        return 10;
    }


}


class Tests
{
    public static void main(String[] args) throws Exception
    {
   
        Students s1= new Students();//class student is loaded in method area
                                    //and then jvm creates the corresponding class object
        
        Class c1=s1.getClass();
        
        Students s2= new Students(); //loading happens only once and not again.
        
        Class c2= s2.getClass();
        
        System.out.println(c1.hashCode()); //proof the only single object of class Class type
                                           //holding student information was created.
        
        System.out.println(c2.hashCode());
        
        System.out.println(c1==c2);
                
    
    
    
    
    }
}

/*
run:
1252169911
1252169911
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/