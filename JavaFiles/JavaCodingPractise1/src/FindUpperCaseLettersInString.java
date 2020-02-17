
package New;

class UpperCaseLetterInString
{
    public static void main(String[] args)
    {
        String input="MyNameIsVikasGautam";
        for(int i =0; i<input.length();i++)
        {
            if((int)input.charAt(i)>=65 && (int)input.charAt(i)<=90)
            {
                System.out.println(input.charAt(i));
            }
        }
        
    }
}