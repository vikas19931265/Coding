
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
public class ReadingFileDataAsStream {
    public static void main(String[] args) throws IOException {
        
        InputStream resourceAsStream = ReadingFileDataAsStream.class.getResourceAsStream("/slabs.txt");
        InputStreamReader reader = new InputStreamReader(resourceAsStream);
        BufferedReader br= new BufferedReader(reader);
        String line = br.readLine();
        while(line!=null)
        {
            System.out.println(line);
            line=br.readLine();
        }
        

    }
    



}
