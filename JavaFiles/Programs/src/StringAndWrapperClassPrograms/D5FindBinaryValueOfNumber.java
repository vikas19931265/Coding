/*

Find binary value of 15

*/
package StringAndWrapperClassPrograms;


 class Demo31
{
     public static void main(String[] args)
     {
          int number=86;
          int remainder=0;
          String result="";
          while(true)
          {
              if(number>1)
              {
                remainder=number%2;
                result=result+remainder;
                number=number/2;
              }

              else
              {
                      remainder=number%2;
                      result=result+remainder;
                      break;
              }




          }

            System.out.println(new StringBuffer(result).reverse());
          }

     }

/*
run:
1010110
BUILD SUCCESSFUL (total time: 0 seconds)
it
*/