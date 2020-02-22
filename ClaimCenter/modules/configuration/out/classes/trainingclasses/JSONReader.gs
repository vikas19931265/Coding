/*
 Sample program to read json file
 */
package trainingclasses

uses org.json.simple.parser. *;
uses org.json.simple. *;
uses java.io.FileReader
uses java.io. *;
uses java.util.Map

class JSONReader {
  public function readJSONFile(): void
  {
    var jsonParser = new JSONParser();
    try
    {
      var reader = new FileReader("C:\\Users\\Vikas.Gautam\\Desktop\\example_2.json");
      var obj = jsonParser.parse(reader) as JSONObject;
      var quizObject = obj.get("quiz") as java.util.Map;
      // get all the keys from the map object
      var s = quizObject.entrySet();
      var itr = s.iterator();
      while (itr.hasNext())
      {
        var value = itr.next() as Map.Entry;
        print("key is " + value.Key);
        print("value is " + value.Value);
        var keyValue = value.Value as java.util.Map;
        // from the map object get the size and then the  key and the value respectively
        var keyValuekey = keyValue.entrySet();
        var itr1 = keyValuekey.iterator();
        while (itr1.hasNext())
        {
          var key = itr1.next() as Map.Entry;
          print("key is " + key.Key);
        }
      }
    }
        catch (ex: FileNotFoundException)
        {
        }
  }
}