package external.gw.api.archiving.upgrade;

/**
 * Represents a "row" of data that is the raw data for an "old" entity type.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IArchivedEntity
{
  /**
   * The name of the entity type for this IArchivedEntity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityName")
  public java.lang.String getEntityName();

  /**
   * true if this entity is a referenced entity; false otherwise
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReferencedEntity")
  public boolean isReferencedEntity();


  /**
   * Deletes this IArchivedEntity.
   *
   * @return this -- for the builder pattern.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "delete")
  public external.gw.api.archiving.upgrade.IArchivedEntity delete();



  /**
   * Gets properties with non-null values on the current entity that do not exist on the new type.
   *
   * @return List of properties on the current entity with non-null values.
   * @param entityName New entity type.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNonNullPropertiesNotOnType")
  public java.util.Set getNonNullPropertiesNotOnType(java.lang.String entityName);



  /**
   * Returns the current value of the property of the given name.
   *
   * @return Current value of property: either a String, an IArchivedEntity if the property is a
foreign key, or a IArchivedTypekey if the property is a typekey property.
   * @param propertyName Name of property.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyValue")
  public java.lang.Object getPropertyValue(java.lang.String propertyName);



  /**
   * 
   *
   * @return Whether this IArchivedEntity has a value set for the given property
   * @param propertyName Name of property.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasPropertyValue")
  public boolean hasPropertyValue(java.lang.String propertyName);



  /**
   * Moves this IArchivedEntity to the given entity.  Does not alter the existing property values.
   *
   * @return this -- for the builder pattern.
   * @param entityName New name.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "move")
  public external.gw.api.archiving.upgrade.IArchivedEntity move(java.lang.String entityName);



  /**
   * Moves this IArchivedEntity to the given entity.
   *
   * @return this -- for the builder pattern.
   * @param entityName New name.
   * @param updateProperties If move will add property values that only exist on the new entity and remove property
values that only exist on the old entity.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "move")
  public external.gw.api.archiving.upgrade.IArchivedEntity move(java.lang.String entityName, boolean updateProperties);



  /**
   * Updates the value of the property of the given name to the given value.
   *
   * @return this -- for the builder pattern.
   * @param propertyName Name of property.
   * @param newValue New value.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updatePropertyValue")
  public external.gw.api.archiving.upgrade.IArchivedEntity updatePropertyValue(java.lang.String propertyName, external.gw.api.archiving.upgrade.IArchivedEntity newValue);



  /**
   * Updates the value of the property of the given name to the given value.
   *
   * @return this -- for the builder pattern.
   * @param propertyName Name of property.
   * @param newValue New value.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updatePropertyValue")
  public external.gw.api.archiving.upgrade.IArchivedEntity updatePropertyValue(java.lang.String propertyName, external.gw.api.archiving.upgrade.IArchivedTypekey newValue);



  /**
   * Updates the value of the property of the given name to the given value.
   *
   * @return this -- for the builder pattern.
   * @param propertyName Name of property.
   * @param newValue New value.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "updatePropertyValue")
  public external.gw.api.archiving.upgrade.IArchivedEntity updatePropertyValue(java.lang.String propertyName, java.lang.String newValue);

}
