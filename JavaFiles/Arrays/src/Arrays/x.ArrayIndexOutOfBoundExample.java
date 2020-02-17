package Arrays;

class Test1
{

    String[] array =
    {
        "A", "B", "C"
    };

    public static void main(String[] args)
    {

        Test1 test = new Test1();

        for (int i = 0; i <= test.array.length; i++)

        {

            System.out.println(test.array[i]);

            /*
            
            This will give us arrayIndexOutOfBoundExecption due to i<=test.array.length
            this is because index starts from 0 and it ends at 2 here and we are trying to
            print the value at 3 which does not exist.
            
            To fix this we have to replace less then equal to with less then , than we won’t get any run time Exception.
            
             i<=test.array.length;
           
            
            The same logic is applicable in case of arguments passed through command prompt as well.
            
            
            
             */
        }

    }

}

//--------------------------------------------------------------------------********--------------------------------------------------------------