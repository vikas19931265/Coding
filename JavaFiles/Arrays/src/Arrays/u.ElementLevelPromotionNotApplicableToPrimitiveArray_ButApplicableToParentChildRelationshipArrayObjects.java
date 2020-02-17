/* Case 1

1. Element level promotions are not applicable at array level.

2. For example char elements can be promoted to int type whereas char[] cannot be promoted to int
   array.

Which of the following promotions will be performed automatically?

    char to int (Valid)
    char[] to int[]( invalid)
    int  to double(valid)
    int[] to double[] (invalid)
    float to int(invalid)
    float[] to int[](invalid)
    String to Object(valid)
    String[] to Object[]( valid)

String[] to Object[]( special case)

[note]
In case of this Object type arrays child class type array can be promoted to parent class type array

Hence in case of Object, child object type can be promoted to parent object type.

*/
package Arrays;


 class NewClass20
{
    
     public static void main(String[] args)
     {
         int[] x={10,20,30,40};
         
         int[] b=x;
         
         char[] ch={'a','b','c','d'};
         
         //int[] c= ch;
     
         /*
         
         error: char array to int array is not acceptable as both of them are of different object types.
         
         incompatible types:
         found:char[]
         required: int
         
            */
     
        String s = new String("Vikas");
     
        Object o= (Object)s; // We can convert String to Object type as child type can be promoted to parent type
     
     
        char c1= 'c';
     
        int a= c1; // c1 can be promoted to int type
     
     
     
        String[] s1= {"a","b","c"};
     
        Object[] a1=s1; // This is a special case where a child class array of class object can be converted to the object type.
                    // In short we can say  since object is root class of all the classes hence all class type arrays can be converted to
                    // the object type array.
     
                   // Similar to this child class array of number type (byte, short, int , long)  can be promoted to number type hence this concept works in case of classes
                   // with parent child relationship
     }
  
 
}

//-----------------------------------------------------------------------------------------******************-----------------------------------------------