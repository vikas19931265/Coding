/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;

class SwapWithoutUsingThirdVariable
{
    public static void main(String[] args)
    {
        int a =10;
        int b=20;
        
        a=a+b;
        b=a-b;
        a=a-b;
        
        System.out.println("a:" +a + "b:"+b);
    }
}

/*
run:
a:20b:10
BUILD SUCCESSFUL (total time: 0 seconds)

*/