
import java.io.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.mapreduce.lib.input.*;
import org.apache.hadoop.mapreduce.lib.output.*;
import org.apache.hadoop.util.*;

public class Partioners extends Partitioner<Text,Text>{
    
    public int getPartition(Text key, Text value, int numOfReduceTasks)
    {
         String line  = value.toString();
         String[] elements  = line.split("\t");
         int age=Integer.parseInt(elements[2]);
         if(age<20)
         {
             return 0;
         }
         
         else if(age>20&&age<=30)
         {
             return 1;
         }
         
         else
         {
             return 2;
         }
        
    }


}
