package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminMenuTreeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTree2ExpressionsImpl extends AdminMenuTreeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'elementLabel' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 15, column 58
    function elementLabel_0 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 15, column 58
    function elementValueSetter_1 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 15, column 58
    function onClickElement_2 () : void {
      if(element typeis User) {UserDetailPage.go(element)} else if(element typeis Group) {GroupDetailPage.go(element)} else if(element typeis Organization) {OrganizationDetail.go(element)}
    }
    
    // 'value' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 15, column 58
    function value_3 () : gw.api.tree.TreeNode {
      return new gw.api.admin.CCOrganizationTreeNode()
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(1) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTreeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on MenuTree (id=AdminMenuTree) at AdminMenuTree.pcf: line 8, column 35
    function visible_4 () : java.lang.Boolean {
      return perm.Group.viewtree
    }
    
    
  }
  
  
}