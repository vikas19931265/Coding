/* 

Whenever we are creating child class object parent object won’t be created , just parent class constructor
will be executed for the child class object purpose only.

*/
package interfaces;

// Proof that when we are creating child object, parent class object is not created only 
// parent class constructor is called to work on child object.
 class P
{
    P()
    {
        System.out.println(this.hashCode()); // 'P' constructor is working on child object hence hashcode() will be of child object.
    }
}

class Child extends P
{
    Child()
    {   // super();       // this will call the parent constructor working on current object of Child
        System.out.println(this.hashCode()); // hashcode will be of child object.
    }

    public static void main(String[] args)
    {
         new Child(); // calling Child() constructor
    }



}

/*
run:
366712642
366712642
BUILD SUCCESSFUL (total time: 0 seconds)


*/
