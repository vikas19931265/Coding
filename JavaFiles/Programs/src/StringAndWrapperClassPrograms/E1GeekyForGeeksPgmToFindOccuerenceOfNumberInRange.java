
package BasicPgms;

class DemoPgm {

    public static void main(String[] args) {
        int value = new DemoPgm().findValue(100, 250, 3);
        System.out.println(value);
    }

    public int findValue(int lowerBound, int upperBound, int number) {

        int count = 0;
        int length = 0;
        for (int i = lowerBound + 1; i < upperBound; i++) {

            String element = Integer.toString(i);
            String ele1=element;
            element = element.replaceAll("[^3]", "");
            if (element.length() == 0) {
                continue;
            }
            System.out.println(ele1);
            length = element.length();
            count = count + length;
        }
        return count;
    }

}
/*
run:
103
113
123
130
131
132
133
134
135
136
137
138
139
143
153
163
173
183
193
203
213
223
230
231
232
233
234
235
236
237
238
239
243
35
BUILD SUCCESSFUL (total time: 0 seconds)

*/
