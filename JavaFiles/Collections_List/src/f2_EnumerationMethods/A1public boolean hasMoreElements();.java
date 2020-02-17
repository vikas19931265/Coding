/*
public boolean hasMoreElements();

*/
package f2_EnumerationMethods;

import java.util.*;

class HasMoreElements
{
    public static void main(String[] args)
    {
        Vector a = new Vector();
        
        a.addElement(10);
        
        a.addElement("vikas");
        
        Enumeration e = a.elements();
        
        while(e.hasMoreElements())
        {
            System.out.println(e.nextElement());
        }
    }

}

/*
run:
10
vikas
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------*******************************************------------------------------------------