package gw.plugin.contact.findduplicates
uses gw.plugin.contact.findduplicates.querybuilder.UserContactQueryBuilder
uses gw.plugin.contact.findduplicates.PersonDuplicateFinder

uses gw.api.database.Query
uses java.util.ArrayList

/**
 * UserContact subtype helper
 */
@Export
class UserDuplicateFinder extends PersonDuplicateFinder<ABUserContact> {

  override function validateMandatoryFields() {
    if ((_searchContact.FirstName == null or _searchContact.LastName == null) 
               and _searchContact.EmployeeNumber == null)
      throwException(_searchContact)
  }
  
  override function makeQueries() : List<Query<ABUserContact>> {
    var queries = new ArrayList<Query<ABUserContact>>()
    
    //Query: Name
    if (haveName()) {
      new UserContactQueryBuilder<ABUserContact>(_searchContact)
        .startsWithFirstName()//AND
        .hasEqualLastName()
        .buildAndAdd(queries)
    }
    
    //Query: EmployeeNumber
    new UserContactQueryBuilder<ABUserContact>(_searchContact)
      .hasEqualEmployeeNumber()
      .buildAndAdd(queries)

    return queries
  }

  override function isExactMatch(
    searchContact : ABUserContact, resultABContact : ABUserContact) : boolean {

    var searchUserContact = searchContact
    var resultUserContact = resultABContact
    return equalsAndNotNull<String>(searchUserContact.EmployeeNumber, resultUserContact.EmployeeNumber)
  }
}
