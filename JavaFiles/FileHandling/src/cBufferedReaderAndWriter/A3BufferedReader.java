/*

BufferedReader
======================================================

This is the most enhanced( better) reader to read the character data from the file.


Constructors present in the BufferedReader
================================================================

1. BufferedReader br = new BufferedReader( Reader r);

2. BufferedReader br1= new BufferedReader( Reader r, int BufferSize);


Note:

    BufferedReader cannot communicate directly with the file , it should communicate via some
    reader object.

    The main advantage of BufferedReader over FileReader is that we can read the data line by line
    instead of the character by character.


Methods present in the BufferedReader
----------------------------------------

1. int read()

2. int read(char[] ch)

3. String readLine();

        It attempts to read line and return it from the File. If the next l line is not available
        then this method will return null.

4. void close();



*/
