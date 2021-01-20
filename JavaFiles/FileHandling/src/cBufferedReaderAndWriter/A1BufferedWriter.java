/*

BufferedWriter
========================================

By using the BufferedWriter object we can write character data to the file.


Constructors present in the BufferedWriter
===============================================

       BufferedWriter bw = new BufferedWriter(writer w);
       BufferedWriter bw = new BufferedWriter(writer w, int bufferSize);


Note: BufferedWriter never communicates directly with the file. It should always communicate
      via some writer like FileWriter.



Which of the following declarations are valid??
------------------------------------------------------


1. BufferedWriter bw = new BufferedWriter("cricket.txt"); // invalid

2. BufferedWriter bw = new BufferedWriter(new File("crikcet.txt")); // invalid

3. BufferedWriter bw = new BufferedWriter( new FileWriter("cricket.txt)); // valid


4. BufferedWriter bw = new BufferedWriter( new BufferedWriter( new FileWriter("cricket.txt"))); (valid)

        -----This is called as two level buffering which is completely valid--------------------------


Methods present in the BufferedWriter
-----------------------------------------

1. write(int ch);

2. write(char[] c);

3. write(String s);

4. flush(); ---flush is applicable only for the Writers and not for the Readers--------

5. close();

6. newline();  // inserting a new line to the file.



When compared to the FileWriter which of the following capability(facility) is available as method
in BufferedWriter

1. Writing data to the file.

2. Closing the Writer

3. Flush the Writer

4. Inserting newline character  -----this is correct-----




*/