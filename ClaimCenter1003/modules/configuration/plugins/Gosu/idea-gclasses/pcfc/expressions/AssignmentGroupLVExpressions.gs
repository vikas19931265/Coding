package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentGroupLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentGroupLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on GroupCell (id=Group_Cell) at AssignmentGroupLV.pcf: line 29, column 26
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group.Name
    }
    
    // 'sortBy' attribute on GroupCell (id=ParentGroup_Cell) at AssignmentGroupLV.pcf: line 34, column 33
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Parent.Name
    }
    
    // 'value' attribute on RowIterator at AssignmentGroupLV.pcf: line 22, column 72
    function value_25 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return Groups
    }
    
    property get Groups () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("Groups", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set Groups ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("Groups", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssignmentGroupLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_12 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_14 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_2 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_4 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_13 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_3 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at AssignmentGroupLV.pcf: line 22, column 72
    function pickValue_24 () : gw.api.assignment.Assignee {
      return gw.api.database.Query.make(entity.Group).compare(entity.Group#ID, gw.api.database.Relop.Equals, group.ID).select().AtMostOneRow
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_7 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_17 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_16 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_6 () : entity.Group {
      return group
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_8 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_20 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_9 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}