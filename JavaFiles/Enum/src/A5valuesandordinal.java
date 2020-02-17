/*
values() method
====================

Every enum implicitly contains the values() method to list out all the values which
are present inside the enum.

Example

    Beer[] b = Beer.values();

note:
    values() method is not present in java.lang.Enum class and not in Object class. Enum
    keyword implicitly provides this method.

similar to this method there is another method called as ordinal() method


ordinal() method
=======================

Inside enum, order of the constants is important. And we can represent this order
by using ordinal value.We can find ordinal value of the enum constant by using ordinal()
method

prototype of the ordinal method:

    public final int ordinal();

ordinal value is 0 based like array index.

*/

enum Beer12
{
    KF,KO,RC,FO
}

class Test12
{
    public static void main(String[] args)
    {
        Beer12[] b = Beer12.values();
        for(Beer12 b1: b)
        {
            System.out.println(b1+"....."+b1.ordinal());
        }
    }
}

/*
run:
KF.....0
KO.....1
RC.....2
RO.....3
BUILD SUCCESSFUL (total time: 0 seconds)

*/
