/*

Pgm to insert data into the XML
=====================================


*/
package A4WebRowSet;

import java.sql.*;

import javax.sql.rowset.*;

import java.io.*;

class Demo5
{
    public static void main(String[] args) throws Exception
    {
        RowSetFactory rsw= RowSetProvider.newFactory();
        
        WebRowSet rs= rsw.createWebRowSet();
        
        rs.setUrl("jdbc:mysql:///vikasDB");

        rs.setUsername("vikas");

        rs.setPassword("vikas@1265");
        
        rs.setCommand("select * from account");
        
        rs.execute();
        
        FileWriter fw= new FileWriter("/home/vikas/Desktop/sample.xml");
        
        rs.writeXml(fw);
        
        System.out.println("Employee data is inserted successfully");
        
    }
}

/*

<?xml version="1.0"?>
<webRowSet xmlns="http://java.sun.com/xml/ns/jdbc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://java.sun.com/xml/ns/jdbc http://java.sun.com/xml/ns/jdbc/webrowset.xsd">
  <properties>
    <command>select * from account</command>
    <concurrency>1008</concurrency>
    <datasource><null/></datasource>
    <escape-processing>true</escape-processing>
    <fetch-direction>1000</fetch-direction>
    <fetch-size>0</fetch-size>
    <isolation-level>2</isolation-level>
    <key-columns>
    </key-columns>
    <map>
    </map>
    <max-field-size>0</max-field-size>
    <max-rows>0</max-rows>
    <query-timeout>0</query-timeout>
    <read-only>true</read-only>
    <rowset-type>ResultSet.TYPE_SCROLL_INSENSITIVE</rowset-type>
    <show-deleted>false</show-deleted>
    <table-name>account</table-name>
    <url>jdbc:mysql:///vikasDB</url>
    <sync-provider>
      <sync-provider-name>com.sun.rowset.providers.RIOptimisticProvider</sync-provider-name>
      <sync-provider-vendor>Oracle Corporation</sync-provider-vendor>
      <sync-provider-version>1.0</sync-provider-version>
      <sync-provider-grade>2</sync-provider-grade>
      <data-source-lock>1</data-source-lock>
    </sync-provider>
  </properties>
  <metadata>
    <column-count>3</column-count>
    <column-definition>
      <column-index>1</column-index>
      <auto-increment>false</auto-increment>
      <case-sensitive>false</case-sensitive>
      <currency>false</currency>
      <nullable>0</nullable>
      <signed>true</signed>
      <searchable>true</searchable>
      <column-display-size>10</column-display-size>
      <column-label>id</column-label>
      <column-name>id</column-name>
      <schema-name></schema-name>
      <column-precision>10</column-precision>
      <column-scale>0</column-scale>
      <table-name>account</table-name>
      <catalog-name>vikasDB</catalog-name>
      <column-type>4</column-type>
      <column-type-name>INT</column-type-name>
    </column-definition>
    <column-definition>
      <column-index>2</column-index>
      <auto-increment>false</auto-increment>
      <case-sensitive>false</case-sensitive>
      <currency>false</currency>
      <nullable>1</nullable>
      <signed>false</signed>
      <searchable>true</searchable>
      <column-display-size>10</column-display-size>
      <column-label>name</column-label>
      <column-name>name</column-name>
      <schema-name></schema-name>
      <column-precision>10</column-precision>
      <column-scale>0</column-scale>
      <table-name>account</table-name>
      <catalog-name>vikasDB</catalog-name>
      <column-type>12</column-type>
      <column-type-name>VARCHAR</column-type-name>
    </column-definition>
    <column-definition>
      <column-index>3</column-index>
      <auto-increment>false</auto-increment>
      <case-sensitive>false</case-sensitive>
      <currency>false</currency>
      <nullable>1</nullable>
      <signed>true</signed>
      <searchable>true</searchable>
      <column-display-size>22</column-display-size>
      <column-label>balance</column-label>
      <column-name>balance</column-name>
      <schema-name></schema-name>
      <column-precision>22</column-precision>
      <column-scale>31</column-scale>
      <table-name>account</table-name>
      <catalog-name>vikasDB</catalog-name>
      <column-type>8</column-type>
      <column-type-name>DOUBLE</column-type-name>
    </column-definition>
  </metadata>
  <data>
    <currentRow>
      <columnValue>1</columnValue>
      <columnValue>vikas</columnValue>
      <columnValue>2000.0</columnValue>
    </currentRow>
    <currentRow>
      <columnValue>2</columnValue>
      <columnValue>gautam</columnValue>
      <columnValue>15000.0</columnValue>
    </currentRow>
  </data>
</webRowSet>
*/