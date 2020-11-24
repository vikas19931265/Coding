package com.guidewire.ab.external.entity;

/**
 * 
        Links an Attribute entity with a User entity. An Attribute is a general-purpose characteristic you can associate with one or more users.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AttributeUser extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The associated attribute. NOTE: when inserting a AttributeUser this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attribute")
  public com.guidewire.ab.external.entity.Attribute getAttribute();

  /**
   * The associated attribute. NOTE: when inserting a AttributeUser this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attribute")
  public void setAttribute(com.guidewire.ab.external.entity.Attribute value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateField1")
  public java.util.Date getDateField1();

  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateField1")
  public void setDateField1(java.util.Date value);


  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateField2")
  public java.util.Date getDateField2();

  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateField2")
  public void setDateField2(java.util.Date value);


  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateField3")
  public java.util.Date getDateField3();

  /**
   * General-purpose date field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateField3")
  public void setDateField3(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * The state in which this attribute is applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.State getState();

  /**
   * The state in which this attribute is applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.State value);


  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField1")
  public java.lang.String getTextField1();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField1")
  public void setTextField1(java.lang.String value);


  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField2")
  public java.lang.String getTextField2();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField2")
  public void setTextField2(java.lang.String value);


  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextField3")
  public java.lang.String getTextField3();

  /**
   * General-purpose text field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextField3")
  public void setTextField3(java.lang.String value);


  /**
   * The associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * The associated user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);


  /**
   * The attribute value for this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.Integer getValue();

  /**
   * The attribute value for this user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of AttributeUser
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AttributeUser.
     */
    public static AttributeUser newInstance()
    {
      return (AttributeUser) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AttributeUser.class);
    }
  }

}
