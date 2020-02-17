package Collections;

import java.util.*;

class Students implements Comparator {

    String firstName;

    String lastName;

    Students(String firstName, String lastName) {

        this.firstName = firstName;

        this.lastName = lastName;

    }

    public String getFirstName() {

        return this.firstName;

    }

    public String getLastName() {

        return this.lastName;

    }

    public int compare(Object obj1, Object obj2) {

        String fname1 = ((Students) obj1).getFirstName().toString();

        String lname1 = ((Students) obj1).getLastName().toString();

        String fullname1 = fname1.concat(lname1);

        String fname2 = ((Students) obj2).getFirstName().toString();

        String lname2 = ((Students) obj2).getLastName().toString();

        String fullname2 = fname2.concat(lname2);

        return fullname1.compareTo(fullname2);

    }

    public static void display(List l) {

        Iterator itr = l.iterator();

        while (itr.hasNext()) {

            Students s1 = (Students) itr.next();

            System.out.println(s1.getFirstName() + "...." + s1.getLastName());

        }

    }

}

class Drivers {

    public static void main(String[] args) {

        List<Students> studList = new ArrayList<>();

        Students s1 = new Students("vikas", "singh");

        Students s2 = new Students("vikas", "kumar");

        Students s3 = new Students("vikas", "amit");

        Students s4 = new Students("amit", "singh");

        Students s5 = new Students("bharat", "kumar");

        studList.add(s1);

        studList.add(s2);

        studList.add(s3);

        studList.add(s4);

        studList.add(s5);

        Collections.sort(studList, s1);

        Students.display(studList);

    }

}

/*
run:
amit....singh
bharat....kumar
vikas....amit
vikas....kumar
vikas....singh
BUILD SUCCESSFUL (total time: 0 seconds)

*/