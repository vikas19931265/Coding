/*
Program

System.out.println(input.replaceAll("(\\w)\\1+","$1"));

This means match any word character first, keep it in group
followd by same character in group(\\1) repeated one ore more
times to be replaced with the character in the group($1).
*/

package RegularExpressions;
class RemoveRepeatingCharFromString
{
    public static void main(String[] args)
    {
        String input="vvvviiiikkkkaaassss";
        System.out.println(input.replaceAll("(\\w)\\1+","$1"));
        
    }
}

/*
run:
vikas
BUILD SUCCESSFUL (total time: 1 second)

*/