package Operators;

/*

Explicit typecasting
----------------------------

1. programmer is responsible for explicitly typecasting whenever we are assigning
   bigger data type value to smaller data type value then explicit typecasting is
   required

2. It is also known as narrowing or downcasting.

3. There may be a chance of loss of information in this typecasting


   byte---->short\
                    int----long---float---double     
                   /     
            char--/

The following are various possibilities where explicit typecasting is required.


left to right----> implicit typecasting

Right to left----> explicitly typecasting.



How 130 became -126??( how has the loss of information happened)
----------------------------------------------------------------

Whenever we are assigning bigger data type value  to the smaller data type variable
then by explicitly typecasting most significant bits will be lost.

We have to consider only least significant bits.


int x =130;

    Firstly we have to represent this in 32 bits hence

        0000000000....010000010

        Now we are converting it to byte hence only last 8 bits
        will be considered.

        Sign (MSB) will be ignored as MSB are lost

  byte b =(byte) x---> 10000010

    1---> is the sign bit.

    left-------> 0000010

   Now w have to first perform 1st complement on left number and then 2s complement
  if   sign is negative

           0000010
           
            |---> 1s complement

          11111101

                 1-------------> 2s complement
-------------------------------
         11111110
        ---------------

1    1    1   1   1   1   0

2^6 2^5  2^4 2^3 2^2 2^1  2^0   =   -126 




*/
 class Test {
    
     public static void main(String[] args)
     {
         int x =130;
         
       
         try{
         
         byte b = x; // CE: possible loss of precision found: int required byte
         
         }
         
         catch(Exception e){}
         
         byte b1=(byte)x;
        
        System.out.println(b1); //-126
     
     
     
     }
 
 }

/*
run:
-126
BUILD SUCCESSFUL (total time: 0 seconds)

*/

