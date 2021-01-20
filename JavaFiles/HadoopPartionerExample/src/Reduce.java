
import java.io.IOException;
import java.util.StringTokenizer;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.fs.Path;
import java.util.*;

public class Reduce extends Reducer<Text,Text,Text,IntWritable> {
        
    public void reduce(Text key, Iterable<Text> value, Context con) throws IOException,InterruptedException
    {
        int maxSalary=0;
        
        for(Text t: value)
        {
            String line  = t.toString();
            String[] elements= line.split("\t");
            int salary = Integer.parseInt(elements[4]);
            if(salary>maxSalary)
            {
                maxSalary=salary;
            }
        
        }
    
        con.write(key, new IntWritable(maxSalary));
    
    }
    

}
