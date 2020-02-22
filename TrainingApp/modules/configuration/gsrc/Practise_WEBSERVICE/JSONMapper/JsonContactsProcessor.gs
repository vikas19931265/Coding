package Practise_WEBSERVICE.JSONMapper

uses gw.xml.ws.annotation.WsiWebService
uses gw.xml.ws.annotation.WsiPermissions
uses java.util.Map
uses gw.transaction.Transaction
uses gw.api.database.Query

@WsiWebService
@WsiPermissions({})
public class JsonContactsProcessor {
  public function addContact(req: String)
  {
    // get hashmap object from JSON Reader
    var jsonObject = new JSONReader();
    var hashObject = jsonObject.readJSONFile(req);
    // build the request object
    var jsonRequest = new JSONRequest();
    jsonRequest.firstName = hashObject.get("firstName");
    jsonRequest.lastName = hashObject.get("lastName");
    jsonRequest.mobileNumber = hashObject.get("mobileNumber");
    jsonRequest.age = hashObject.get("age");
    jsonRequest.emailAddress = hashObject.get("emailAddress");
    jsonRequest.state = hashObject.get("state");
    jsonRequest.country = hashObject.get("country");
    jsonRequest.city = hashObject.get("city");
    jsonRequest.postalCode = hashObject.get("postalCode");
    jsonRequest.addressLine1 = hashObject.get("addressLine1");
    jsonRequest.gender=hashObject.get("gender");
    jsonRequest.maritalStatus=hashObject.get("maritalStatus")
    jsonRequest.dob=hashObject.get("dob");
    var resp = setContact(jsonRequest)

  }

  public  function setContact(req: JSONRequest): JsonResponse
  {
    var resp = new JsonResponse();
    var jsonObject = new JSONReader();
    var hashObject = jsonObject.readJSONFile(req);
    print(req.gender);
    resp.setContacts(hashObject)
    var contacts = Query.make(entity.ABPerson).select()
    contacts.each( \ contact ->print(contact.FirstName) );
    var status=contacts.hasMatch(\contact -> ((contact.FirstName.equals(req.firstName))&&(contact.LastName.equals(req.lastName))))
    if (!status)
    {
      Transaction.runWithNewBundle(\bundle ->
      {
        var company = new entity.ABPerson();
        bundle.add(company)
        company.FirstName = req.firstName
        company.LastName = req.lastName
        company.TaxID = "111-11-1111"
        company.EmailAddress1 = req.emailAddress;
        var adr = new entity.Address();
        adr.AddressLine1 = req.addressLine1;
        adr.City = req.city;
        adr.County = req.country;
        adr.PostalCode = req.postalCode
        adr.State = req.state;
        company.DateOfBirth=req.dob;
        if (req.gender.equals("M"))
        {
          company.Gender = typekey.GenderType.TC_M
        }
        else {
          company.Gender = typekey.GenderType.TC_F
        }
        if (req.maritalStatus.equals("M"))
        {
          company.MaritalStatus = typekey.MaritalStatus.TC_MARRIED
        }
        else
        {
          company.MaritalStatus = typekey.MaritalStatus.TC_SINGLE
        }
        company.addAddress(adr);
        company.CellPhone = req.mobileNumber;
        var tag = new ABContactTag();
        bundle.add(tag)
        tag.Type = typekey.ContactTagType.TC_VENDOR
        company.addToTags(tag)
        print("data inserted successfully");
      }, "su")
    }
    else
    {
      print("duplicate contact exists");
    }
    return resp;
  }
}

