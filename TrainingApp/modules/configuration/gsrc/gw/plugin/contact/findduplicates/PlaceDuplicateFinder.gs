package gw.plugin.contact.findduplicates
uses gw.plugin.contact.findduplicates.querybuilder.PlaceQueryBuilder

uses gw.api.database.Query
uses java.util.ArrayList

/**
 * Place subtype helper
 */
@Export
class PlaceDuplicateFinder extends DuplicateFinderBase<ABPlace> {

  override function validateMandatoryFields() {
    if (_searchContact.Name == null and hasNoPrimaryAddress())
      throwException(_searchContact)
  }
  
  override function makeQueries() : List<Query<ABPlace>> {
    var queries = new ArrayList<Query<ABPlace>>()
    
    //Query: Name
    new PlaceQueryBuilder<ABPlace>(_searchContact)
      .startsWithName()
      .buildAndAdd(queries)

    //Query: Address
    new PlaceQueryBuilder<ABPlace>(_searchContact)
      .hasEqualAddress()
      .buildAndAdd(queries)

    return queries
  }

  override function isExactMatch(searchContact : ABPlace, resultABContact : ABPlace) : boolean {
    return equalsAndNotNull<String>(searchContact.Name, resultABContact.Name) &&
           addressMatches(resultABContact)
  }

  override function haveName() : boolean { return true }
}
