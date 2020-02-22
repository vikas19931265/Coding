package Practise_WEBSERVICE.Test

uses gw.transaction. *;
uses gw.api.database.Query
uses org.apache.xalan.transformer.KeyManager

class TestBundle
{
  public function run()
  {
    Transaction.runWithNewBundle(\bundle ->
    {
      var company = new entity.ABDoctor();
      bundle.add(company)
      company.FirstName = "Gautam";
      company.LastName = "First";
      company.TaxID = "111-11-1111"
      var tag = new ABContactTag();
      bundle.add(tag)
      tag.Type = typekey.ContactTagType.TC_VENDOR
      company.addToTags(tag)
    }, "su")
    print("bundle committed")
  }
}