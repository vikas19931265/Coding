package gJVMandProgrammerExceptons_Top10Exceptions;

/* very important for interview

Difference between ClassNotFoundException and NoClassDefFoundError
==========================================================================


For hardcoded( we are writing class in our program) class names , at runtime if the 
corresponding .class file is not present then  we will get RuntimeException saying
"NoClassDefFoundError" which is Unchecked.

    Example

        Test t = new Test();

    At run if Test.class file is not present then we will get Runtime exception 
    saying RE: NoClassDefFoundError: Test



For dynamically provided classes names given at runtime , if the corresponding .class file
is not available then we will get RuntimeException saying RE: "ClassNotFoundException" , which
is CheckedException.


    Example

            Object o =Class.forName(args[0]).newInstance()

            Java Test Student

            At run time , if Student.class file is not available then we will get Runtime
            exception saying

            RE: ClassNotFoundException: Student



*/
