
package StringAndWrapperClassPrograms;

class DemoPgm {

    public static void main(String[] args) {
        int value = new DemoPgm().findValue(100, 250, 3);
        System.out.println(value);
    }

    public int findValue(int lowerBound, int upperBound, int number) {

        int count = 0;
        int length = 0;
        for (int i = lowerBound + 1; i < upperBound; i++) {

            String element = Integer.toString(i);
            String ele1=element;
            element = element.replaceAll("[^3]", "");
            if (element.length() == 0) {
                continue;
            }
           // System.out.println(ele1);
            length = element.length();
            count = count + length;
        }

        return count;
    }

}

/*
run:
35
BUILD SUCCESSFUL (total time: 0 seconds)

*/
