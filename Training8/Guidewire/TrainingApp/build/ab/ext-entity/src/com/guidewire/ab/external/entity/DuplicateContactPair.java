package com.guidewire.ab.external.entity;

/**
 * Represents a duplicate contact linking to both the original contact and the found duplicate contact.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DuplicateContactPair extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The corresponding batch run where this contact was found. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BatchRun")
  public com.guidewire.ab.external.entity.DuplicateContactBatchRun getBatchRun();

  /**
   * The corresponding batch run where this contact was found. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BatchRun")
  public void setBatchRun(com.guidewire.ab.external.entity.DuplicateContactBatchRun value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The original contact. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.ABContact getContact();

  /**
   * The original contact. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * The found duplicate contact. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DuplicateContact")
  public com.guidewire.ab.external.entity.ABContact getDuplicateContact();

  /**
   * The found duplicate contact. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DuplicateContact")
  public void setDuplicateContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * Flag indicating the found duplicate is an exact match. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exact")
  public java.lang.Boolean isExact();

  /**
   * Flag indicating the found duplicate is an exact match. NOTE: when inserting a DuplicateContactPair this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Exact")
  public void setExact(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Returns the ABContact which should be kept from this ContactPair, i.e.
the oldest contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeptContact")
  public com.guidewire.ab.external.entity.ABContact getKeptContact();


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
   * Returns the ABContact which should be retired from this ContactPair,
i.e. the newest contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RetiredContact")
  public com.guidewire.ab.external.entity.ABContact getRetiredContact();

  /**
   * Retired this DuplicateContactPair and all its duplicate entries:
1) All the DuplicateContactPairs having the same contact and duplicate contact
2) All the DuplicateContactPairs where the contact equals this DuplicateContactPair's duplicate contact and
the duplicate contact equals this DuplicateContactPair's contact.
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retire")
  public void retire();


  /**
   * Utility class for initializing an instance of DuplicateContactPair
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DuplicateContactPair.
     */
    public static DuplicateContactPair newInstance()
    {
      return (DuplicateContactPair) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DuplicateContactPair.class);
    }
  }

}
