/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Encapsulation;


class Account2
{
    private int balance=200;
    
    public int getBalance()
    {
        return this.balance;
    }
}

class Driver
{
    public static void main(String[] args)
    {
        Account2 ac= new Account2();
        System.out.println(ac.getBalance());
    }
}