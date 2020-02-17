import java.util.*;
import java.text.*;

 class Solution456 {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        Locale defaultLocal= new Locale("en","IN");
       
       NumberFormat us= NumberFormat.getCurrencyInstance(Locale.US);
       NumberFormat india= NumberFormat.getCurrencyInstance(defaultLocal);
       NumberFormat china= NumberFormat.getCurrencyInstance(Locale.CHINA);
       NumberFormat france= NumberFormat.getCurrencyInstance(Locale.FRANCE);

        
        System.out.println("US: " + us.format(payment));
        System.out.println("India: " + india.format(payment));
        System.out.println("China: " + china.format(payment));
        System.out.println("France: " + france.format(payment));
    }
}

/*
run:
12324.134
US: $12,324.13
India: Rs.12,324.13
China: ￥12,324.13
France: 12 324,13 €
BUILD SUCCESSFUL (total time: 4 seconds)

*/