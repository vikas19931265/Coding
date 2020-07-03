
package RegularExpressions;
class RemoveVowelsFromString
{
    public static void main(String[] args)
    {
        String input="vikasgautam";
        input=input.replaceAll("[aeiou]|[AEIOU]","");
        System.out.println(input);
    }
}

