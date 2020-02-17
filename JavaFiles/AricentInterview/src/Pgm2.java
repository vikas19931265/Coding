/*
Reetesh Kumar Choubey (Guest)10:07
Ques-1:- We are given two numbers n and m, and two-bit positions, i and j.
Insert bits of m into n starting from j to i. We can assume that the bits j through i
have enough space to fit all of m. That is, if m = 10011, you can assume that there are at least 5
bits between j and i. You would not, for example, have j = 3 and i = 2, because m could not fully fit between bit 3 and bit 2.

 */

class BitFitting
{

    public static void main(String[] args)
    {
        int n = 1024;
        int m = 19;

        int i = 2;
        int j = 6;

        long bitn = bitRepresent(n);
        long bitm = bitRepresent(m);

        System.out.println("input : n:"+ n+ "\nm:"+m+"\ni:"+i+"\nj:"+j);

        String bitnString = Long.valueOf(bitn).toString();
        String bitmString = Long.valueOf(bitm).toString();
        int bitnLength = bitnString.length();
        StringBuffer sbn = new StringBuffer(bitnString);
        StringBuffer sbm = new StringBuffer(bitmString);
        //System.out.println("before insert" + sbn);
        int placeToInsert=sbn.length()-j-1;
        sbn=sbn.replace(placeToInsert, placeToInsert+bitmString.length(),"");
        //System.out.println("values after replacing" +sbn);
        sbn=sbn.insert(placeToInsert, sbm);
        //System.out.println("after insert final" +sbn);
        int value=Integer.parseInt(sbn.toString(),2);
        System.out.println("value after shift insertion for input " +value);




    }

    public static long bitRepresent(int number)
    {
        String result = "";
        while (number > 0)
        {
            int remainder = number % 2;
            result = result + remainder;
            number = number / 2;
        }

        long res = Long.parseLong(new StringBuffer(result).reverse().toString());
        return res;
    }
}

/*
debug:
values afters bit insertion 111101
BUILD SUCCESSFUL (total time: 48 seconds)

*/