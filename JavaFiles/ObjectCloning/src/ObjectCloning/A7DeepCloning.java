package ObjectCloning;

/* Deep cloning
===================================
The process of creating exactly duplicate independent copy including contained 
object is called as Deep Cloning.

In deep cloning if the main object contain any primitive variables then in the 
cloned object duplicate copies will be created.

If the main object contains any reference variable then the corresponding contained 
objects will also be created in the cloned copy.

By default object class clone() method is meant for shallow cloning. It is the programmer 
responsibility in order to  provide the new implementation of the clone() method if deep cloning
is needed by overriding clone() method in our class.

By cloned object reference if we perform if we perform any change to the contained 
object then those change will not be reflected to the main object.   	*/
   
/*Deep cloning program. */


class Cats
{
    int j;
    Cats(int j)
    {
        this.j=j;
    }
}

class Dogs implements Cloneable
{
    Cats c;
    int i;
    Dogs(Cats c, int i)
    {
        this.c=c;
        this.i=i;
    }
    
    

    public Object clone() throws CloneNotSupportedException
    {
        Cats c1= new Cats( c.j);
        Dogs d= new Dogs(c1, i);
        return d;
    }
}

class DeepCloning
{
    public static void main(String[] args) throws CloneNotSupportedException
    {
        Cats c = new Cats(20);
        Dogs d1= new Dogs( c, 10);
        
        System.out.println(d1.i+"...."+d1.c.j);
        
        Dogs d2= (Dogs)d1.clone(); // Created cloned object of Dog class
        d2.i=888; // Changed  value of cloned object , this change wont reflect in original objects
        d2.c.j=999;
        
        System.out.println(d1.i+"...."+d1.c.j);
    }
}

/*o/p 
run:
10....20
10....20
BUILD SUCCESSFUL (total time: 0 seconds)
*/

//----------------------------------------------------------------------------------****************-------------------------------------------------------