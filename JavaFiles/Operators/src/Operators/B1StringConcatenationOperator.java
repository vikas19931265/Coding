package Operators;

/*

String Concatenation Operator(+).
====================================================

1. The only overloaded operator in java is + operator. Sometimes it acts as Arithmetic addition
   operator and sometimes it acts as String concatenation operator.

2. If at least one argument is String type , then + operator will act as Concatenation operator and
   if both the arguments are number types then + operator will act as  Arithmetic addition
   operator.

 
    example a+b+c+d;

        "durga10" +c+10;
        "durga1020+10;
        "durga102030"

*/


class StringOperator
{
    
    public static void main(String[] args)
    {
    
    String a ="durga";
    
    int b=10, c=20 , d=30;
    
    System.out.println(a+b+c+d); //durga102030

    System.out.println(b+c+d+a);//60durga
    
    System.out.println(b+c+a+d);//30durga30
    
    System.out.println(b+a+c+d);//10durga2030
    
    }
 }
    