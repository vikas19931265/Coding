import java.io.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.mapreduce.lib.input.*;
import org.apache.hadoop.mapreduce.lib.output.*;
import org.apache.hadoop.util.*;

class Map extends Mapper<LongWritable, Text, Text, Text> {

    public void map(LongWritable key, Text value, Context con) throws IOException, InterruptedException {

        String line = value.toString();
        String[] elements = line.split(",");
        String sex = elements[3];
        Text gender = new Text(sex);
        con.write(new Text(gender), new Text(value));

    }

}
