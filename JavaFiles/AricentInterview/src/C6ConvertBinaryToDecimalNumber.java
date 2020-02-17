/*

Inbuilt function to convert binary number to decimal number
*/

class BinaryToDecimal
{
    public static void main(String[] args)
    {
        String binaryNumber="111";

        int value=Integer.parseInt(binaryNumber,2);
        System.out.println(value);
    }
}

/*
run:
7
BUILD SUCCESSFUL (total time: 0 seconds)

*/