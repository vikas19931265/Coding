
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

class Map extends Mapper<LongWritable,Text,Text,IntWritable>
	{
		public void map(LongWritable key, Text value, Context con) throws IOException,InterruptedException
		{

		String str=value.toString();
	        char[] ch =str.toCharArray();
	        for(char ch1: ch)
	        {
	           
	           Character ch2  = Character.valueOf(ch1);
	           String s2= ch2.toString(); 
	           Text t = new Text(s2);
	           con.write(t, new IntWritable(1));
	        }
	    
			
		}
		
	}
