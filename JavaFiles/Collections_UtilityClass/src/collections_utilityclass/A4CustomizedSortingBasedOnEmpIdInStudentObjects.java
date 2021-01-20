
// Program on Customized sorting of Students object based upon the employeeIds.

package collections_utilityclass;

import java.util.*;

class MainClass {

    public static void main(String[] args) {
        
        Students2 s1 = new Students2(40,"Vikas");

        Students2 s2 = new Students2(10,"Sachin");

        Students2 s3 = new Students2(30,"Dravid");

        Students2 s4 = new Students2(70,"Yuvraj");
        
        Students2 s5 = new Students2(70,"Bhajji");
             
        Students2 s6 = new Students2(30,"Mayur");

        ArrayList l = new ArrayList();

        l.add(s1);

        l.add(s2);

        l.add(s3);

        l.add(s4);
        
        l.add(s5);
        
        l.add(s6);

    
        Collections.sort(l , new Students2(00, null));

 
        System.out.println(l);
        

    }
}

class Students2 implements Comparator {

    int empId;
    
    String name;

    Students2(int empId, String name) {
        this.empId = empId;
        
        this.name=name;
    }


    public int compare( Object obj1, Object obj2)
    {
        
        int empId1=    ((Students2) obj1).empId;
        
        int empId2 =   ((Students2) obj2).empId;
        
  
        if(empId1< empId2)
        {
            return +1;
        }
        
        else if(empId1> empId2)
        {
            return -1;
        }
    
        else
        {
            return 0;
        }
    }
    
    
    
    @Override
    public String toString()
{
    return empId+"" + name;
}


}


/*
run:
[70, 70, 40, 30, 30, 10]
BUILD SUCCESSFUL (total time: 0 seconds)


run:
[70Yuvraj, 70Bhajji, 40Vikas, 30Dravid, 30Mayur, 10Sachin]
BUILD SUCCESSFUL (total time: 0 seconds)



*/