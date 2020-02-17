
import java.util.*;

class ScannerReadingLine {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int i = 0;
        while (scan.hasNext()) {
            i++;
            System.out.println(i + " " + scan.nextLine());
        }
    }

}

/*
run:
hi
1 hi
how
2 how
are
3 are
u
4 u

*/
