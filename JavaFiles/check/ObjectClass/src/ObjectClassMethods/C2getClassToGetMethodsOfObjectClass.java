
import java.lang.reflect.*;

class getClassToGetMethodsOfObjectClass
{

	public static void main(String[] args)
	{

		Object o = new Object();
		
		Class c = o.getClass();

		Method[] m = c.getDeclaredMethods();
		
		for(Method m1: m)
		{

			System.out.println(m1.getName());
	
		}
	

	}

}

/*
equals
toString
hashCode
compareTo
compareTo
indexOf
indexOf
indexOf
indexOf
indexOf
indexOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
charAt
checkBounds
codePointAt
codePointBefore
codePointCount
compareToIgnoreCase
concat
contains
contentEquals
contentEquals
copyValueOf
copyValueOf
endsWith
equalsIgnoreCase
format
format
getBytes
getBytes
getBytes
getBytes
getChars
getChars
indexOfSupplementary
intern
isEmpty
join
join
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOfSupplementa
length
matches
nonSyncContentEquals
offsetByCodePoints
regionMatches
regionMatches
replace
replace
replaceAll
replaceFirst
split
split
startsWith
startsWith
subSequence
substring
substring
toCharArray
toLowerCase
toLowerCase
toUpperCase
toUpperCase
trim

*/

