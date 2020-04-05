package superKeyword;

/* 
super is used to invoke parent class constructor.
======================================================================= 
 */

class Animal1 {

    Animal1() {
        System.out.println("Animal Is Created");
    }
}

class Dog1 extends Animal {

    Dog1() {
        super();
        System.out.println("Dog is Created.");
    }
}

class Driver11 {

    public static void main(String[] args) {
        new Dog1();
    }
} 
/*
run:
Dog is Created.
BUILD SUCCESSFUL (total time: 0 seconds) 
*/
