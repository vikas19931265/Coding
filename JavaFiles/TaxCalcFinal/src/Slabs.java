
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/*
This class will read the tax slabs from slabs file and dynmically generate the tax
*/

class Slabs {
    
    public static double readSlabs(double amount) throws FileNotFoundException, IOException
    {
       
       if(amount<=500000)
       {
           return 0.0;
       }
        
        InputStream resourceAsStream = Slabs.class.getResourceAsStream("/slabs.txt");
        InputStreamReader reader = new InputStreamReader(resourceAsStream);
//        FileReader fr= new FileReader("./src/slabs.txt");
        BufferedReader br = new BufferedReader(reader);
        String line= br.readLine();
        double totalAmount=0.0;
        
        while(line!=null)
        {
            System.out.println(line);
            
            String[] value=line.split((","));
            // read the first line and calculate tax for this
            double lowerLimit=Double.parseDouble(value[0]);
            double taxPercent=Double.parseDouble(value[2]);
            if(value[1].equals("MORE") &&  amount>=lowerLimit)
            {
                totalAmount=totalAmount+((amount-lowerLimit+1)*taxPercent);
                System.out.println("total amount is " + totalAmount);
                return totalAmount;
            }
            else {

                double upperLimit = Double.parseDouble(value[1]);
                   if(amount>upperLimit)
                   {
                    totalAmount=totalAmount+((upperLimit-lowerLimit+1)* taxPercent);
                    System.out.println("total amount is " + totalAmount);
                   }
                   else
                   {
                       totalAmount=totalAmount+((amount-lowerLimit+1)* taxPercent);
                    System.out.println("total amount is " + totalAmount);
                    return totalAmount;
                   }
            }
        line=br.readLine();
        }
           
        return totalAmount;
    }

    public static void main(String[] args)
    {
        try {
            readSlabs(1000002);
        } catch (Exception e) {
           
        }
    }


}
