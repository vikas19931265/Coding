// Array Object at instance level/static/local level

/*

1. Once we create an array, every array element by default initialized with default values.

2. This is irrespective of whether it is instance, or static or local array.

3. Reference variables are initialized to null by default in case of instance/static.

4. Primitive variables like int, float are initialized to there respective default values.

5. If we create an array of int, then all values by default in array will be initialized to 0.

6. If an array of types student is created then all the values in the array will be by default null.


[note]

    If any array is created in global area( instance/static) , and we are not making reference point to any
    object then in that case JVM by defalut will make it point to null.

    However in case of local area we have to manually assign a default pointing object ( null )to variable.



*/
package aInstanceVariables;


class Test8
{
    
    int[] x;    // instance level array object reference declaration with no object held.
    
    static int[] y = new int[5]; // static leve array reference pointing to object.
    
    public static void main( String[] args)
    {
        int [] z = new int[3]; // local array whose initialization is necessary.
        
        Test8 t= new Test8();
        
        System.out.println(t.x); // Since x is an Array reference at instance level , x value by default is null.
        
        System.out.println(t.x[0]); // This will give us run time error , as reference in this case is pointing to null but still we are trying to fetch a value.
        
        System.out.println(Test8.y); // Static reference variable pointing to object, hence Classname@hashocode will be printed.
        
        System.out.println(Test8.y[0]); // by default an int array will contain int values with default 0.
    
        System.out.println(z);// local array reference ,  reference variable pointing to object, hence Classname@hashocode will be printed.
        
        System.out.println(z[0]); // this will give answer 0 as by default int array is initialized with 0.
    
    
    }




}