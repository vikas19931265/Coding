package com.guidewire.ab.external.entity;

/**
 * 
      Deprecated since ClaimCenter 8.0 along with the IAddressBookAdapter.
      This is a non-persistent entity that represents the results of definitive match search.
      Besides the matched <code>Contact</code> objects, it also contains a result type. See the <code>ContactMatchResultType</code>
      typelist for  more detail about the result of the match.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactFindMatchResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the Contact that was matched, or null if none.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Gets the Contact that was matched, or null if none.
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
   * Provides more detail about the result of the match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResultType")
  public com.guidewire.ab.external.typelist.ContactMatchResultType getResultType();

  /**
   * Provides more detail about the result of the match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResultType")
  public void setResultType(com.guidewire.ab.external.typelist.ContactMatchResultType value);


  /**
   * Utility class for initializing an instance of ContactFindMatchResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactFindMatchResult.
     */
    public static ContactFindMatchResult newInstance()
    {
      return (ContactFindMatchResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactFindMatchResult.class);
    }
  }

}
