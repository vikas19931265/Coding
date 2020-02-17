package pmtoolnew;




import java.io.*;
import java.util.Scanner;

public class PMFTool {

    public static void main(String[] args) throws FileNotFoundException, IOException {
        
      
        while (true)
       {
       
        System.out.println("Enter the path of Directory");
        
        Scanner address1= new Scanner( System.in);
        
        String directoryaddress1=address1.nextLine();
        
        File diraddress= new File(directoryaddress1);
        
      
        if( diraddress.exists())
          
        {   
        while( true)
        {
        
      
        System.out.println();
        System.out.println();
        System.out.println("1.Billed Products Information( FD codes)");
        System.out.println("2.Total products ");
        System.out.println("3.Exit");
        System.out.println("4.FD Products List");
        System.out.println("5 S codes List");
        System.out.println("6.ET codes List");
        System.out.println("7.P codes List");
        System.out.println("8.Rename Files( As per xml format consumed by AIB( SAAS-S/ET/P/FD.)");
        System.out.println("9.Rename Files(with only code for Bulk comparison)(SAAS-S/ET/P/FD/BILLING/OS)");
         System.out.println("--------------------");
        
        try 
        { 
          System.out.println(" \n Enter Your Choice");
        Scanner cn= new Scanner( System.in);
        int input= cn.nextInt();
        File newDir=new File(directoryaddress1);
        File newDir1=new File(directoryaddress1);
        String[] fileList= newDir.list();
        FileReader f=null;
        FileReader f1=null;
        FileReader f2= null;
        int count=0;
        int check=0;
        int failedStatus3=1;
        int failedStatus4=1;
        int failedStatus5=1;
        int failedStatus6=1;
        int failedStatus7=1;
        int failedStatus8=1;
        int failedStatus9=1;
        int failedStatus=1;
        int renameStatus1=0;  
        int renameStatus=0;  
        int contain=1;
        int fail1=0;
        int fail2=0;
        int aib=0;
        int status1;
        int status2;
        int status3;
        int option1=1;
        switch(input){
          
        case 1:
        
       // System.out.print("check");
        
        for(File file: newDir.listFiles())
        {
     
            f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
        String billing = "Billing";
        
        String s = br.readLine(); // this check if file contains billing word
//System.out.println(s);
        String s1 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s5= br5.readLine(); // once billing word is found , it checks for the kind of the code.
       
 //System.out.println(s5);      
       
try{

 while(s5!=null)
    {
         if(s5.contains("S30:fulfilmentDecomposition"))
 
            {
                check=1;
                while (s != null)
                {
                    
                    if (s.contains(billing) && s.contains(":name"))
                    
                    {
                
                        count++;    // billing word found in line , hence increase the count.
                    
                        
                           while (s1 != null) 
                           
                           {
                    
                             if (s1.contains("primaryIdentifier")) 
                                {
                            
                                    String trim1=s1.trim();
                                    
                                    
                                    System.out.printf("%-1s",trim1.substring(23, (trim1.length() - 24)));
                                    System.out.print("  ");
                                }

                                if (s1.contains("description")) 
                                {
                                     String trim2=s1.trim();
                                     System.out.printf("%-50s",trim2.substring(17, (trim2.length() - 18)));
                                   System.out.print('\t');
                                     break;
                                }

                            s1 = br1.readLine();
                        
                           }
                           //s1 = br1.readLine();

                       String trim=s.trim();

                       String trim4=(trim.substring(10, (trim.length() - 11)));    
                   
                       System.out.printf("%-19s",trim4);
                       System.out.print('\t');
                       System.out.println();
                       break;
                        
                    }
           
                       
                    s = br.readLine(); // 'billing' word not found hence read the next line.
        
        
                } //while s!=null
    
                   break;
            } 
                s5= br5.readLine();
    
            
          
                    
                    
    }
    
}

catch( Exception e)
{
    System.err.println("Fetch failed...Invaild files found");
    failedStatus8=0;
    br.close();
    br1.close();
    br5.close();
   // System.exit(0);


}

  
   br.close();
    br1.close();
    br5.close();
       }
        
       if(failedStatus8==1)
       {
        if( check==0)
 {
     System.out.println("no FD code exists");
     break;
 }
        System.out.println("\n");
        System.out.println("\n Total Products are --->"+ count);
        break;
       }
       else if( failedStatus8==0)
       {
          System.out.println("\n Fetch unsucessfull...invalid xmls found!!");
           break;
       }
        
        break;
        case 2:
        
        
        for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        String s4=br.readLine();
        
       try
       {
        while(s4!=null)
        {
            if (s4.contains("primaryIdentifier")||s4.contains("productTypeId")||s4.contains("PartNumber")) {
                        //System.out.println(s1);
                        //System.out.println(s1.length());
                        
               if (s4.contains("primaryIdentifier")){        
                String trim1=s4.trim();
                        System.out.print(trim1.substring(23, (trim1.length() - 24)));
                        System.out.print('\t');
                      //status1=1;
                        count++;    
               }    
               
               
               if (s4.contains("productTypeId")){        
                String trim3=s4.trim();
                      System.out.print(trim3.substring(15, (trim3.length() - 16)));

                        System.out.print('\t');
                      //status1=1;
                        count++;    
               }
            
             if (s4.contains("PartNumber")){        
                String trim6=s4.trim();
                      
                
                //System.out.println("trim"+trim6);
                System.out.print(trim6.substring(12, (trim6.length() - 13)));

                        System.out.print('\t');
                    // System.out.println();
                        //status1=1;
                        count++;    
                        
             }
            
            
            }
       
            if (s4.contains("description")||(s4.contains("Description")||(s4.contains("productTypeName")))) {
                        //System.out.println(s1.length());
                        //System.out.print(s1.trim());
                        
                if(s4.contains(":description"))
                {    
                    String trim2=s4.trim();
                       // System.out.println(trim2);
                        System.out.println(trim2.substring(17, (trim2.length() - 18)));
                        break;
                }
                
                 if(s4.contains("Description"))
                {    
                    String trim2=s4.trim();
                       // System.out.println(trim2);
                        System.out.println(trim2.substring(13, (trim2.length() - 14)));
                        
                       //System.out.print('\t');
                       
                      break;
                    }
               if(s4.contains("productTypeName"))
                {    
                    String trim2=s4.trim();
                       // System.out.println(trim2);
                        System.out.println(trim2.substring(17, (trim2.length() - 18)));
                        break;
                }
            
            }
             s4=br.readLine();
        
      
        
             
        
        
        
        } //while
        
       }
       catch(Exception e)
       {
           System.err.println("Fetch failed...invalid files found");
           failedStatus7=0;
           br.close();
        br1.close();
        
        //System.exit(0);
       
       }
        
       
        br.close();
        br1.close();
        }
        
        if(failedStatus7==1)
        {
        System.out.println("\n Total Count of Products is -->"+ count);   
        
        break;
        }
        else if(failedStatus7==0)
        {
           
            System.out.println("\n 8...invalid xmls found!!");
            break;
        }
           
        
        break;
        
          case 3: 
              System.exit(0);
        
        break;      
        
        
        
        case 4:
            for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
        String billing = "Billing";
        
        String s = br.readLine(); // this check if file contains billing word
//System.out.println(s);
        String s1 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s5= br5.readLine(); // once billing word is found , it checks for the kind of the code.
       
 //System.out.println(s5);      
       
try{

 while(s5!=null)
    {
         if(s5.contains("S30:fulfilmentDecomposition"))
 
            {
                check=1;
               
                    
                   
                
                        count++;    // billing word found in line , hence increase the count.
                    
                        
                           while (s1 != null) 
                           
                           {
                    
                             if (s1.contains("primaryIdentifier")) 
                                {
                            
                                    String trim1=s1.trim();
                                    System.out.printf("%-15s",trim1.substring(23, (trim1.length() - 24)));
                                    System.out.print('\t');
                                }

                                if (s1.contains("description")) 
                                {
                                     String trim2=s1.trim();
                                     System.out.printf("%-50s",trim2.substring(17, (trim2.length() - 18)));
                                     break;
                                }

                            s1 = br1.readLine();
                        
                           }
                           //s1 = br1.readLine();

                    System.out.println();
                        
                    break;
           
                       
                   
        
        
                 //while s!=null
    
                  
            } 
                s5= br5.readLine();
    
            
          
                    
                    
    }
    
}

catch(Exception e)
{
    System.err.println("Fetch failed...invalid xmls found");
failedStatus6=0;
    br.close();
    br1.close();
    br5.close();
    
   // System.exit(0);

}

  
   br.close();
    br1.close();
    br5.close();
       }
        
      if(failedStatus6==1)
      {
            System.out.print("\n Total FD codes is -->"+count);
            
            if( check==0)
 {
     System.out.println("\n no FD code exists");
     System.out.println();
     break;
 }
      }
      else if(failedStatus6==0)
      {
      System.out.println("\n Fetch unsucessfull...invalid xmls found!!");
          break;
      }
       
        break;
        case 5:
            
            for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
        String billing = "Billing";
        
        String s = br.readLine(); // this check if file contains billing word
//System.out.println(s);
        String s1 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s5= br5.readLine(); // once billing word is found , it checks for the kind of the code.
       
 //System.out.println(s5);      
       
try
{
 while(s5!=null)
    {
         if(s5.contains("ns2:productOffering"))
 
            {
                check=1;
               
                    
                   
                
                        count++;    // billing word found in line , hence increase the count.
                    
                        
                           while (s1 != null) 
                           
                           {
                    
                             if (s1.contains("primaryIdentifier")) 
                                {
                            
                                    String trim1=s1.trim();
                                    System.out.printf("%-15s",trim1.substring(23, (trim1.length() - 24)));
                                    System.out.print('\t');
                                }

                                if (s1.contains("description")) 
                                {
                                     String trim2=s1.trim();
                                     System.out.printf("%-50s",trim2.substring(17, (trim2.length() - 18)));
                                     break;
                                }

                            s1 = br1.readLine();
                        
                           }
                           //s1 = br1.readLine();

                    System.out.println();
                        
                    break;
           
                       
                   
        
        
                 //while s!=null
    
                  
            } 
          
         
         
         
         
         s5= br5.readLine();
    
            
          
                    
                    
    }
    
}
catch(Exception e)
{
    System.err.println("Fetch failed....invaild xmls found");

failedStatus5=0;
    br.close();
    br1.close();
    br5.close();
    
  //  System.exit(0);

}

  
   br.close();
    br1.close();
    br5.close();
       }
        
     
            
            if(failedStatus5==1)
            {             
            System.out.print("\n Total S codes is -->"+count);
            
            if( check==0)
 {
     System.out.println("\n no S code exists");
     System.out.println();
     break;
 }
            }    
     
            else if(failedStatus5==0)
            {
           System.out.println("\n Fetch unsucessfull...invalid xmls found!!");
                break;   
            }
       
       break;
        case 6:
            
            for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
        String billing = "Billing";
        
        String s = br.readLine(); // this check if file contains billing word
//System.out.println(s);
        String s1 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s5= br5.readLine(); // once billing word is found , it checks for the kind of the code.
       
 //System.out.println(s5);      
       
 try{
 while(s5!=null)
    {
         if(s5.contains("S30:receiveErrorEventTemplate"))
 
            {
                check=1;
               
                    
                   
                
                        count++;    // billing word found in line , hence increase the count.
                    
                        
                           while (s1 != null) 
                           
                           {
                    
                             if (s1.contains("primaryIdentifier")) 
                                {
                            
                                    String trim1=s1.trim();
                                    System.out.printf("%-15s",trim1.substring(23, (trim1.length() - 24)));
                                    System.out.print('\t');
                                }

                                if (s1.contains("description")) 
                                {
                                     String trim2=s1.trim();
                                     System.out.printf("%-50s",trim2.substring(17, (trim2.length() - 18)));
                                     break;
                                }

                            s1 = br1.readLine();
                        
                           }
                           //s1 = br1.readLine();

                    System.out.println();
                        
                    break;
           
                       
                   
        
        
                 //while s!=null
    
                  
            } 
                s5= br5.readLine();
    
            
          
                    
                    
    }
    
 }
 
 catch(Exception e)
 {
     System.err.println("Fetch failed...invalid xmls found");
 
     failedStatus4=0;  
     br.close();
    br1.close();
    br5.close();
    
  //  System.exit(0);
 
 }

  
   br.close();
    br1.close();
    br5.close();
       }
        
       if(failedStatus4==1)
       {   
           System.out.println("\n Total ET codes is -->"+count);
            
            if( check==0)
 {
     System.out.println(" no ET code exists");
     System.out.println();
     break;
 }
        
       }
       
       else if(failedStatus4==0)
       {
       System.out.println("\n Fetch unsucessfull...invalid xmls found!!");
           break; 
        
       } 
      
        break;
        case 7:
            
                  for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
        String billing = "Billing";
        
        String s = br.readLine(); // this check if file contains billing word
//System.out.println(s);
        String s1 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s5= br5.readLine(); // once billing word is found , it checks for the kind of the code.
       
 //System.out.println(s5);      
       
 try
 {
 while(s5!=null)
    {
         if(s5.contains("ns2:serviceSpecification"))
 
            {
                check=1;
               
                    
                   
                
                        count++;    // billing word found in line , hence increase the count.
                    
                        
                           while (s1 != null) 
                           
                           {
                    
                             if (s1.contains("primaryIdentifier")) 
                                {
                            
                                    String trim1=s1.trim();
                                    
                                    System.out.printf("%-15s",trim1.substring(23, (trim1.length() - 24)));
                                    System.out.print('\t');
                                }

                                if (s1.contains("description")) 
                                {
                                     String trim2=s1.trim();
                                     System.out.printf("%-50s",trim2.substring(17, (trim2.length() - 18)));
                                     break;
                                }

                            s1 = br1.readLine();
                        
                           }
                           //s1 = br1.readLine();

                    System.out.println();
                        
                    break;
           
                       
                   
        
        
                 //while s!=null
    
                  
            } 
                s5= br5.readLine();
    
            
          
                    
                    
    }
    
 }
 
 catch(Exception e)
 {
     System.err.println("Fetch failed...invalid xmls found");
     
    
     failedStatus3=0;
     br.close();
    br1.close();
    br5.close();
    
   // System.exit(0);
 
 
 }

  
   br.close();
    br1.close();
    br5.close();
       }
        
      
    if(failedStatus3==1)
    {
                
                  System.out.println("\n Total count of P codes is -->"+count);
            
            if( check==0)
 {
     System.out.println("\n no P code exists");
     System.out.println();
     break;
 }
    break;    
    
    }
    else if( failedStatus3==0)
    {
       System.out.println("\n Fetch unsucessfull...invalid xmls found!!");
        break;
    }

   break;
        
        case 8:
        
      
            FileWriter fw= new FileWriter(directoryaddress1+"fileNames.txt", true);
            File  readwrite = new File(directoryaddress1+"fileNames.txt");
    
      FileReader newReader= new FileReader(directoryaddress1+"fileNames.txt");
      BufferedReader newBuffered= new BufferedReader( newReader);
      
      BufferedWriter wr= new BufferedWriter(fw);
      int i=0;
           
     
      for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        
         
         BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
     
        
        String s1 = br.readLine(); // this check if file contains billing word

        String s2 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s3= br5.readLine(); // once billing word is found , it checks for the kind of the code.
     
        // String currentFile=fileList[i];  
         //System.out.println(currentFile);
       
         String code = null;
       try 
       { 
         while(s1!=null)
         {
             if(s1.contains("fulfilmentDecomposition") || s1.contains( "S30:receiveErrorEventTemplate") || s1.contains( "ns2:productOffering")|| s1.contains( "ns2:serviceSpecification")||s1.contains( "productTypeId") ||s1.contains( "PartNumber"))
             {      
                 
                 if(s1.contains("fulfilmentDecomposition"))
                         {
                             code="FulfilmentDecomposition_";
                         }
                 
                 if(s1.contains("S30:receiveErrorEventTemplate"))
                 {
                     code="errorEventTemplate_";
                 }
                 
                 if(s1.contains("ns2:productOffering"))
                 {
                     code="ProductOffering_";
                 }
                 
                  if(s1.contains("ns2:serviceSpecification"))
                 {
                     code="ServiceSpecification_";
                 }
                 
                 //System.out.println("prodcut offering found");
                 
                 fail1++;
                 while(s2!=null)
                 {
                     if(s2.contains("primaryIdentifier"))
                     {   
                         aib=1;
                         String trim1=s2.trim();
                      String trimm= trim1.substring(23, (trim1.length() - 24));
                       // System.out.println(trim1); 
                        //System.out.println("description found");
                         while(s3!=null)   //+ fileList[i] +result
                         {
                             if(s3.contains("versionNumber"))
                             {  
                               //  System.out.println(s3);
                                 //System.out.println("versionNumber");
                                 //String result="Prodctsssss.xml";
                       
                                 String trim4=s3.trim();
                                    
                                   
                                 
                                String trim5=trim4.substring(19, (trim4.length() - 20));
                                  
                                 
                                 
                                 
                                 wr.write(code+trimm+"_"+trim5+".xml"+"\n");
                                 wr.flush();
                                 
                                  
                                 
                                 
                                 break;
                             }
                         
                             s3=br5.readLine();
                         
                         }
                     
                     break;
                     }
                 
                   
                     s2=br1.readLine();
                     
                 }
            break;
             }
             s1=br.readLine();
            
         }  //while
            
       }
           catch(Exception e  )
       {
           /*
               if( contain==1)
               {  
              
           
           String trim1=s2.trim();
            String trimm= trim1.substring(23, (trim1.length() - 24));
           
           */
          
           
           failedStatus=0;
               System.err.println("Your File contains errors..Please check for missing version/identifier in file no"+ fail1 + "  .... renaming unsucessfull!!");
       
       wr.close();
         fw.close();
        newBuffered.close();
        readwrite.delete();
        
      //  System.exit(0);
       
       break;
               }
               
             /*  else{
                   
               failedStatus=0;
                   System.out.println("Invalid file..Idenifier Missing!!!");
              
              break;
               
              */
               
               
          
           
     
            
     
    
       
       
       
       
       i++;
            
        
        br.close();
        br1.close();
        br5.close();
        } //for closed
        // wr.close();
       // fw.close();
        
        
      if(failedStatus==1)
      {
      int l=0;
        
         String s=newBuffered.readLine();
        
         File[] fileArray=newDir.listFiles();
         
         
         //System.out.println("file Array is+"+fileArray[0]);
         //System.out.println("length is "+fileArray.length);
         //System.out.println(s);
         while(s!=null){

             
       
            File fi1= new File (newDir, s);
        
            if(fileArray[l].renameTo(fi1))
            {
              
                renameStatus=1;
             // System.out.println(renameStatus);
            }
            
            else
            {
               renameStatus=0;
              //  System.out.println(renameStatus);
               //System.out.println(fi1 +"  rename failed");
               break;
            }
            
        l++;
       
        
        s=newBuffered.readLine();
         }
         
         
        if(renameStatus==1)
        {
            //System.out.println("rename Status"+renameStatus);
            System.out.println("\n Successfully Renamed.....:)");
        }                                                                      
                                                                            
        
        if( renameStatus==0 && aib==1)
        {
        //System.out.println("rename Status"+renameStatus);
            System.out.println(" Rename failed. Please close the session and retry!!");
         
        }
         
        if( renameStatus==0 && aib==0)
        {
        //System.out.println("rename Status"+renameStatus);
            System.out.println("Renaming Applicable only to AIB files..choose 9 for billing/OS");
         
        }
        
        wr.close();
         fw.close();
        newBuffered.close();
        readwrite.delete();
        
        
        break;
        
      }
      
      else if( failedStatus==0)
      {
          break;
      }
          
        
        
        break;
        case 9:
            
            
            FileWriter fw1= new FileWriter(directoryaddress1+"fileNames1.txt", true);
            File  readwrite1 = new File(directoryaddress1+"fileNames1.txt");
    
      FileReader newReader1= new FileReader(directoryaddress1+"fileNames1.txt");
      BufferedReader newBuffered1= new BufferedReader( newReader1);
      
      BufferedWriter wr1= new BufferedWriter(fw1);
      int i1=0;
          
      
      int failedStatus1=1;
      for(File file: newDir.listFiles())
        {
        f = new FileReader(file);
        f1 = new FileReader(file);
         f2= new FileReader(file);
        
         
         BufferedReader br = new BufferedReader(f);
        BufferedReader br1 = new BufferedReader(f1);
        BufferedReader br5= new BufferedReader(f2);
     
        
        String s1 = br.readLine(); // this check if file contains billing word

        String s2 = br1.readLine(); // this will be used to fetch the product name and identifier details.

       String s3= br5.readLine(); // once billing word is found , it checks for the kind of the code.
     
        // String currentFile=fileList[i];  
         //System.out.println(currentFile);
       
         String code = null;
        
       try
       {
         while(s1!=null)
         {
             if(s1.contains("fulfilmentDecomposition") || s1.contains( "S30:receiveErrorEventTemplate") || s1.contains( "ns2:productOffering")|| s1.contains( "ns2:serviceSpecification")||s1.contains( "productTypeId") ||s1.contains( "PartNumber"))
             {      
                 
                 if(s1.contains("fulfilmentDecomposition"))
                         {
                             code="FulfilmentDecomposition_";
                         }
                 
                 if(s1.contains("S30:receiveErrorEventTemplate"))
                 {
                     code="errorEventTemplate_";
                 }
                 
                 if(s1.contains("ns2:productOffering"))
                 {
                     code="ProductOffering_";
                 }
                 
                  if(s1.contains("ns2:serviceSpecification"))
                 {
                     code="ServiceSpecification_";
                 }
                 
                 //System.out.println("prodcut offering found");
                 fail2++;
                 while(s2!=null)
                 {
                     if(s2.contains("primaryIdentifier") )
                     {   
                         String trim1=s2.trim();
                      String trimm2= trim1.substring(23, (trim1.length() - 24));
                       // System.out.println(trim1); 
                        //System.out.println("description found");
                        //  System.out.println(s3);
                                 //System.out.println("versionNumber");
                                 //String result="Prodctsssss.xml";
                       
                                
                                  
                                 
                                 
                                 
                                 wr1.write(trimm2+".xml"+"\n");
                                 wr1.flush();
                                 
                                  
                                 
                                 
                                 break;
                             }
                         
                     else if (s2.contains("productTypeId"))
                           
                     {
                          String trim3=s2.trim();
                      String trimm3= trim3.substring(15, (trim3.length() - 16));
                       // System.out.println(trim1); 
                        //System.out.println("description found");
                        //  System.out.println(s3);
                                 //System.out.println("versionNumber");
                                 //String result="Prodctsssss.xml";
                       
                                
                                  
                                 
                                 
                                 
                                 wr1.write(trimm3+".xml"+"\n");
                                 wr1.flush();
                                 
                                  break;
                                 
                                 
                                 
                     }   
                         
                         
                      else if (s2.contains("PartNumber"))
                           
                     {
                         
                        // System.out.println(s2);
                         String trim4=s2.trim();
                      String trimm4= trim4.substring(12, (trim4.length() - 13));
                       // System.out.println(trim1); 
                        //System.out.println("description found");
                        //  System.out.println(s3);
                                 //System.out.println("versionNumber");
                                 //String result="Prodctsssss.xml";
                       
                                
                                  
                                 
                                 
                                 
                                 wr1.write(trimm4+".xml"+"\n");
                                 wr1.flush();
                                 
                                  break;
                                 
                                 
                                 
                     }
                 
                     
                 s2=br1.readLine();
                     
                 }
            break;
             }
             s1=br.readLine();
            
         } // while
            
       }
       
       catch(Exception e)
       {
           System.err.println("Your File contains errors..Please check for missing version/identifier in file no "+ fail2 + "  .... renaming unsucessfull!!");
      
       failedStatus1=0;
           wr1.close();
         fw1.close();
        newBuffered1.close();
        readwrite1.delete();
        
        //System.exit(0);
       
       break;
       
       }
            
       i1++;
            
        
        br.close();
        br1.close();
        br5.close();
        } //for closed
        // wr.close();
       // fw.close();
        
      if(failedStatus1==1)
      {
       
      int l1=0;
        
         String s11=newBuffered1.readLine();
        
         File[] fileArray1=newDir.listFiles();
         
         
         //System.out.println("file Array is+"+fileArray[0]);
         //System.out.println("length is "+fileArray.length);
         //System.out.println(s);
         while(s11!=null){

             
       
            File fi1= new File (newDir, s11);
        
            if(fileArray1[l1].renameTo(fi1))
            {
                renameStatus1=1;
            }
            
            else
            {
                 renameStatus1=0;
                break;
            }
            
        l1++;
       
        
        s11=newBuffered1.readLine();
         }
         
         
        if(renameStatus1==1)
        {
            System.out.println("\n Successfully Renamed....:)");
        }
        
        if( renameStatus1==0)
        {
        System.out.println(" Rename failed....Please close the sesssion and retry");
         
        }
         wr1.close();
         fw1.close();
        newBuffered1.close();
        readwrite1.delete();
     
        
        
        
        break;
        
      }
        else if(failedStatus1==0)
                {
                break;
                }
        
      break;
        
        }// case end


        }//try ch end

        
        catch(Exception InputMismatchException)
        {
            System.err.println("Enter valid choice");
        }
        
        } //while end

    }

        else{
             System.out.println("Directory does not exist.. please re enter");
         
           
        }
    
    }
        
        }   
        
      
        }
