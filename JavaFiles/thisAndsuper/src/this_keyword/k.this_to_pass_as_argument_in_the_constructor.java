

/*We can pass the this keyword in the constructor also. It is useful if we have 
to use one object in multiple classes. Let's see the example
package Concepts; */

package this_keyword;


class Papers  {
    
        public void start()
        {
            Printers p = new Printers(this); // passing this as argument in constructor
       
            new Shred(this); // same Object is passed to Shred Constructor as well , 
                             // will receive this paper and then destroy it.
        
        }


}


class Printers
{
    Printers( Papers p)
    {
        System.out.println("Printing complete");
    }
    
}


class Shred
{
    Shred(Papers p)
    {
        p=null;
        
        System.out.println("paper is destroyed now");
    }
    
}


class Demo
{
    public static void main(String[] args)
    {
        Papers p = new Papers();
        p.start();
    }
}

/*

o/p

run:
Printing complete
paper is destroyed now
BUILD SUCCESSFUL (total time: 0 seconds)

*/