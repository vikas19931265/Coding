/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;

class EnumTypeToStoreGender
{
    String name;
    Gender gen;
   
    EnumTypeToStoreGender(String name, Gender gen)
    {
        this.name=name;
        this.gen=gen;
    }
    public static void main(String[] args)
    {
        EnumTypeToStoreGender gen = new EnumTypeToStoreGender("vikas",Gender.male);
        System.out.println(gen.name+" "+gen.gen);
    }
}

enum Gender
{
    male,female;
}
/*
run:
vikas male
BUILD SUCCESSFUL (total time: 0 seconds)

*/