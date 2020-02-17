/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package RegularExpressions;

/*
B6RemoveWhiteSpacesUsingRegex
*/

class RemoveWhiteSpaceUsingRegex
{
    public static void main(String[] args)
    {
        String input="my name is vikas gautam";
        input=input.replaceAll("\\s+","");
        System.out.println(input);
    }
}
/*
run:
mynameisvikasgautam
BUILD SUCCESSFUL (total time: 1 second) */