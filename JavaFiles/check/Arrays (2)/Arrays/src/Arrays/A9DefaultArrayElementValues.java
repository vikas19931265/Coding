/*

1. Once we create an array , every array element initialized with default values.

2. Whenever we are trying to print any reference variable internally toString method will be called.
   Which is implemented by default to return the string in the following form.

        Classname@hashcode_in_hexadecimaalform

*/
package Arrays;


class Test2
{
    public static void main(String[] args)
    {
       /*
        1. By default every array element in java gets a default value.
        
        2. In the below example since we have created an int array hence every array element will get a default value of 0.
        
        
      */
        
        
       int[] x= new int[3];
       
       System.out.println(x); //op-[I@15db9742
       
       System.out.println(x[0]);// Since 1d array ( only of primitive type )cannot hold any other dimension object hence default value is not null but 0.
        
       int[][] x1= new int[2][]; // In this case we created a 2d array which will hold reference for 1d array objects
                                 // point to note is that 2d array object created by default will have null values as we have not given 1d array size.
                                 // What we will do is that , we will create object and make the reference point to the object.
        
                              
       
       System.out.println(x1[0]); // o/p null-- right now an array object is created without giving 1d array size , hence 3d array references will not point to anything i.e value is null.
       
       x1[0]= new int[2]; // Here we created a 1d array and x1[0] is holding the reference of that object.
       
       System.out.println(x1[0]); //[I@6d06d69c- Now since object is held hence the null value of x1[0]  of null changes to a reference.
   
       
       int[][] x2= new int[2][1]; // We have created a 2d array and also specified 1d array size , hence 2d array will be created having references
                                  // which will be pointing to 1d array object. This is different from our first case where we created an 2d array object  
                                  // without specifying the size of 1d array object hence 2d array contains null values by default.
                                    
       System.out.println("index at"+x2[0]);// o/p I@7852e922 - as array was created specifying 1d array size , hence 2d array got created with references pointing to 1d array object.                            

    
    // There is a difference in case of objects.
       
       Test2[] t= new Test2[2];
       
       System.out.println(t);// [LArrays.Test2;@7852e922
    
       System.out.println(t[0]);// (o/p - null) Here object will store references, but since no object is held by t[0] we get null.
    
    // In case of Objects default value is always null. When an object starts pointing to it then the value changes.
        
       Test2[][] t1= new Test2[2][];
    
       t1[0]= new Test2[2];
    
       System.out.println(t1[0][0]);//null...We can make this reference point to some object but of test type only.
       
    
    
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------
