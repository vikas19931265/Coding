/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Utility;

public class Base {

    public String data = null;

    public Base() 
    {
        data = "default";
        System.out.println("Base()");
    }

    public Base(String arg1) {
        data = arg1;
        System.out.println("Base("+arg1+")");
    }

}