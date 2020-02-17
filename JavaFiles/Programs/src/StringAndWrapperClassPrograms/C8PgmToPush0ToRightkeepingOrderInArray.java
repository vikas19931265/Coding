// Pgm to push 0 to right keeping order
package StringAndWrapperClassPrograms;

class Demo9
{

    public static void main(String[] args)
    {
        String str = "";
        int diffLength;
        int length;
        int length1;
        int[] elements =
        {
            0, 0, 4, 0, 0, 1, 2
        };
        for (int i : elements)
        {
            str = str + i;
        }
        length = str.length();
        String str1 = str.replaceAll("0", "");
        length1 = str1.length();
        diffLength = length - length1;
        for (int i = 0; i < diffLength; i++)
        {
            str1 = str1 + "0";
        }
        for (int i = 0; i < str1.length(); i++)
        {
            elements[i] = Integer.parseInt(Character.toString(str1.charAt(i)));
        }
        int count = 0;
        System.out.print("{");
        for (int j : elements)
        {
            if (count != elements.length - 1)
            {
                System.out.print(j + ",");
                count++;
            } else
            {
                System.out.print(j);
            }
        }
        System.out.print("}");
    }
}

/*

run:
{4,1,2,0,0,0,0}BUILD SUCCESSFUL (total time: 0 seconds)


*/