package StringAndWrapperClassPrograms;

class Demo2
{

    static int result = 0;

    public static void main(String[] args)
    {
        String input = "onetwothreefour";
        String str = "";
        String output = "";
        String finalValue = "";
        for (int i = 0; i < input.length(); i++)
        {
            str = str + input.charAt(i);
            if (str.equals("zero"))
            {
                output = output + "0";
                str = "";
            } else
            {
                if (str.contains("zer0"))
                {
                    output = output + "+0";
                    str = "";
                }
            }
            if (str.equals("one"))
            {
                output = output + "1";
                str = "";
            } else
            {
                if (str.contains("one"))
                {
                    output = output + "+1";
                    str = "";
                }
            }
            if (str.equals("two"))
            {
                output = output + "2";
                str = "";
            } else
            {
                if (str.contains("two"))
                {
                    output = output + "+2";
                    str = "";
                }
            }
            if (str.equals("three"))
            {
                output = output + "3";
                str = "";
            } else
            {
                if (str.contains("three"))
                {
                    output = output + "+3";
                    str = "";
                }
            }
            if (str.equals("four"))
            {
                output = output + "4";
                str = "";
            } else
            {
                if (str.contains("four"))
                {
                    output = output + "+4";
                    str = "";
                }
            }
            if (str.equals("five"))
            {
                output = output + "5";
                str = "";
            } else
            {
                if (str.contains("five"))
                {
                    output = output + "+5";
                    str = "";
                }
            }
            if (str.equals("six"))
            {
                output = output + "6";
                str = "";
            } else
            {
                if (str.contains("six"))
                {
                    output = output + "+6";
                    str = "";
                }
            }
            if (str.equals("seven"))
            {
                output = output + "7";
                str = "";
            } else
            {
                if (str.contains("seven"))
                {
                    output = output + "+7";
                    str = "";
                }
            }
            if (str.equals("eight"))
            {
                output = output + "8";
                str = "";
            } else
            {
                if (str.contains("eight"))
                {
                    output = output + "+8";
                    str = "";
                }
            }
            if (str.equals("nine"))
            {
                output = output + "9";
                str = "";
            } else
            {
                if (str.contains("nine"))
                {
                    output = output + "+9";
                    str = "";
                }
            }
            if (str.contains("minus"))
            {
                output = output + "-";
                str = "";
            }
        }
        finalValue = output.replace("+-", "-");
        finalValue = output.replace("--", "+");
        finalValue = output.replace("++", "+");
        finalValue = output.replace("-+", "-");
        System.out.println("String expression is " + finalValue);
        finalValue = finalValue.replace("+", " + ");
        finalValue = finalValue.replace("-", " - ");
        String[] finalValueArray = finalValue.split(" ");
        String flag = "add";
        for (int i = 0; i < finalValueArray.length; i++)
        {
            if (i % 2 != 0)
            {
                if (finalValueArray[i].equals("-"))
                {
                    flag = "sub";
                } else
                {
                    flag = "add";
                }
            } else
            {
                if (flag.equals("add"))
                {
                    result = add(Integer.parseInt(finalValueArray[i]));
                } else
                {
                    result = sub(Integer.parseInt(finalValueArray[i]));
                }
            }
        }
        System.out.println("result is " + result);
    }

    public static int add(int res)
    {
        result = result + res;
        return result;
    }

    public static int sub(int res)
    {
        result = result - res;
        return result;
    }
}
/*
run:
String expression is 4+8
result is 12
BUILD SUCCESSFUL (total time: 0 seconds)
 */
