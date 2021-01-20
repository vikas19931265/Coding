/* final modifier.
================================

final is a modifier applicable for classes , methods , and variables.


final method
------------

Whatever methods parent has are by default are available to the child through inheritance. If the child is not
satisfied with parent method implementation then child is allowed to redefine the method based on its requirement.
This process is called overriding. If the parent class method is declared as final then we cannot override that
method in the child class because its implementation is final.

*/
package classLevelModifiers;


 class P
{
    public void property()
    {
        System.out.println("Cash+land+Gold");
     }
    
    public final void marry()// This is a final method which cannot be overridden in the child class.
    {
        System.out.println("subbulaxmi");
    }
}


class C extends P
{
    /*
    public void marry()
    {
        System.out.println("trishs");
    }

    
    CE: marry() in C cannot override marry() in P; overridden method is final
    
    */

}

//-----------------------------------------------------------------------------------------*******************--------------------------------------