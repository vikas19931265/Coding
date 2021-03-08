package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/accounts/AccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/accounts/AccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountsLV.pcf: line 26, column 42
    function sortValue_0 (Account :  entity.Account) : java.lang.Object {
      return Account.AccountNumber
    }
    
    // 'sortBy' attribute on TextCell (id=AccountHolder_Cell) at AccountsLV.pcf: line 33, column 39
    function sortValue_1 (Account :  entity.Account) : java.lang.Object {
      return Account.AccountHolder.DisplayName
    }
    
    // 'value' attribute on RowIterator at AccountsLV.pcf: line 19, column 36
    function value_11 () : entity.Account[] {
      return Accounts
    }
    
    property get Accounts () : Account[] {
      return getRequireValue("Accounts", 0) as Account[]
    }
    
    property set Accounts ($arg :  Account[]) {
      setRequireValue("Accounts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/accounts/AccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountsLV.pcf: line 26, column 42
    function action_2 () : void {
      AccountDetail.drilldown(Account)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountsLV.pcf: line 26, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AccountDetail.createDestination(Account)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at AccountsLV.pcf: line 19, column 36
    function checkBoxVisible_10 () : java.lang.Boolean {
      return perm.System.accountmng
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountsLV.pcf: line 26, column 42
    function valueRoot_5 () : java.lang.Object {
      return Account
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountsLV.pcf: line 26, column 42
    function value_4 () : java.lang.String {
      return Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at AccountsLV.pcf: line 33, column 39
    function value_7 () : entity.Contact {
      return Account.AccountHolder
    }
    
    property get Account () : entity.Account {
      return getIteratedValue(1) as entity.Account
    }
    
    
  }
  
  
}