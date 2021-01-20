package Reflection;

// Program to find all the methods which are present in the String class.


import java.lang.reflect.*;

 class ReflectionDemo
{
    public static void main(String[] args) throws Exception
    {
     Class c=Class.forName("java.lang.String");
            
     Method[] m  =c.getDeclaredMethods();
        
     for(Method m1: m)
     {
         System.out.println(m1);
     }
        
    }
    
}


/*
$javac ReflectionDemo.java
$java -Xmx128M -Xms16M ReflectionDemo
public boolean java.lang.String.equals(java.lang.Object)
public java.lang.String java.lang.String.toString()
public int java.lang.String.hashCode()
public int java.lang.String.compareTo(java.lang.Object)
public int java.lang.String.compareTo(java.lang.String)
public int java.lang.String.indexOf(java.lang.String,int)
static int java.lang.String.indexOf(char[],int,int,java.lang.String,int)
static int java.lang.String.indexOf(char[],int,int,char[],int,int,int)
public int java.lang.String.indexOf(int)
public int java.lang.String.indexOf(java.lang.String)
public int java.lang.String.indexOf(int,int)
public static java.lang.String java.lang.String.valueOf(char)
public static java.lang.String java.lang.String.valueOf(java.lang.Object)
public static java.lang.String java.lang.String.valueOf(boolean)
public static java.lang.String java.lang.String.valueOf(char[],int,int)
public static java.lang.String java.lang.String.valueOf(char[])
public static java.lang.String java.lang.String.valueOf(double)
public static java.lang.String java.lang.String.valueOf(float)
public static java.lang.String java.lang.String.valueOf(long)
public static java.lang.String java.lang.String.valueOf(int)
private static void java.lang.String.checkBounds(byte[],int,int)
public int java.lang.String.length()
public boolean java.lang.String.isEmpty()
public char java.lang.String.charAt(int)
public int java.lang.String.codePointAt(int)
public int java.lang.String.codePointBefore(int)
public int java.lang.String.codePointCount(int,int)
public int java.lang.String.offsetByCodePoints(int,int)
public void java.lang.String.getChars(int,int,char[],int)
void java.lang.String.getChars(char[],int)
public byte[] java.lang.String.getBytes()
public byte[] java.lang.String.getBytes(java.lang.String) throws java.io.UnsupportedEncodingException
public void java.lang.String.getBytes(int,int,byte[],int)
public byte[] java.lang.String.getBytes(java.nio.charset.Charset)
public boolean java.lang.String.contentEquals(java.lang.StringBuffer)
public boolean java.lang.String.contentEquals(java.lang.CharSequence)
private boolean java.lang.String.nonSyncContentEquals(java.lang.AbstractStringBuilder)
public boolean java.lang.String.equalsIgnoreCase(java.lang.String)
public int java.lang.String.compareToIgnoreCase(java.lang.String)
public boolean java.lang.String.regionMatches(int,java.lang.String,int,int)
public boolean java.lang.String.regionMatches(boolean,int,java.lang.String,int,int)
public boolean java.lang.String.startsWith(java.lang.String)
public boolean java.lang.String.startsWith(java.lang.String,int)
public boolean java.lang.String.endsWith(java.lang.String)
private int java.lang.String.indexOfSupplementary(int,int)
public int java.lang.String.lastIndexOf(int,int)
static int java.lang.String.lastIndexOf(char[],int,int,char[],int,int,int)
static int java.lang.String.lastIndexOf(char[],int,int,java.lang.String,int)
public int java.lang.String.lastIndexOf(java.lang.String,int)
public int java.lang.String.lastIndexOf(int)
public int java.lang.String.lastIndexOf(java.lang.String)
private int java.lang.String.lastIndexOfSupplementary(int,int)
public java.lang.String java.lang.String.substring(int)
public java.lang.String java.lang.String.substring(int,int)
public java.lang.CharSequence java.lang.String.subSequence(int,int)
public java.lang.String java.lang.String.concat(java.lang.String)
public java.lang.String java.lang.String.replace(char,char)
public java.lang.String java.lang.String.replace(java.lang.CharSequence,java.lang.CharSequence)
public boolean java.lang.String.matches(java.lang.String)
public boolean java.lang.String.contains(java.lang.CharSequence)
public java.lang.String java.lang.String.replaceFirst(java.lang.String,java.lang.String)
public java.lang.String java.lang.String.replaceAll(java.lang.String,java.lang.String)
public java.lang.String[] java.lang.String.split(java.lang.String,int)
public java.lang.String[] java.lang.String.split(java.lang.String)
public static java.lang.String java.lang.String.join(java.lang.CharSequence,java.lang.CharSequence[])
public static java.lang.String java.lang.String.join(java.lang.CharSequence,java.lang.Iterable)
public java.lang.String java.lang.String.toLowerCase(java.util.Locale)
public java.lang.String java.lang.String.toLowerCase()
public java.lang.String java.lang.String.toUpperCase()
public java.lang.String java.lang.String.toUpperCase(java.util.Locale)
public java.lang.String java.lang.String.trim()
public char[] java.lang.String.toCharArray()
public static java.lang.String java.lang.String.format(java.util.Locale,java.lang.String,java.lang.Object[])
public static java.lang.String java.lang.String.format(java.lang.String,java.lang.Object[])
public static java.lang.String java.lang.String.copyValueOf(char[],int,int)
public static java.lang.String java.lang.String.copyValueOf(char[])
public native java.lang.String java.lang.String.intern()

*/