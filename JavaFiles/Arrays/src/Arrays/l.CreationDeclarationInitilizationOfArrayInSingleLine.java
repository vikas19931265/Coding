// Array declaration, creation and initialization in a single line.

/*

1. We can declare , create and initialize an array in a single line.

    int[] x;
    x= new int[3];
    x[0]=10;
    x[1]=20;
    x[2]=30;
    
 This can be shortened 

    int[] x={10,20,30);

    char[] ch={'a','b','c','d','e'};

    String[] A={"A" ,"AA" ,"AAA"}; 


2. We can use this shortcut for multidimensional arrays also.

                         Array1
                  Array(10,20)   Array(30,40)

  int[][] x={ {10,20} , {20,30} };


3. If we want to use this shortuct , compulsory we should perform all activities in a single line.
   If we are trying to divide into multiple lines then we will get compile time error.   

                example

                        int[] x={10,20,30};

              If we try to divide this into multiple lines then

              int[] x;
              x={10,20,30}  // illegal start of expression.

*/

//-----------------------------------------------------------------------------------------******************-----------------------------------------------
