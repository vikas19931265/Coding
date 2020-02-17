
package RegularExpressions;

class MoveAllCharsToEndOfString
{
    public static void main(String[] args)
    {
        String input="vikas@#%gautam";
        input= input.replaceAll("[^\\w+]","") + input.replaceAll("\\w",""); // when using more then only special char(^ and \\ here please put it inside bracket]'
        System.out.println(input);
    }

}

   /*
    run:
vikasgautam@#%
BUILD SUCCESSFUL (total time: 0 seconds)
    */
