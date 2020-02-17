package GenericClass;


/*

Creating our own Generic class.
===============================================================================

*/

class Gen<T>

{
    T ob;

    Gen(T ob)
    {
        this.ob= ob;
    }


    public void show()
    {
        System.out.println("The typoe of ob is "+ ob.getClass().getName());
    }


     public T getOb()
     {
         return ob;
     }
}

     class GenDemo
     {
         public static void main(String[] args)
         {

             Gen<String> g1= new Gen<String>("Durga");

             g1.show();//The type of ob is java.lang.String

             System.out.println(g1.getOb());//Durga


             Gen<Double> g3= new Gen<Double>(10.5);//The type of ob is java.lang.Double

             g3.show();//10.5

             System.out.println(g3.getOb());




         }
     }


/*
run:
The type of ob is java.lang.String
Durga
The typoe of ob is java.lang.Integer
10
The typoe of ob is java.lang.Double
10.5
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------***************************-------------------------------------------------