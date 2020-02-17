/*

public void setCharAt(int index, char ch);

    To replace the character located at specified index with the
    provided character.




public StringBuffer append(String s) // overloaded methods
public StringBuffer append(int  s)
public StringBuffer append(long s)
public StringBuffer append(char s)
public StringBuffer append(boolean s)

        We can apply append not only for String, but for any type given as example
        above.






*/
package StringBufferMethodsByDurga;

 class append
{

    public static void main(String[] args)
    {

        StringBuffer sb = new StringBuffer();

        sb.append(3.14);

        sb.append("It is exactly");

        sb.append(true);

        sb.setCharAt(0,'v'); // to replace the character at specified position.

        System.out.println(sb); //3.14It is exactly true
    }
}
