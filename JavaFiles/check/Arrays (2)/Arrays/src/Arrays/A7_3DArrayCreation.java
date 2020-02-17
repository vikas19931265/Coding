// 3d Array Creation.
/*

     x---------------->                   Array(3d) (Size2)

                        Array(2d)(Size-3)         Array(2d)(Size-2)     


    Array(1d)(S1)  Array(1d)(S2)  Array(1d)(S3)       Array(1d)(S1)  Array(1d)(S2)  Array(1d)(S3)        

S denotes the size here

1. Here firstly we created a three dimensional array.

            int[][][] x= new int[2][][];

     first [] denotes base size of main 3d object which is 2.
     Second [] denotes size of two dimensional array held inside the 3d array. Since the size is not fixed we have left it blank here.
     Third[] denotes size of one dimensional array held inside the 2d array. Since the size is not fixed we have left this also blank.
     
     Here base size of the 3d array is 2 only. So we have defined size in first box as 2 only.
     Next the size of objects inside it is 3 or 2 which is not fixed hence we have not defined
    the size here instead it will be specified during the creation of the objects.


2. Now inside the three dimensional array , we will have the two dimensional array.

    Hence we need to create a two dimensional array whose reference will be held by variable in three dimensional array.

     x[0] = new int[3][]

     x[0] is reference held at 0th index in 3d array.

   Here this array base size is 3 and contains 1 dimensional array elements which do not have any kind of fixed size.
   Hence another box has been left blank and  the size of that will be given during the creation of the object.


3.  Now inside the two dimensional array we will have one dimensional array.

    x[0][0] = new int[1]

    Here the size of the one dimensional array held inside the two dimensional array is not fixed
    hence we had not given the size. Now here the size is 2.

4.
  x[0][1]= new int[2];

    Same as 3.


5. x[0][2]= new int[3];

    same as 3.

6. Now 0th index task in the main array object is over, now we move to the
    First index in two dimensional array.


    Here the two dimensional array contains one dimensional array inside it of size 2.

    Hence x[1] = new int[2][2];


*/

//-----------------------------------------------------------------------------------------******************-----------------------------------------------



