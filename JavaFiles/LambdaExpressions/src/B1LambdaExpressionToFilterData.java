/*
Java lambda expression to filter the collection data

 */

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

class Products
{

    int id;
    String name;
    float price;

    public Products(int id, String name, float price)
    {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Driver11
{

    public static void main(String[] args)
    {
        List<Products> list = new ArrayList<Products>();
        list.add(new Products(1, "Samsung A5", 17000f));
        list.add(new Products(3, "Iphone 6S", 65000f));
        list.add(new Products(2, "Sony Xperia", 25000f));
        list.add(new Products(4, "Nokia Lumia", 15000f));
        list.add(new Products(5, "Redmi4 ", 26000f));
        list.add(new Products(6, "Lenevo Vibe", 19000f));
        // using stream.
        Stream<Products> filteredData = list.stream().filter(p -> p.price > 20000);
        filteredData.forEach(
                product ->
        {
            System.out.println(product.id + " " + product.name + " " + product.price);
        }
        );
    }
}


/*
3 Iphone 6S 65000.0
2 Sony Xperia 25000.0
5 Redmi4  26000.0
*/
