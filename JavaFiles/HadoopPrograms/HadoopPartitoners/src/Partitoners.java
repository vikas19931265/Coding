
import java.io.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.mapreduce.lib.input.*;
import org.apache.hadoop.mapreduce.lib.output.*;
import org.apache.hadoop.util.*;

class Partitoners extends Partitioner<Text, Text> {

    @Override
    public int getPartition(Text key, Text value, int numReduceTasks) {

        String val = value.toString();

        String[] str = val.split(",");

        String age2 = str[2];

        int age = Integer.parseInt(age2);

        if (numReduceTasks == 0) {
            return 0;
        }

        if (age <= 20) {
            return 0;
        }

        if (age > 20 && age <= 30) {
            return 1 % numReduceTasks;
        } else {
            return 2 % numReduceTasks;
        }

    }

}
