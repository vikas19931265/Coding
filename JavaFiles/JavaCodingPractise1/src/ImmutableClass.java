
package New;

final class Num
{
    private int num;
    Num(int num)
    {
        this.num=num;
    }
    
    public Num modifyNumber(int num)
    {
        if(this.num==num)
        {
            return this;
        }
        else
        {
            return new Num(num);
        }
    
    }

}

class Driver12
{
    public static void main(String[] args)
    {
        // intitializing Num object
        Num number1=new Num(10);
        Num number2    =number1.modifyNumber(100);
        Num number3=number1.modifyNumber(10);
        System.out.println(number1+" " +number2+ " " +number3);
    }
}
/*
run:
New.Num@15db9742 New.Num@6d06d69c New.Num@15db9742
BUILD SUCCESSFUL (total time: 0 seconds)

*/