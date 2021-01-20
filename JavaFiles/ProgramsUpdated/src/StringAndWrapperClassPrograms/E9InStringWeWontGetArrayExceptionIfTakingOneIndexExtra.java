/*
Cheking length of string. Here there is only one char at index 0 but
we can do str.substring(1) as the next charater is nothing but the empty.
 */
package StringAndWrapperClassPrograms;

class E9InStringWeWontGetArrayExceptionIfTakingOneIndexExtra
{

    public static void main(String[] args)
    {
        String str = "v";
        System.out.println(str.substring(1));
        System.out.println(str.length());
    }
}
/*
run:
1
BUILD SUCCESSFUL (total time: 0 seconds)
*/
