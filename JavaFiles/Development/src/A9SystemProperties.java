/*

System Properties
==================================

For every system some persistent information will be maintained in the form of 
System properties. These includes name of the Operating System , Java Version
JVM vendor , User Country etc. 

We can get System properties by using getProperties() method of the system class.

Demo Program to print the System Properties.. */


import java.util.*;

class Testss
{
    public static void main(String[] args)
    {
        Properties p =System.getProperties();
        p.list(System.out);
    }
}

/*

$javac Test.java
$java -Xmx128M -Xms16M Test
-- listing properties --
java.runtime.name=OpenJDK Runtime Environment
sun.boot.library.path=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0...
java.vm.version=25.141-b16
java.vm.vendor=Oracle Corporation
java.vendor.url=http://java.oracle.com/
path.separator=:
java.vm.name=OpenJDK 64-Bit Server VM
file.encoding.pkg=sun.io
user.country=US
sun.java.launcher=SUN_STANDARD
sun.os.patch.level=unknown
java.vm.specification.name=Java Virtual Machine Specification
user.dir=/home/cg/root/193757
java.runtime.version=1.8.0_141-b16
java.awt.graphicsenv=sun.awt.X11GraphicsEnvironment
java.endorsed.dirs=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0...
os.arch=amd64
java.io.tmpdir=/tmp
line.separator=

java.vm.specification.vendor=Oracle Corporation
os.name=Linux
sun.jnu.encoding=UTF-8
java.library.path=/home/cg/root/GNUstep/Library/Librari...
java.specification.name=Java Platform API Specification
java.class.version=52.0
sun.management.compiler=HotSpot 64-Bit Tiered Compilers
os.version=3.10.0-862.9.1.el7.x86_64
user.home=?
user.timezone=
java.awt.printerjob=sun.print.PSPrinterJob
file.encoding=UTF-8
java.specification.version=1.8
user.name=?
java.class.path=/home/cg/root/GNUstep/Library/Librari...
java.vm.specification.version=1.8
sun.arch.data.model=64
java.home=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0...
sun.java.command=Test
java.specification.vendor=Oracle Corporation
user.language=en
awt.toolkit=sun.awt.X11.XToolkit
java.vm.info=mixed mode
java.version=1.8.0_141
java.ext.dirs=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0...
sun.boot.class.path=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0...
java.vendor=Oracle Corporation
file.separator=/
java.vendor.url.bug=http://bugreport.sun.com/bugreport/
sun.cpu.endian=little
sun.io.unicode.encoding=UnicodeLittle
sun.cpu.isalist=

*/


    
