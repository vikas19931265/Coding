/*

Sorting based upon the name without using the lambda expression

 */

import java.util.*;

class Product implements Comparator
{

    int id;
    String name;
    float price;

    Product(int id, String name, float price)
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int compare(Object obj1, Object obj2)
    {
        Product p1 = (Product) obj1;
        String productName1 = p1.name;
        Product p2 = (Product) obj2;
        String productName2 = p2.name;
        return productName1.compareTo(productName2);
    }

    public String toString()
    {
        System.out.println(this.name + " " + this.id + " " + this.price);
        return null;
    }

}

class Driver12
{

    public static void main(String[] args)
    {
        ArrayList<Product> l = new ArrayList<>();
        Product p1 = new Product(1, "Dell", 30000);
        Product p2 = new Product(2, "Apple", 60000);
        Product p3 = new Product(3, "HP", 30000);
        Product p4 = new Product(4, "Toshiba", 60000);
        Product p5 = new Product(5, "Lenovo", 30000);
        Product p6 = new Product(6, "Acer", 60000);
        l.add(p1);
        l.add(p2);
        l.add(p3);
        l.add(p4);
        l.add(p5);
        l.add(p6);
        Collections.sort(l, p1);
        System.out.println("elements after sorting" + l);
    }
}

/*
run:
Acer 6 60000.0
Apple 2 60000.0
Dell 1 30000.0
HP 3 30000.0
Lenovo 5 30000.0
Toshiba 4 60000.0
elements after sorting[null, null, null, null, null, null]
BUILD SUCCESSFUL (total time: 0 seconds)

*/
