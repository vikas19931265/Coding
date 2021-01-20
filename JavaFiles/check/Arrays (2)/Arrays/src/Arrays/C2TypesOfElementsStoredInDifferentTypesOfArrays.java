/*

Arrray Type                                     Allowed Element Types                         
    
primtive Types                                  Array Type which can be implicitly promoted to 
                                                declared type.

Object Type Arrays                              either declared type or its child class Objects   

Abstract class types( ex Number class)          Its child class type Objects( ex byte , short , int , long, float , double)  

interface type array                            Its implementation class Objects are allowed.



*/

package Arrays;

class Sample
{
    public static void main(String[] args)
    {
        int[] a= new int[3];
        
        a[0]='a'; // char 'a' is promoted to its ASCII value of 97.
        
        a[1]=98;
        
        System.out.println(a[0]);
    }
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------