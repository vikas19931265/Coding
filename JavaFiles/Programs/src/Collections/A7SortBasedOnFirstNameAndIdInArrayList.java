/*

Java program to sort based upon name and then ID using Collections.sort(List l, Comparator c)
===============================================================================================

 */
package Collections;

import java.util.*;

class Student implements Comparator {

    String name;
    int id;

    Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public int getId() {
        return this.id;
    }

    @Override
    public int compare(Object obj1, Object obj2) {
        String name1 = ((Student) obj1).getName();
        String name2 = ((Student) obj2).getName();
        return name1.compareTo(name2);

    }

    public static Object[] sort(List s1) {
        Object[] obj1 = s1.toArray();
        Object temp;
        for (int i = 0; i < obj1.length; i++) {
            for (int j = i + 1; j < obj1.length; j++) {
                Student s2 = (Student) obj1[i];
                Student s3 = (Student) obj1[j];

                if (s2.getName().equals(s3.getName())) {
                    if (s2.getId() > s3.getId()) {

                        temp = obj1[j];
                        obj1[j] = obj1[i];
                        obj1[i] = temp;

                    }

                }
            }
        }

        return obj1;

    }

    public static void display(List s1) {
        System.out.println("Elements after sorting");
        Iterator itr = s1.iterator();
        while (itr.hasNext()) {
            Student stu1 = (Student) itr.next();

            System.out.println(stu1.getName() + "..." + stu1.getId());

        }
    }

}

class Driver {

    public static void main(String[] args) {
        Student s1 = new Student("vikas", 7);
        Student s2 = new Student("vikas", 2);
        Student s3 = new Student("amar", 3);
        Student s4 = new Student("vijay", 4);
        Student s5 = new Student("praksah", 5);
        Student s6 = new Student("vikas", 1);

        List<Student> students = new ArrayList<>();
        students.add(s1);
        students.add(s2);
        students.add(s3);
        students.add(s4);
        students.add(s5);
        students.add(s6);

        Collections.sort(students, new Student(null, 0));
        Object[] obj5 = Student.sort(students);
        List obj3 = Arrays.asList(obj5);
        Student.display(obj3);

    }
}

/*
run:
Elements after sorting
amar...3
praksah...5
vijay...4
vikas...1
vikas...2
vikas...7
BUILD SUCCESSFUL (total time: 0 seconds)

*/