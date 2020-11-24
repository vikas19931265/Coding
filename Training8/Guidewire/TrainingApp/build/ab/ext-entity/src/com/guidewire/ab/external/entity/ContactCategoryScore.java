package com.guidewire.ab.external.entity;

/**
 * Table linking Contacts to Category Scores
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactCategoryScore extends com.guidewire.ab.external.entity.AddressBookConvertable, com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressBookUID")
  public java.lang.String getAddressBookUID();

  /**
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressBookUID")
  public void setAddressBookUID(java.lang.String value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Associated Contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Associated Contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.Contact value);


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
   * Category of this Score.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewCategory")
  public com.guidewire.ab.external.typelist.ReviewCategory getReviewCategory();

  /**
   * Category of this Score.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewCategory")
  public void setReviewCategory(com.guidewire.ab.external.typelist.ReviewCategory value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score")
  public java.lang.Integer getScore();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score")
  public void setScore(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of ContactCategoryScore
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactCategoryScore.
     */
    public static ContactCategoryScore newInstance()
    {
      return (ContactCategoryScore) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactCategoryScore.class);
    }
  }

}
