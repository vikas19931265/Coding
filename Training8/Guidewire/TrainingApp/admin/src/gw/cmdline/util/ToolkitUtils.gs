package gw.cmdline.util

uses java.io.BufferedReader
uses java.io.File
uses java.util.LinkedHashSet
uses gw.internal.schema.gw.xsd.w3c.xmlschema.types.simple.String
uses com.sun.xml.internal.stream.buffer.sax.Properties
uses java.util.Properties
uses gw.internal.gosu.properties.PropertiesPropertySet
uses java.io.IOException
uses java.io.StringReader
uses gw.pl.util.FileUtil
uses gw.pl.io.BOMAwareInputStream;
uses gw.fs.IFile;
uses java.io.InputStream
uses java.io.Reader
uses gw.util.StreamUtil
uses java.lang.Exception
uses java.lang.RuntimeException
uses java.io.FileInputStream

class ToolkitUtils {

  /**
   * Reads a simple CSV file (no commas allowed in content) into a string array.
   */
  static function readSimpleCSV( fileName : String ) : String[] {
    var f = new File( fileName )
    if( not f.exists() ) throw "The file #{fileName} does not exist"
    var returnSet = new LinkedHashSet<String>()
    f.eachLine( \ l -> {
      var valsOnLine = l.split(",").map( \ s -> s.trim() )
      for( claimNum in valsOnLine ) {
        if( not returnSet.contains( claimNum ) ) returnSet.add( claimNum )
      }
    })
    return returnSet.toTypedArray()
  }

  static function readAWRRunPropertiesFile( fileName : String ) : Properties {
    var awrRunDefaults = new Properties()
    awrRunDefaults.load(new StringReader("" +
        "probeVDollarTables = false \n" +
        "  capturePeekedBindVariables = false \n" +
        "  searchQueriesMultipleHistoricPlans = false \n" +
        "  searchQueriesBeginSnapOnly = true \n" +
        "  searchQueriesEndSnapOnly = true \n" +
        "  includeInstrumentationMetadata = false \n" +
        "  outputRawData = false \n" +
        "  includeDatabaseStatistics = true \n" +
        "  probeSqlMonitor = true \n" +
        "  capturePeakedBindVariablesFromAWR = false \n" +
        "  genCallsToAshScripts = false "))
    var f = new File(fileName)
    if (not f.exists()) throw "The file ${fileName} does not exist"
    var props = new java.util.Properties(awrRunDefaults)
    using (var input = new BOMAwareInputStream(new FileInputStream(f)),
        var r = StreamUtil.getInputStreamReader(input)) {
      input.removeBOM()
      props.load(r);
    }
    return props
  }
}