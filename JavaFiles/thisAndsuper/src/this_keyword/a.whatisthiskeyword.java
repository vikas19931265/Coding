
package this_keyword;


/*

1. this is a reserved keyword in java which cannot be used as an identifer.

2. this is used to refer current class instance as well as static members.

*/


// program demo on how this keyword is used to represent current instance of the object.


class Test
{
    int i;
    
    static int j; // please note that static variable can also be be accessed with this keyword.
                  // but we cannot use this keyword inside  a static block.

    
    public void Check()
    {
        this.i=100;
        
        this.j=200;
    
    
        System.out.println(i+"  "+j);
    }
    

    public static void main(String[] args)
    {
        new Test().Check();  // Here we created an object , and on the object  we are calling check method.
                             // As soon as the object got created 'i' got its default value of 0 and static variable of 0 as well.
                             // on calling the check method on the object we are changing the values of i and j to 100 and 200.
                             // Please note that static variables mostly do not change, hence this does not look a good prgoram
                                
    }


}  

//------------------------------------------------------------------------------------------************************-------------------------