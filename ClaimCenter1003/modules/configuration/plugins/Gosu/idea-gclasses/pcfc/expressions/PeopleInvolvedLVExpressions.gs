package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/PeopleInvolvedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PeopleInvolvedLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/PeopleInvolvedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PeopleInvolvedLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function action_6 () : void {
      ClaimPartiesInvolvedDetail.drilldown(ClaimContact, claim)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ClaimPartiesInvolvedDetail.createDestination(ClaimContact, claim)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at PeopleInvolvedLV.pcf: line 42, column 25
    function valueRoot_14 () : java.lang.Object {
      return ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function valueRoot_9 () : java.lang.Object {
      return ClaimContact
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at PeopleInvolvedLV.pcf: line 36, column 24
    function value_11 () : java.lang.String {
      return ClaimContact.Roles.join( ", " )
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at PeopleInvolvedLV.pcf: line 42, column 25
    function value_13 () : java.lang.String {
      return ClaimContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function value_8 () : entity.Contact {
      return ClaimContact.Contact
    }
    
    property get ClaimContact () : entity.ClaimContact {
      return getIteratedValue(1) as entity.ClaimContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/PeopleInvolvedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PeopleInvolvedLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function sortValue_0 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.PrimarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function sortValue_1 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.SecondarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function sortValue_2 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.TertiarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at PeopleInvolvedLV.pcf: line 29, column 25
    function sortValue_3 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.QuaternarySortValue
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at PeopleInvolvedLV.pcf: line 36, column 24
    function sortValue_4 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Roles.join( ", " )
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at PeopleInvolvedLV.pcf: line 42, column 25
    function sortValue_5 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on RowIterator at PeopleInvolvedLV.pcf: line 19, column 41
    function value_16 () : entity.ClaimContact[] {
      return ClaimContactList
    }
    
    property get ClaimContactList () : ClaimContact[] {
      return getRequireValue("ClaimContactList", 0) as ClaimContact[]
    }
    
    property set ClaimContactList ($arg :  ClaimContact[]) {
      setRequireValue("ClaimContactList", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    
  }
  
  
}