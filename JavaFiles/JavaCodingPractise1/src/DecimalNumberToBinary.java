/*
 15 

 */
package New;

class DecimalToBinary {

    public static void main(String[] args) {
        int decimalNumber = 23;
        int number = decimalNumber;
        int quotient;
        String result = "";
        while (number >= 1) {
            quotient = number % 2;
            result = result + quotient;
            number = number / 2;
        }
        System.out.println(new StringBuffer(result).reverse().toString());

    }
}

/*
run:
111
BUILD SUCCESSFUL (total time: 0 seconds)

*/