package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/users/UserMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserMattersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/users/UserMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserMattersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UserMattersLV.pcf: line 33, column 40
    function action_5 () : void {
      MatterDetailGroup.go(MatterUserView.Claim, MatterUserView.Matter)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at UserMattersLV.pcf: line 33, column 40
    function action_dest_6 () : pcf.api.Destination {
      return pcf.MatterDetailGroup.createDestination(MatterUserView.Claim, MatterUserView.Matter)
    }
    
    // 'condition' attribute on ToolbarFlag at UserMattersLV.pcf: line 26, column 33
    function condition_4 () : java.lang.Boolean {
      return MatterUserView.canAssign()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserMattersLV.pcf: line 33, column 40
    function valueRoot_8 () : java.lang.Object {
      return MatterUserView
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at UserMattersLV.pcf: line 37, column 46
    function value_10 () : java.lang.String {
      return MatterUserView.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at UserMattersLV.pcf: line 42, column 51
    function value_13 () : gw.api.financials.CurrencyAmount {
      return MatterUserView.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at UserMattersLV.pcf: line 49, column 45
    function value_16 () : java.util.Date {
      return MatterUserView.TrialDate
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at UserMattersLV.pcf: line 54, column 57
    function value_19 () : java.lang.String {
      return MatterUserView.AssigneeDisplayString
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserMattersLV.pcf: line 33, column 40
    function value_7 () : java.lang.String {
      return MatterUserView.Name
    }
    
    property get MatterUserView () : entity.MatterUserView {
      return getIteratedValue(1) as entity.MatterUserView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/users/UserMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserMattersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserMattersLV.pcf: line 33, column 40
    function sortValue_0 (MatterUserView :  entity.MatterUserView) : java.lang.Object {
      return MatterUserView.Name
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at UserMattersLV.pcf: line 37, column 46
    function sortValue_1 (MatterUserView :  entity.MatterUserView) : java.lang.Object {
      return MatterUserView.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at UserMattersLV.pcf: line 42, column 51
    function sortValue_2 (MatterUserView :  entity.MatterUserView) : java.lang.Object {
      return MatterUserView.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at UserMattersLV.pcf: line 49, column 45
    function sortValue_3 (MatterUserView :  entity.MatterUserView) : java.lang.Object {
      return MatterUserView.TrialDate
    }
    
    // 'value' attribute on RowIterator at UserMattersLV.pcf: line 21, column 87
    function value_22 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return MatterUserViewList
    }
    
    property get MatterUserViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("MatterUserViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set MatterUserViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("MatterUserViewList", 0, $arg)
    }
    
    
  }
  
  
}