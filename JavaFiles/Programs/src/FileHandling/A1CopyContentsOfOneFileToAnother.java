package FileHandling;
import java.io.*;


class Demo1
{
    public static void main(String[] args) throws Exception
    {
        File f= new File("/home/vikas/Desktop/RAWTEXT");

        BufferedReader br = new BufferedReader(new FileReader(f));

        PrintWriter out= new PrintWriter("/home/vikas/Desktop/CopyFile");

        String line=br.readLine();

        while(line!=null)
        {
            out.println(line);

            line=br.readLine();
        }

        br.close();

        out.flush();

        out.close();

    }
}