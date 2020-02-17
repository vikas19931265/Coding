/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;


class FactUsingRecursion
{
    public static void main(String[] args)
    {
        System.out.println(fact(5));
    }
    
    public static  int fact(int num)
    {
        if(num==0)
        {
            return 1;
        }
        return (num * fact(num-1));
    }

}

/*
run:
120
BUILD SUCCESSFUL (total time: 0 seconds)

*/