/*

this: to pass as an argument in the method

this keyword can also be used inside the method to pass the current instance to another 
method as an argument( Object passing). This will be mainly be used in the case of Listeners

*/


package this_keyword;


class Paper {
    
    String text;

    Paper( String text)
    {
        this.text=text;
    }
    
    public void putInPrinter() // call to paper class method putInPrinter() to put it inside the printer.
    {
        Printer p1 = new Printer(); // created printer object
        p1.printPaper(this); // passed the current instance of paper( using this) to printer method "printpaper"
    }
    
    
    public void writeNewText(String text) // to write new text on paper
    {
        this.text=text; // put new text on paper
    
        putInPrinter(); // once writing done call the putInPrinter() method to print paper
    
    }
    
 }


class Printer
{
    Paper p;

    public void printPaper(Paper p) // printPaper method accepting the paper
    {
        System.out.println(" Printed  " + p.text); // printing the text on paper.
    }


   /* public void resetPaper(Paper p)
    {
        p=null;
    }
    */
    
}


class Driver
{
    public static void main(String[] args)
    {
        Paper p = new Paper("hai i am vikas");  // created paper object
        
        p.writeNewText("New text"); // on paper object changed the entered text
        
      
        
        
    }
}

/*
run:
 Printed  New text
BUILD SUCCESSFUL (total time: 0 seconds)


*/
