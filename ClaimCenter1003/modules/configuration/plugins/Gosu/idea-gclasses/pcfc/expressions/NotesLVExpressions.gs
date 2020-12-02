package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/notes/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/notes/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NotesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=ConfidentialIcon) at NotesLV.pcf: line 30, column 38
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NotesLV.pcf: line 40, column 45
    function valueRoot_4 () : java.lang.Object {
      return Note
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at NotesLV.pcf: line 51, column 25
    function value_10 () : java.lang.String {
      return DisplayKey.get("Web.Note.Author",  Note.Author, gw.api.util.StringUtil.formatDate(Note.AuthoringDate, "short"), gw.api.util.StringUtil.formatTime(Note.AuthoringDate, "short"))
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NotesLV.pcf: line 40, column 45
    function value_3 () : java.lang.String {
      return Note.Subject
    }
    
    // 'value' attribute on NoteBodyInput (id=Body_Input) at NotesLV.pcf: line 45, column 32
    function value_7 () : java.lang.String {
      return Note.Body
    }
    
    // 'visible' attribute on ContentInput at NotesLV.pcf: line 25, column 41
    function visible_1 () : java.lang.Boolean {
      return Note.Confidential
    }
    
    // 'visible' attribute on TextInput (id=Subject_Input) at NotesLV.pcf: line 40, column 45
    function visible_2 () : java.lang.Boolean {
      return Note.Subject != null
    }
    
    property get Note () : entity.Note {
      return getIteratedValue(1) as entity.Note
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/notes/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at NotesLV.pcf: line 17, column 71
    function value_12 () : gw.api.database.IQueryBeanResult<entity.Note> {
      return NoteList
    }
    
    property get NoteList () : gw.api.database.IQueryBeanResult<Note> {
      return getRequireValue("NoteList", 0) as gw.api.database.IQueryBeanResult<Note>
    }
    
    property set NoteList ($arg :  gw.api.database.IQueryBeanResult<Note>) {
      setRequireValue("NoteList", 0, $arg)
    }
    
    
  }
  
  
}