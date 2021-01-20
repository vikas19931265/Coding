/*
Write a program that allows the user to enter students names followed by their test scores
and output the following information(assume that the maximum number of students in class is 50)
1. Class average
2. Names of all the students whose test scores are below the class average, with appropriate message
3. Highest test score and the names of all the students having the highest score
 */
package ScenarioProgramming;
import java.util.*;
class StudentsInformation {
    HashMap<String, Double> students = new HashMap();
    double average;
    public void addStudents(int numberOfStudents) {
        for (int i = 0; i < numberOfStudents; i++) {
            System.out.println("Enter Name of Student" + (i + 1));
            Scanner cn = new Scanner(System.in);
            String name = cn.nextLine();
            System.out.println("Enter Marks of Student" + (i + 1));
            double marks = cn.nextInt();
            students.put(name, marks);
        }
        System.out.println("----------------------------------------------");
    }
    public void displayStudentsDetails() {
        Set s = students.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m = (Map.Entry) itr.next();
            System.out.println(m.getKey() + "...." + m.getValue());
        }
        System.out.println("----------------------------------------------");
    }
    public void findAverage() {
        double size = students.size();
        System.out.println(size);
        double sum = 0.0;
        double average = 0.0;
        Set s = students.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m = (Map.Entry) itr.next();
            sum = sum + (double) m.getValue();
        }
        average = sum / size;
        System.out.println("Average marks of the class is " + average);
        this.average = average;
        System.out.println("----------------------------------------------");
    }
    public void scoreBelowAvg() {
        Set s = students.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m = (Map.Entry) itr.next();
            if ((double) m.getValue() < this.average) {
                System.out.println(m.getKey() + "....." + m.getValue());
            }
        }
        System.out.println("----------------------------------------------");
    }
    public void highestScore() {
        TreeMap m1 = new TreeMap();
        Set s = students.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m = (Map.Entry) itr.next();
            m1.put((double) m.getValue(), m.getKey());
        }
        double highest = (double) m1.lastKey();
        Iterator itr1 = s.iterator();
        while (itr1.hasNext()) {
            Map.Entry m = (Map.Entry) itr1.next();
            if ((double) m.getValue() == highest) {
                System.out.println(m.getKey() + "....." + m.getValue());
            }
        }
        System.out.println("----------------------------------------------");
    }
    public static void main(String[] args) {
        StudentsInformation stud = new StudentsInformation();
        while (true) {
            System.out.println("Choose from list");
            System.out.println("1. Add Students ");
            System.out.println("2. Display Students Details");
            System.out.println("3. Average Marks of Class");
            System.out.println("4. Students with score below average score");
            System.out.println("5. Student with highest marks ");
            System.out.println("6. Exit");
            System.out.println("----------------------------------------------");
            Scanner cn = new Scanner(System.in);
            int input = cn.nextInt();
            if (input == 6) {
                break;
            }
            switch (input) {
                case 1:
                    stud.addStudents(5);
                    break;
                case 2:
                    stud.displayStudentsDetails();
                    break;
                case 3:
                    stud.findAverage();
                    break;
                case 4:
                    stud.scoreBelowAvg();
                    break;
                case 5:
                    stud.highestScore();
                    break;
            }
        }
    }
}
