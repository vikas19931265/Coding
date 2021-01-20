//App14: Program to display Parameter meta information by using ParameterMetaData

/*
Note: Most of the drivers won't provide support for ParameterMetaData.
*/

import java.sql.*;

class ParameterMetaDataDemos {

    public static void main(String[] args) throws Exception {

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        PreparedStatement pst = con.prepareStatement("insert into employees values(?,?,?,?)");
        
        ParameterMetaData pmd = pst.getParameterMetaData();
        
        int count = pmd.getParameterCount();

        for (int i = 1;i<= count;i++) {

            System.out.println("Parameter Number:" + i);

            System.out.println("Parameter Mode:" + pmd.getParameterMode(i));

            System.out.println("Parameter Type:" + pmd.getParameterType(i));

            System.out.println("Parameter Precision:" + pmd.getPrecision(i));

            System.out.println("Parameter Scale:" + pmd.getScale(i));

            System.out.println("Parameter isSigned:" + pmd.isSigned(i));

            System.out.println("Parameter isNullable:" + pmd.isNullable(i));

            System.out.println("---------------");

        }

        con.close();
    }
}
/*
run:
Parameter Number:1
Parameter Mode:1
Parameter Type:2
Parameter Precision:0
Parameter Scale:-127
Parameter isSigned:true
Parameter isNullable:1
---------------
Parameter Number:2
Parameter Mode:1
Parameter Type:12
Parameter Precision:10
Parameter Scale:0
Parameter isSigned:true
Parameter isNullable:1
---------------
Parameter Number:3
Parameter Mode:1
Parameter Type:2
Parameter Precision:0
Parameter Scale:-127
Parameter isSigned:true
Parameter isNullable:1
---------------
Parameter Number:4
Parameter Mode:1
Parameter Type:12
Parameter Precision:10
Parameter Scale:0
Parameter isSigned:true
Parameter isNullable:1
---------------
BUILD SUCCESSFUL (total time: 0 seconds)

*/