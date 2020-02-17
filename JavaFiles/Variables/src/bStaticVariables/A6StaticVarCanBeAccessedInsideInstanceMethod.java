package bStaticVariables;

/*

1. It is possible to access the static variable from non-static area  directly.

2. This is the same concept of static variable getting loaded during the class loading.

3. So the static stuff gets loaded during the class loading and hence can be used by the instance method or objects as sharing. Here the same static content is shared by all the objects.

4. But the vice versa of this is not possible, as a non-static variable cannot be accessed from the static context directly.
   In that case we have to access it with the help of the object creation or by using the class name.
    

*/


class Test89
{
     static int i=200;
    
    public  void getMethod()  // static variables can be used inside the non-static area directly.
    {
       System.out.println(i+i);
    }

}

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------
