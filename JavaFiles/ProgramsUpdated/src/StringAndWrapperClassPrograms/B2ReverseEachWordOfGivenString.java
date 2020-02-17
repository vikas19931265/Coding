package StringAndWrapperClassPrograms;

/*
Write a java program to reverse each word of a given string?
 */
class Sample23
{

    public static void main(String[] args)
    {
        String s = "My name is Vikas";
        StringBuffer sb1 = new StringBuffer();
        String[] str1 = s.split(" ");
        for (String str2 : str1)
        {
            StringBuffer sb2 = new StringBuffer(str2);
            sb1.append(sb2.reverse());
            sb1.append(" ");
        }
        System.out.println(sb1);
    }
}
/*
run:
yM eman si sakiV
BUILD SUCCESSFUL (total time: 0 seconds)
 */
