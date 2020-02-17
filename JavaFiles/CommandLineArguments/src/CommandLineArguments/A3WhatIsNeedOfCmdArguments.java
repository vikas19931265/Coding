/*


1. The main Objective of command line arguments is , we can customize behavior of the main
   method.

2. By doing so main method can accept parameters passed via command prompt.

 */
package CommandLineArguments;

class Test

{

    public static void main(String[] args) // Here String[] arrray will store the values passed via command prompt.

    {
        int n = Integer.parseInt(args[0]); // Arguments passed via command prompt are held in an array in String format, hence need to convert it to integer.

        System.out.println("Argument passed is " + args[0]);
        /*
            This will throw an error in this case as we are not passing any command via command 
            prompt meaning args reference variable is pointing to null and we are trying to print index value of null reference.                                                    
            
         */
    }

}


//--------------------------------------------------------------------------********--------------------------------------------------------------