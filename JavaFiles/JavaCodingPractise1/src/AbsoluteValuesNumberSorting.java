/*
    absolute values number sorting
*/
package New;
class absoluteValueNumberSorting
{
    public static void main(String[] args)
    {
        int[] a={1,-7,-1,3,4,8,-2};
        for(int i=0;i<a.length;i++)
        {
            for(int j=i+1; j<a.length; j++)
            {
                if(Math.abs(a[i])>Math.abs(a[j]))
                {
                    int temp=a[j];
                    a[j]=a[i];
                    a[i]=temp;
                }
            }
        }
        for(int a2:a)
        {
            System.out.println(a2);
        }
    }
}

/*
run:
1
-1
-2
3
4
-7
8
BUILD SUCCESSFUL (total time: 0 seconds)

*/