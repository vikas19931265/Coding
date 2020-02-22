package com.guidewire.ab.external.entity;

/**
 * 
        Encapsulates the search criteria for a custom picker search. The custom
        picker mechanism is deprecated and is only provided for backwards compatibility. The extra
        configurability provided by PCF makes the entire custom picker mechanism redundant.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CustomPickerSearchCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * TypeKey search criterion
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.State getState();

  /**
   * TypeKey search criterion
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.State value);


  /**
   * Text search criterion
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextColumn")
  public java.lang.String getTextColumn();

  /**
   * Text search criterion
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TextColumn")
  public void setTextColumn(java.lang.String value);

  /**
   * Helper for Gosu; creates a new CustomPickerSearchResult instance.
   *
   * @return a new CustomPickerSearchResult instance
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createSearchResult")
  public com.guidewire.ab.external.entity.CustomPickerSearchResult createSearchResult();


  /**
   * Utility class for initializing an instance of CustomPickerSearchCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CustomPickerSearchCriteria.
     */
    public static CustomPickerSearchCriteria newInstance()
    {
      return (CustomPickerSearchCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CustomPickerSearchCriteria.class);
    }
  }

}
