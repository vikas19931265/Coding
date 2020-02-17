// ACCESSING STATIC VARIABLES WITH CLASS NAME.



package bStaticVariables;


class Test4
{
    
    static int x=10; // static variable

    int y=5;  // non static variable.
    public static void main( String [] args)
    {
        
        Test4 t4= new Test4();
        int k=t4.y;  // it is possible to access a non static variable static method indirectly by creating object of that class.
        
        
        
        System.out.println(Test4.x); 
        
        /*
        
        Static variables are accessed with help of the class name.
        Here we used Test4.x to access the static variable x.
        
        but since we are in the same class , this variable can be accessed directly as well.
        
        */
        
        System.out.println(x);  // Accessing this static variable directly as we are in the same class.
        
    }

}




