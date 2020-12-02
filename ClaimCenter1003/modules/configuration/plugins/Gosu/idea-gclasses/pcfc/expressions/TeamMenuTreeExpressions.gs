package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamMenuTreeExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamMenuTree2ExpressionsImpl extends TeamMenuTreeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'elementLabel' attribute on TreeView (id=TeamMenuTree) at TeamMenuTree.pcf: line 15, column 62
    function elementLabel_0 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=TeamMenuTree) at TeamMenuTree.pcf: line 15, column 62
    function elementValueSetter_1 (__VALUE :  java.lang.Object) : void {
      element =  (__VALUE as gw.api.web.team.CCTeamTreeViewModel)
    }
    
    // 'onClickElement' attribute on TreeView (id=TeamMenuTree) at TeamMenuTree.pcf: line 15, column 62
    function onClickElement_2 () : void {
      element.treeElementClicked(CurrentLocation)
    }
    
    // 'value' attribute on TreeView (id=TeamMenuTree) at TeamMenuTree.pcf: line 15, column 62
    function value_3 () : gw.api.tree.TreeNode {
      return new gw.api.web.team.CCTeamTreeViewRootModel()
    }
    
    property get element () : gw.api.web.team.CCTeamTreeViewModel {
      return getTreeViewValue(1) as gw.api.web.team.CCTeamTreeViewModel
    }
    
    property set element ($arg :  gw.api.web.team.CCTeamTreeViewModel) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamMenuTreeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  
}