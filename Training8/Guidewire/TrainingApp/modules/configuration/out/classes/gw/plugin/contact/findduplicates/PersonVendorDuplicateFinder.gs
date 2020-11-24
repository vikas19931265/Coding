package gw.plugin.contact.findduplicates
uses gw.plugin.contact.findduplicates.PersonDuplicateFinder
uses gw.plugin.contact.findduplicates.querybuilder.PersonQueryBuilder

uses gw.api.database.Query
uses java.util.ArrayList

/**
 * PersonVendor subtype helper
 */
@Export
class PersonVendorDuplicateFinder extends PersonDuplicateFinder<ABPersonVendor> {

  override function validateMandatoryFields() {
    if (_searchContact.FirstName == null or _searchContact.LastName == null or
          (hasNoPrimaryAddress() and
           hasNoPhoneNumber() and
           _searchContact.TaxID == null))
      throwException(_searchContact)
  }
  
  override function makeQueries() : List<Query<ABPersonVendor>> {
    var queries = new ArrayList<Query<ABPersonVendor>>()

    new PersonQueryBuilder<ABPersonVendor>(_searchContact)
      .hasEqualTaxId()//AND
      .buildAndAdd(queries)
    
    //Query: Name and PhoneNumber
    if (not hasNoPhoneNumber()) {
      new PersonQueryBuilder<ABPersonVendor>(_searchContact)
        .startsWithFirstName()//AND
        .hasEqualLastName()//AND
        .hasEqualPhoneNumbers()
        .buildAndAdd(queries)
    }

    //Query: Name and Address
    if (not hasNoPrimaryAddress()) {
      new PersonQueryBuilder<ABPersonVendor>(_searchContact)
        .startsWithFirstName()//AND
        .hasEqualLastName()//AND
        .hasEqualAddress()
        .buildAndAdd(queries)
    }
    
    return queries
  }

  override function isExactMatch(
    searchContact : ABPersonVendor, resultABContact : ABPersonVendor) : boolean {

    return equalsAndNotNull<String>(searchContact.FirstName, resultABContact.FirstName) &&
           equalsAndNotNull<String>(searchContact.LastName, resultABContact.LastName) &&
           equalsAndNotNull<String>(searchContact.TaxID, resultABContact.TaxID)
  }

}
