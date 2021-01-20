/*

Which of the follownig assignements are legal.


int i =10; // legal

Integer I=10; // legal

int i=10l; // illegal

Long l =10l; // legal

Long l=10;  // legal , widening

Object o=10; // legal

double d =10; // legal

Double D=10;  // illegal

Number n =10; // legal

*/

package AutoBoxingAndAutoUnboxing;

class Demo6
{


int i =10; // legal

Integer I=10; // legal(autoboxing)

int i1=10l; // illegal(long to int is invalid) CE: possible loss of precision, found long, required int

Long l1 =10l; // legal (autoboxing)

Long l2=10;  // illegal(incompatible types, found int , required Long)

long l3 =10; // legal( widening)

Object o1=10; // legal( first autoboxing and then widening)

double d1 =10; // legal(widening)

Double D=10;  // illegal(incompatible type, found int, required Double)

Number n =10; // legal(autoboxing followed by widening)


}