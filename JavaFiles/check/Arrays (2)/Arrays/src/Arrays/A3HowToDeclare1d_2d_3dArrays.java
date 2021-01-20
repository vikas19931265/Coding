// How to declare array one dimensional Array??
//===================================================================
/*

1. int[] x;

2. int []x;

3. int x[];

int[] x is recommended way to declare an array as name is clearly separated from type.


At the time of declaration we cannot specify the size otherwise we will get compile time error.

int[6] x; // This is invalid as we cannot apply size during array declaration.

int[] x; // This is valid.



// How to declare two dimensional Array??
-----------------------------------------
int[][] x;(most commonly used.)

int [][]x;

int x[][];

int[] []x;

int[] x[];

int []x[];

All these are legal ways to declare two dimensional arrays.



Which of the following are valid??

1. int[]  a, b  [a is one dimensional, b also one dimensional]

2. int[]  a[],b; [ a is two dimensional, b is one dimensional]

3. int[]  a[],b[]; [a is two dimensional , b is two dimensional]

4. int[] []a, b;  [ a is two dimensional, b is two dimensional] ( most commonly used.)

5. int[] []a, b[]; [ a is two dimensional, b is three dimensional]

6. int[]  []a, []b; [ error]

error: if we want to specify dimension before the variable then that facility is applicable only for the
        first variable in the declaration.

       If we are trying to apply for next variable onwards we will get compile time error.


        int [] []a, []b ,[]c;

        This is invalid as we can apply dimension before reference variable only for the first variable not for rest.



 //How to declare three dimensional Arrays?
-------------------------------------------------
 
int[][][] a; ( most commonly used.)
 
 int [][][]a;

 int a[][][];

 int[] [][]a;

 int[]  a[][];

 int[] []a[];

 int[][] []a;

 int[][] a[];

 int  [][]a[];

 int []a[][];



*/
////-----------------------------------------------------------------------------------------******************-----------------------------------------------