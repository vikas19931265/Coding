/*

public String substring( int begin);

    This will return substring from begin index to end of the String.


public String substring( int begin, int end);

    returns substring from begin index to end -1 index.


*/
package StringClassMethodsByDurga;

class substring {

     public static void main(String[] args)
     {

        String s ="abcdefg" ;

        System.out.println(s.substring(3)); // defg

        System.out.println(s.substring(2, 6)); // cdef

       }

}


/*
run:
defg
cdef
BUILD SUCCESSFUL (total time: 0 seconds)

*/
