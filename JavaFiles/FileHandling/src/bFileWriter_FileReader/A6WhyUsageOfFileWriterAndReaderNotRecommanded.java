/*

Usage of FileWriter and FileReader is not Recommanded due to the following reasons
===========================================================================================


1. While writing data by FileWriter compulsary we should insert the line separator(\n)
   manually which is a bigger head ache to the programmer.


2. While reading data by the FileReader we have to read character by character instead
   of the line by line which is not convenient to the programmer.

3. To overcome these limitations we should go for the BufferedWriter and BufferedReader concepts.


*/