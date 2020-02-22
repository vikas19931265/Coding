package Practise_WEBSERVICE.JSONMapper

uses org.json.simple.parser.JSONParser
uses java.io.FileReader
uses org.json.simple.parser. *;
uses org.json.simple. *;
uses java.io.FileReader
uses java.io. *;
uses java.util.Map
uses java.util.HashMap

class JSONReader {
  var map = new HashMap <String, String>();
  public function readJSONFile(path: String): java.util.HashMap<String,String>
  {
    var jsonParser = new JSONParser();
    try
    {
      var reader = new FileReader(path);
      var obj = jsonParser.parse(reader) as JSONObject;
      var value = (obj.get("autoQuoteData")) as JSONObject
      var value1 = (value.get("namedInsureds")) as JSONArray
      var value2 = value1[0] as JSONObject
      var value3 = value2.get("personInfo") as JSONObject
      var key = value3.Keys;
      var itr = key.iterator();
      while (itr.hasNext())
      {
        var keys = itr.next().toString();
        var values = value3.get(keys)
        if (keys.equals("address"))
        {
          var addressValue = value3.get("address") as JSONObject
          var addressKeys = addressValue.Keys;
          var itr1 = addressKeys.iterator();
          while (itr1.hasNext())
          {
            var keys1 = itr1.next().toString();
            var values1 = addressValue.get(keys1)
            map.put(keys1, values1);
          }
        }
        else
          map.put(keys, values);
      }
      print("map is " + map);
    }
        catch (ex: FileNotFoundException)
        {
          print(ex);
        }
  return map;
  }
}