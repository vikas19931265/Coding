package com.guidewire.ab.external.entity;

/**
 * Error rows found by the loader.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadErrorRow extends gw.pl.external.entity.Entity
{


  /**
   * Virtual foreign key to loaderror table NOTE: when inserting a LoadErrorRow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorID")
  public java.lang.Integer getErrorID();

  /**
   * Virtual foreign key to loaderror table NOTE: when inserting a LoadErrorRow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorID")
  public void setErrorID(java.lang.Integer value);


  /**
   * Load error row ID, to ensure uniqueness. NOTE: when inserting a LoadErrorRow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorRowID")
  public java.lang.Integer getErrorRowID();

  /**
   * Load error row ID, to ensure uniqueness. NOTE: when inserting a LoadErrorRow this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorRowID")
  public void setErrorRowID(java.lang.Integer value);


  /**
   * Logical Unit of Work ID, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LUWID")
  public java.lang.String getLUWID();

  /**
   * Logical Unit of Work ID, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LUWID")
  public void setLUWID(java.lang.String value);


  /**
   * Row number, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowNumber")
  public java.lang.Long getRowNumber();

  /**
   * Row number, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowNumber")
  public void setRowNumber(java.lang.Long value);


  /**
   * Utility class for initializing an instance of LoadErrorRow
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadErrorRow.
     */
    public static LoadErrorRow newInstance()
    {
      return (LoadErrorRow) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadErrorRow.class);
    }
  }

}
