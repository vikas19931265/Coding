

class ReverseString
{
    public static void main(String[] args)
    {
        String line="vikasgautam";
        String newLine="";
        for(int i=line.length()-1; i>=0 ; i--)
        {
            newLine=newLine+ Character.toString(line.charAt(i));
        }
        line=newLine;
        System.out.println(line);
    }
}

/*
run:
matuagsakiv
BUILD SUCCESSFUL (total time: 0 seconds)

*/