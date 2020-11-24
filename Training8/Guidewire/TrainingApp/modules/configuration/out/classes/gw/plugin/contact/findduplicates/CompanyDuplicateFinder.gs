package gw.plugin.contact.findduplicates
uses gw.plugin.contact.findduplicates.querybuilder.CompanyQueryBuilder

uses gw.api.database.IQueryBuilder
uses gw.api.database.Query
uses java.util.ArrayList

/**
 * Company subtype helper
 */
@Export
class CompanyDuplicateFinder<C extends ABCompany> extends DuplicateFinderBase<C> {

  override function validateMandatoryFields() {
    if (_searchContact.Name == null or
          (hasNoPrimaryAddress() and
           hasNoPhoneNumber() and
           _searchContact.TaxID == null))
      throwException(_searchContact)
  }
  
  override function isExactMatch(searchContact : C, resultABContact : C) : boolean {
    return equalsAndNotNull<String>(searchContact.TaxID, resultABContact.TaxID) &&
           equalsAndNotNull<String>(searchContact.Name, resultABContact.Name)
  }

  override function haveName() : boolean { return true }

  override function makeQueries() : List<Query<C>> {
    var queries = new ArrayList<Query<C>>()

    //Query: TaxID
    new CompanyQueryBuilder<C>(_searchContact)
      .hasEqualTaxId()//AND
      .buildAndAdd(queries)
    
    //Query: Name and PhoneNumber
    if (not hasNoPhoneNumber()) {
      new CompanyQueryBuilder<C>(_searchContact)
        .startsWithName()//AND
        .hasEqualPhoneNumbers()
        .buildAndAdd(queries)
    }
    
    //Query: Name and Address
    if (not hasNoPrimaryAddress()) {
      new CompanyQueryBuilder<C>(_searchContact)
        .startsWithName()//AND
        .hasEqualAddress()
        .buildAndAdd(queries)
    }
    
    return queries
  }

}
