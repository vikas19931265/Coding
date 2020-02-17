package Classes_Objects_OOPS_Enum;
 class Student {
    static int count = 0;
    {
        if (this instanceof Student) {
            count++;
            if (count > 4) {
                throw new StudException("More then 3 objects of students are created");
            }
        }
    }
    public static void main(String[] args) {
        Student s = new Student();
        Student s1 = new Student();
        Student s3 = new Student();
        Student s4 = new Student();
        Student s5 = new Student();
    }
}
class StudException extends RuntimeException {
    StudException(String s) {
        super(s);
    }
}
/*
run:
Exception in thread "main" Classes_Objects_OOPS.StudException: More then 3 objects of students are created
	at Classes_Objects_OOPS.Student.<init>(NewClass.java:16)
	at Classes_Objects_OOPS.Student.main(NewClass.java:34)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)
*/