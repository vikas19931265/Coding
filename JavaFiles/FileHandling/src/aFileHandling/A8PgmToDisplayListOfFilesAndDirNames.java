package aFileHandling;


// Demo program displaying use of f.list() method.



import java.io.*;

class FileHandlingSample
{

    public static void main(String[] args)
    {
        File f = new File("//home//vikas//Desktop");

         String[] s = f.list();

         int count=0;

         for(String s1: s)
        {

            System.out.println(s1);

            count++;

        }

       System.out.println("Count of the files is "+ count);

    }

}


/*
run:
Swing
Coupling_Cohension
Polymorphism
StringClass
ExceptionHandling
WebAppDemo
JDBC
FlowControl
InstanceBlockAndControlFlow
MutliThreadingEnhancements
BeerApplication
Collections.Queue
Packages
Interview
Collections.Set
Inheritance
JavaSourceFileStructure
FileHandling
abstractClass
Collections
ObjectTypeCasting
Collections.Map
InnerClasses
SingleTonClass
HTML
importStatements
CommandLineArguments
Test
Mutlithreading
PMToolNew
Testing
Docs
Methods
LiteralsAndReservedKeywords
WaysOfCreatingObjects
JavaApplication22
ObjectClass
03_04_2018
Servlets
DataTypes
Constructors
Collections.ConcurrentCollections
StaticBlockAndControlFlow
Collections.UtilityClass
Generics
thisAndsuper
Programs
PMTool
PMFTool
Collections.List
Interfaces
Arrays
Modifiers
Variables
ObjectClasses
Operators
Collections.CollectionInterface
SpeedDistanceTime
Count of the files is 58
BUILD SUCCESSFUL (total time: 0 seconds)

*/