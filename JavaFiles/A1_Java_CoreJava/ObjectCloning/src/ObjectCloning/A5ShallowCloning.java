
/*
Shallow cloning
========================================

-> The process of creating bitwise copy of the object is called as shallow cloning.

-> If the main object contain primitive variables then exactly duplicate copies will be created in the cloned object.

-> If the main object contains any reference variable then corresponding object will not be created ,
   just duplicate reference variable will be created pointing to old contained object.

->  Object class clone method is meant for shallow cloning. */

/*Shallow cloning program proof*/

package ObjectCloning;


 class Cats11
{
    int j;
    Cats11(int j)
    {
        this.j=j;
    }
            
}

class Dogs11 implements Cloneable
{
    Cats11 c;
    int i;
    Dogs11(Cats11 c, int i)
    {
        this.c=c;
        this.i=i;
    }


    public Object clone() throws CloneNotSupportedException
    {
    return super.clone();
    }
}

class Shallowcloning
{
    public static void main(String[] args) throws CloneNotSupportedException
    {
        Cats11 c= new Cats11(20);
        Dogs11 d1= new Dogs11(c,10);
        System.out.println(d1.i +"...."+d1.c.j);
        Dogs11 d2= (Dogs11)d1.clone(); // Created cloned object.
        d2.i=888; // Changed cloned object value, this change will reflect in original object.
        d2.c.j=999;
        System.out.println(d1.i+"...."+d1.c.j);
        
        
        
    }
}

/* o/p
run:
10....20
10....999
BUILD SUCCESSFUL (total time: 0 seconds) */

//----------------------------------------------------------------------------------****************-------------------------------------------------------