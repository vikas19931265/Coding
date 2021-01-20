//Full fledge example for enum with constructor.

/*

KF->public static fnial Beer KF= new Beer();
KF(70)---->public static final Beer KF= new Beer(70);


note
============

Inside enum , we can declare methods but the methods should be concrete method only
And we cannot declare abstract methods.
*/

enum Beer24
{
    KF(70),KO(80) ,RC(90),FO;
    int price;
    
    Beer24(int price)
    {
        this.price=price;
    }

    
    Beer24()
    {
        this.price=65;
    }
    

    public int getPrice()
    {
        return price;
    }
    
}

 class Test24
{
    public static void main(String[] args)
    {
        Beer24[] b = Beer24.values();
        for(Beer24 b1: b)
        {
            System.out.println(b1+"....."+b1.getPrice());
        }
    }
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
KF.....70
KO.....80
RC.....90
FO.....65

*/
