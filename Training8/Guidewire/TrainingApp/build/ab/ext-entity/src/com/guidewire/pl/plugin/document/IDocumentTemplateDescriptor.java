package com.guidewire.pl.plugin.document;

/**
 * The IDocumentTemplateDescriptor interface defines the API which must be implemented by an object which
represents a document template descriptor. A document template descriptor, in turn, corresponds to an actual document
template (Word MailMerge template, PDF form, etc) and contains five different kinds of information:
<p/>
<ol>
<li>Metadata about the template itself (id, name, effective dates, etc)</li>
<li>Metadata defaults which should be applied to documents created from the template (status, etc)</li>
<li>The set of values which are referenced by the values to be inserted into the document template, known as "Context Objects".
This includes both default values and a set of legal alternative values for use in the document creation UI.</li>
<li>The set of field names and values to be inserted into the document template, including some formatting information.</li>
<li>The locale in which the document will be generated in
</ol>
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDocumentTemplateDescriptor
{
  /**
   * Returns the names of the context objects defined in this template descriptor. Context objects are values
which can be selected by the user (in the case of interactive document generation) or through Gosu, and
which can then be referenced in the form field value expressions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContextObjectNames")
  public java.lang.String[] getContextObjectNames();

  /**
   * Returns the effective date of the template. When the user searches for a template, this value represents the
lower bound on the date values for which this template will appear.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateEffective")
  public java.util.Date getDateEffective();

  /**
   * Returns the expiration date of the template. When the user searches for a template, this value represents the
upper bound on the date values for which this template will appear.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateExpiration")
  public java.util.Date getDateExpiration();

  /**
   * Returns the date this template was last modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateModified")
  public java.util.Date getDateModified();

  /**
   * Returns the date this template was last modified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateModified")
  public void setDateModified(java.util.Date value);

  /**
   * Returns the code of the DocumentSecurityType value to be used as the default value for the SecurityType field
on Documents created from this template. May return null if no default value is desired.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultSecurityType")
  public java.lang.String getDefaultSecurityType();

  /**
   * Returns human-readable description of the template and/or the document it will create.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Returns a code which will be used by the document production system to determine how to generate the
document from the template. In the default implementation, recognized codes are "word", "excel", "acrobat", and "gosu".
May return null, which (in the default IDocumentProduction implementation) will result in generation based on the
mime type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DocumentProductionType")
  public java.lang.String getDocumentProductionType();

  /**
   * Returns the set of names of the form fields defined in the document template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FormFieldNames")
  public java.lang.String[] getFormFieldNames();

  /**
   * Returns an (optional) human-readable identifier string. Often used in Workers' Comp documents, sometimes
corresponds to the ID of the Form on which the template is based.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Identifier")
  public java.lang.String getIdentifier();

  /**
   * Returns an array of keywords which can be used to search for this template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Keywords")
  public java.lang.String[] getKeywords();

  /**
   * Returns the language in which the document will be generated from this template descriptor.  Null value means unknown locale.
Most of the time, it should be the default language of the application.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Language")
  public gw.pl.external.i18n.ILocale getLanguage();

  /**
   * Returns the locale in which the document will be generated from this template descriptor.  Null value means unknown locale.
Most of the time, it should be the default language of the application.
   * @deprecated Should use getLanguage instead, documents are stored by language not locale/regional formatting
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locale")
  public gw.pl.external.i18n.ILocale getLocale();

  /**
   * Returns the set of extra metadata properties which exist in the document template definition.
This is used in conjunction with getMetadataPropertyValue() as a flexible extension mechanism.
Customers can add arbitrary new fields to document template descriptors, and these will be passed
on to the internal entities used to display document templates in the UI.
<p/>
Also note that, where the extra property names correspond to properties on the Document entity,
the values will be passed along to documents created from the template.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MetadataPropertyNames")
  public java.lang.String[] getMetadataPropertyNames();

  /**
   * Returns the type of document which will be created from this document template. Note that if this is inaccurate, it will be
overridden when the created document gets uploaded to the system.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MimeType")
  public java.lang.String getMimeType();

  /**
   * Returns the human-readable name of the template in the current locale
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Returns the password which is required for the user to create a document
from the template. This is optional; if no password is required, it should return null.
May not be supported by all document formats (for example, not supported for Gosu templates).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Password")
  public java.lang.String getPassword();

  /**
   * Returns the code of the SystemPermissionType value, if any, required for the user to use this template. Templates for
which the user does not have the appropriate permission will not appear in the UI. May return null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiredPermission")
  public java.lang.String getRequiredPermission();

  /**
   * Returns the contexts in which this document should be used. Possible values are:
gosu - denotes documents which should only be created from gosu, and which should not show up in the UI
ui - denotes documents which should only be created through the UI, and which cannot be created from rules
all - denotes documents which may be created through either mechanism (and will show up in the UI)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Scope")
  public java.lang.String getScope();

  /**
   * Returns the unique ID of the template which this descriptor describes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TemplateId")
  public java.lang.String getTemplateId();

  /**
   * Returns a value which should correspond to a code in the DocumentType typelist. May return null.
If the returned value is not null, documents created from this template will have their "type" fields set to this value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TemplateType")
  public java.lang.String getTemplateType();


  /**
   * Indicates whether null is a legal value for the given context object.
   *
   * @return True if null is a legal value for this context object, false otherwise.
   * @param objName The name of a context object. Must be a valid context object name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContextObjectAllowsNull")
  public boolean getContextObjectAllowsNull(java.lang.String objName);



  /**
   * Returns a Gosu expression which will evaluate to the desired default value for the context object.
This will be used to set the default for the document creation UI, or as the value if a document is created automatically
and no other value is specified.
   *
   * @return A Gosu expression which will evaluate to the desired default value for the context object.
   * @param objName The name of a context object. Must be a valid context object name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContextObjectDefaultValueExpression")
  public java.lang.String getContextObjectDefaultValueExpression(java.lang.String objName);



  /**
   * Returns a human-readable display name for the given context object.
   *
   * @return The display name which should be used to represent the ContextObject in the UI.
   * @param objName The name of a context object. Must be a valid context object name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContextObjectDisplayName")
  public java.lang.String getContextObjectDisplayName(java.lang.String objName);



  /**
   * Returns a Gosu expression which will evaluate to the desired set of legal values for the given context object.
Used to display a list of options for the user in the document creation UI.
   *
   * @return A Gosu expression which will evaluate to the desired set of legal values for the given Context Object.
   * @param objName The name of a context object. Must be a valid context object name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContextObjectPossibleValuesExpression")
  public java.lang.String getContextObjectPossibleValuesExpression(java.lang.String objName);



  /**
   * Returns the type of the specified context object.
   *
   * @return The type of the specified context object. Possible values include "string", "text", "Bean", or the name
        of any system entity or typelist("Claim", etc).
   * @param objName The name of a context object. Must be a valid context object name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContextObjectType")
  public java.lang.String getContextObjectType(java.lang.String objName);



  /**
   * Returns the string which will actually be filled into the completed document, given the field name and the value
(which is probably a result of evaluating the expression returned from getFormFieldValueExpression()).
<p/>
This allows the implementation to do some value rewriting, such as substituting "n/a" for null, formatting dates nicely, etc.
   *
   * @return The value which should be filled in to the template for the indicated form field. May be the same as the
        passed-in value, may be a reformatting of same, or may be completely different.
   * @param fieldName The name of a form field. Must be a valid form field name.
   * @param value The current value for the form field.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFormFieldDisplayValue")
  public java.lang.String getFormFieldDisplayValue(java.lang.String fieldName, java.lang.Object value);



  /**
   * Returns a Gosu expression which will evaluate to the desired value for the form field.
The Gosu expression is usually written in terms of one or more context objects, but any legal Gosu expression is allowed.
   *
   * @return A Gosu expression which will evaluate to the desired value for the form field.
   * @param fieldName The name of a form field. Must be a valid form field name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFormFieldValueExpression")
  public java.lang.String getFormFieldValueExpression(java.lang.String fieldName);



  /**
   * Returns the value specified for the given metadata property in this template descriptor.
   *
   * @return The value specified for the given metadata property in this template descriptor.
   * @param propName The name of the metadata property whose value is desired.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMetadataPropertyValue")
  public java.lang.Object getMetadataPropertyValue(java.lang.String propName);



  /**
   * Returns the human-readable localized name of the template.
   *
   * @return The human-readable localized name of the template.  Return null if no name match to the given locale
   * @param locale the locale of the name.  Null means the default name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getName")
  public java.lang.String getName(gw.pl.external.i18n.ILocale locale);

}
