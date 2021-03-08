/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Java8;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Students
{
    private String name;
    private int rollNo;

    public Students(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
    
}

class StudentClient
{
    public static void main(String[] args) {
    
    // asList
    List<Students> students = Arrays.asList(new Students("vikas",1), new Students("mamta", 7), new Students("swati",5));
    
    // student name ends with as filter
    Stream<Students> stud= students.stream().filter(student->student.getName().endsWith("as"));
   
   // printing those students using forEach
    stud.forEach(stu->System.out.println(stu.getName()));
    
   // printing those elements without using for each
   
    List<String> val= students.stream().filter(student->student.getName().endsWith("as")).map(st->st.getName()).collect(Collectors.toList());
    System.out.println(val);
    
        /*
          note
    ==============
    1. filter will do filtering of the collection
    2. Using map a collection will be created keeping only the specific element mentioned inside it
    3. Collect is used to convert Stream to List
        */
   
    // Count
    
    System.out.println(students.stream().filter(student->student.getName().endsWith("as")).count());
    
    
    }
    
   
    
}