package htryWithResources_multiCatchBlock;

/*

As part of 1.7 version, the following two concepts are introduced.

1. try with resources.

2. multi-catch block.


1. until 1.6 it is highly recommanded to write finally block to close the resources which are opened as part
   of try block.


2. The problems in this approach are 

        i. compulsary the programmer is required to close  the resouces inside the finally block. This 
           increases complexility of the programming.

        ii. We have to write finally block compulsary and hence it increases the length of the code and reduces readibility.
        

till 1.6 version try with resources feature.( finally block was hero here)

WHAT EVER RESOUCES WE OPEN AS PART OF TRY BLOCK NEED TO BE CLOSED IN THE FINALLY BLOCK.
BUT THIS CAN INCREASE THE COMPLEXILITY( this is burdan to programmer) . This issues is resolved in 1.7v

        Br br =null;
        
        try
        {
            br= new BufferedReader(new FileReader("input.txt");
        
            // use br based on our requirement

        }

        catch(IOException e)
        {
            //handling code
        }

        finally
        {
            if(br!=null)
            {
                    br.close();--------> Closing the resouces which we opened as part of try block

            }
        }    




To overcome problems in 1.6, SUN people introduced try with resouces in 1.7 version. The main advantage
of try with resouces is whatever resouces we opened as the part of the try block will be closed automatically
once the control reaches end of the try block either normally or abnormally and hence we are not required to close
it explicitly so that complexility of the programming will be reduced.


We are not required to write finally block so that length of the code will be reduced and readibility of the
code will be improved.


try with resources( in 1.7)( finally block becomes zero here)

    try( br= new BufferedReader(new FileReader("input.txt"))-----> resource

        {

             // use br based on our requirement
             // br will be closed automatically once control reaches end of try
             // block either abnormally or normally and we are not required to close it in  finally block explicitly

        }

     catch(IOException e)
       {
                // handling code.
       }
     

*/

