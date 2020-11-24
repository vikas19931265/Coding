package com.guidewire.ab.external.entity;

/**
 * User settings
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UserSettings extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The date/time when the canceled Activities alert bar was last dismissed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CancelAlertDismiss")
  public java.util.Date getCancelAlertDismiss();

  /**
   * The date/time when the canceled Activities alert bar was last dismissed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CancelAlertDismiss")
  public void setCancelAlertDismiss(java.util.Date value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


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
   * The margin sizes for printing (in inches)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrintMargins")
  public java.math.BigDecimal getPrintMargins();

  /**
   * The margin sizes for printing (in inches)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrintMargins")
  public void setPrintMargins(java.math.BigDecimal value);


  /**
   * Whether to print page numbers when printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrintPageNums")
  public java.lang.Boolean isPrintPageNums();

  /**
   * Whether to print page numbers when printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PrintPageNums")
  public void setPrintPageNums(java.lang.Boolean value);


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
   * Whether to rotate table data when printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RotateTables")
  public java.lang.Boolean isRotateTables();

  /**
   * Whether to rotate table data when printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RotateTables")
  public void setRotateTables(java.lang.Boolean value);


  /**
   * Whether to show a print preview before printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShowPrintPreview")
  public java.lang.Boolean isShowPrintPreview();

  /**
   * Whether to show a print preview before printing.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ShowPrintPreview")
  public void setShowPrintPreview(java.lang.Boolean value);


  /**
   * The startup page for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartupPage")
  public com.guidewire.ab.external.typelist.StartupPage getStartupPage();

  /**
   * The startup page for this user
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartupPage")
  public void setStartupPage(com.guidewire.ab.external.typelist.StartupPage value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Utility class for initializing an instance of UserSettings
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UserSettings.
     */
    public static UserSettings newInstance()
    {
      return (UserSettings) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UserSettings.class);
    }
  }

}
