/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Classes_Objects_OOPS_Enum;


class Studentss
{
    String name;
    int rollNo;
    Gender gen;

    Studentss(String name, int rollNo, Gender gen)
    {
        this.name=name;
        this.rollNo=rollNo;
        this.gen=gen;

        System.out.println(name+" "+ rollNo+" " + gen);

    }
}

enum Gender
{
    male,
    female
}

class Driver11
{
    public static void main(String[] args)
    {
        Studentss s1= new Studentss("vikas",1234,Gender.valueOf("male"));
    }
}