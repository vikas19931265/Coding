package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface RootInfo extends gw.pl.external.entity.Entity
{


  /**
   * When archiving was attempted on the root. Null if we never attempted to archive it.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveDate")
  public java.util.Date getArchiveDate();

  /**
   * When archiving was attempted on the root. Null if we never attempted to archive it.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveDate")
  public void setArchiveDate(java.util.Date value);


  /**
   * Short version of the reason for a failure to archive
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveFailure")
  public com.guidewire.ab.external.entity.ArchiveFailure getArchiveFailure();

  /**
   * Short version of the reason for a failure to archive
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveFailure")
  public void setArchiveFailure(com.guidewire.ab.external.entity.ArchiveFailure value);


  /**
   * Full details of archive failure
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveFailureDetails")
  public com.guidewire.ab.external.entity.ArchiveFailureDetails getArchiveFailureDetails();

  /**
   * Full details of archive failure
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveFailureDetails")
  public void setArchiveFailureDetails(com.guidewire.ab.external.entity.ArchiveFailureDetails value);


  /**
   * Schema version at which the root was archived or null if it was not archived
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveSchemaInfo")
  public com.guidewire.ab.external.entity.UpgradeDatamodelInfo getArchiveSchemaInfo();

  /**
   * Schema version at which the root was archived or null if it was not archived
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveSchemaInfo")
  public void setArchiveSchemaInfo(com.guidewire.ab.external.entity.UpgradeDatamodelInfo value);


  /**
   * The archive state of the graph
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveState")
  public com.guidewire.ab.external.typelist.ArchiveState getArchiveState();

  /**
   * The archive state of the graph
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveState")
  public void setArchiveState(com.guidewire.ab.external.typelist.ArchiveState value);


  /**
   * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExcludeReason")
  public java.lang.String getExcludeReason();

  /**
   * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExcludeReason")
  public void setExcludeReason(java.lang.String value);


  /**
   * Indicate if this entity should be excluded from archiving
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExcludedFromArchive")
  public java.lang.Boolean isExcludedFromArchive();

  /**
   * Indicate if this entity should be excluded from archiving
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExcludedFromArchive")
  public void setExcludedFromArchive(java.lang.Boolean value);


  /**
   * Returns the public ID of the root.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicIDOfRoot")
  public java.lang.String getPublicIDOfRoot();

  /**
   * Returns the public ID of the root.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicIDOfRoot")
  public void setPublicIDOfRoot(java.lang.String value);


  /**
   * Returns the public ID of the root.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootPublicID")
  public java.lang.String getRootPublicID();

  /**
   * Returns the public ID of the root.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RootPublicID")
  public void setRootPublicID(java.lang.String value);

  /**
   * This method will return true if this object can be restored at this time.  There are two possible reason why this
would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
   *
   * @return true if okay to restore
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canRestore")
  public boolean canRestore();

  /**
   * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
   *
   * @param message The reason for skipping.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reportArchiveProblem")
  public void reportArchiveProblem(java.lang.String message);

  /**
   * Reset flag that marks the graph as excluded for archiving
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resetToPreArchivedState")
  public void resetToPreArchivedState();

  /**
   * Schedule this item for archival
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "scheduleForArchive")
  public void scheduleForArchive();

  /**
   * Sets the root public ID to the passed value.
   *
   * @param value value for the root public ID.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPublicIDOfRoot")
  public void setPublicIDOfRoot_Method(java.lang.String value);

  /**
   * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
   *
   * @param message The reason for skipping.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "skipFromArchiving")
  public void skipFromArchiving(java.lang.String message);


  /**
   * Utility class for initializing an instance of RootInfo
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity RootInfo.
     */
    public static RootInfo newInstance()
    {
      return (RootInfo) gw.pl.external.entity.EntityFactory.getInstance().newEntity(RootInfo.class);
    }
  }

}
