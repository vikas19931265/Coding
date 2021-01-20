/*

toString() vs hashCode()
----------------------------

1. If we are giving the chance to object class toString() method to execute
   then it will internally call the hashCode method.

2. If we are overriding the toString() method , then our toString() method may not call our
   hashCode method.

*/

// Object----> toString() method called
// Object---->hashCode() method called.

package javalanggpackage;

class Test1
{
    int i;
    
    Test1(int i)
    {
        this.i=i;
    }


    public static void main(String[] args)
    {
        
        Test1 t1= new Test1(10);
        
        Test1 t2= new Test1(100);
        
        System.out.println(t1);//Test1@6bc7c054
        
        System.out.println(t2);//Test1@232204a1
    }

}



