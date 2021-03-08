
/*

For each usage
================

*/

package Java8;

import java.util.ArrayList;
import java.util.List;

class Student {

    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

class Client {

    public static void main(String[] args) {
        List<Student> students = new ArrayList();
        Student s1 = new Student();
        s1.setName("vikas gautam");
        Student s2 = new Student();
        s2.setName("mamta gautam");

        
        students.add(s1);
        students.add(s2);

        students.forEach(student -> {
            System.out.println("name of the student is " + student.getName());
        });
    }
}
