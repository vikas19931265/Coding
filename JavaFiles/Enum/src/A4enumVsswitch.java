/*

Enum vs Switch
======================

Until 1.4 version the allowed argument types for the switch statement are 

byte
short 
char 
int

but from 1.5 version onwards corresponding wrapper classes and enum types are also
allowed.

From 1.7 version onwards String type is also allowed.

1.5         1.6         1.7

byte        Byte        Byte
short       Short       Short
char        Character   Character
int         Integer     Integer
            Enum        Enum
                        String


Hence from 1.5 version onwards we can pass the enum type as argument to the switch
statement also.


If we pass enum type as argument to the switch statement then every case label should be
valid enum constant otherwise we will get the compile time error.

example

    switch(b)
    {
        case KF:
        case KO:
        case RC;
        case KALYANI: //Compile error
        
        CE: unqualified enumeration constant name required.
    }





*/

enum Beer
{
    KF,KO,RC,RO
}

 class Test
{
    public static void main(String[] args)
    {
        Beer b =Beer.KF;
        
        switch(b)
        {
            case KF :
                    System.out.println("Childrens brand");
                    break;
            case KO:
                    System.out.println("It is too light");
                    break;
            case RC:
                    System.out.println("It is not that much kick");
                    break;
            case RO:
                    System.out.println("Buy one get one free");
                    break;
                    
        }
    }
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
Childrens brand
*/

