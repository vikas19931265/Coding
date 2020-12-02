package entity;

/**
 * Coverage
 * 
 * Abstract superclass describing a specific coverage on a policy. Contains
 * information about deductibles, limits, and effective dates of the coverage. A
 * policy may have multiple coverages.
 *     
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Coverage.eti;Coverage.eix;Coverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class Coverage extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.EventAware, gw.api.financials.CoverageDeductibleMethods, gw.api.policy.CoverageMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Coverage> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Coverage>("entity.Coverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVTERMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CovTerms");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Currency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Deductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DEDUCTIBLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Deductibles");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSURELIMIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureLimit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INCIDENTLIMIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IncidentLimit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LIMITSINDICATOR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LimitsIndicator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYSYSTEMID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicySystemId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Type");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.CoverageInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String COVERAGEADDED_EVENT = "CoverageAdded";
  
  public static final java.lang.String COVERAGECHANGED_EVENT = "CoverageChanged";
  
  public static final java.lang.String COVERAGEREMOVED_EVENT = "CoverageRemoved";
  
  protected Coverage(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.CoverageInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.CoverageInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Adds the given element to the CovTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCovTerms(entity.CovTerm element) {
    __getInternalInterface().addArrayElement(COVTERMS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Deductibles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDeductibles(entity.Deductible element) {
    __getInternalInterface().addArrayElement(DEDUCTIBLES_PROP.get(), element);
  }
  
  /**
   * Determines if the Coverage's Currency can be changed. The OOTB implementation is to disallow a Currency change if
   * the Coverage has a Deductible set on it and the Deductible is marked as paid. (Of course, if the Currency is being
   * set for the very first time, this API doesn't impose any restriction at all)
   * @return true if the Currency can be changed; false otherwise
   */
  public boolean allowCurrencyChange() {
    return ((gw.api.policy.CoverageMethods)__getDelegateManager().getImplementation("gw.api.policy.CoverageMethods")).allowCurrencyChange();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * If this coverage relates to a particular vehicle or property AND the Exposure is of type which
   * can contain vehicle or fixed property incident then get the associated vehicle or fixed property
   * incident. If there is no such incident then create a new one. Otherwise return null.
   * @param exposureType the type of exposure we are trying to find an incident for
   * @return the incident that is related to this coverage, or the newly created one
   */
  public entity.Incident findOrCreateIncident(typekey.ExposureType exposureType) {
    return ((gw.cc.policy.entity.Coverage)__getDelegateManager().getImplementation("gw.cc.policy.entity.Coverage")).findOrCreateIncident(exposureType);
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Returns the single one if one exists in Deductibles array, otherwise delegates to its Master.
   */
  public entity.Deductible getClaimDeductible() {
    return ((gw.api.financials.CoverageDeductibleMethods)__getDelegateManager().getImplementation("gw.api.financials.CoverageDeductibleMethods")).getClaimDeductible();
  }
  
  /**
   * Gets the value of the CovTerms field.
   * Additional terms and conditions associated with this Coverage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CovTerm[] getCovTerms() {
    return (entity.CovTerm[])__getInternalInterface().getFieldValue(COVTERMS_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Currency field.
   * The currency of the coverage. Once set, this value can be updated only when CoverageMethods.allowCurrencyChange() returns true.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
  }
  
  /**
   * Gets the value of the Deductible field.
   * @deprecated Deprecated. Use the deductible from covterm
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getDeductible() {
    return (gw.api.financials.CurrencyAmount)__getInternalInterface().getFieldValue(DEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the Deductibles field.
   * Deductible entities to be applied to payments
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Deductible[] getDeductibles() {
    return (entity.Deductible[])__getInternalInterface().getFieldValue(DEDUCTIBLES_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveDate field.
   * Date on which the coverage is effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpirationDate field.
   * Date on which the coverage is expired.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExposureLimit field.
   * Dollar limit per exposure.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getExposureLimit() {
    return (gw.api.financials.CurrencyAmount)__getInternalInterface().getFieldValue(EXPOSURELIMIT_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IncidentLimit field.
   * Dollar limit per incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getIncidentLimit() {
    return (gw.api.financials.CurrencyAmount)__getInternalInterface().getFieldValue(INCIDENTLIMIT_PROP.get());
  }
  
  /**
   * Gets the value of the LimitsIndicator field.
   * Whether a coverage type can be combined.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LimitsIndicator getLimitsIndicator() {
    return (typekey.LimitsIndicator)__getInternalInterface().getFieldValue(LIMITSINDICATOR_PROP.get());
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Gets the value of the Notes field.
   * Additional notes on this coverage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NOTES_PROP.get());
  }
  
  /**
   * Gets the value of the Policy field.
   * Policy to which the coverage belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicySystemId field.
   * Identifier for the coverage in an external policy system
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicySystemId() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYSYSTEMID_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the State field.
   * The state in which this coverage is applicable, if state-specific.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Coverage getSubtype() {
    return (typekey.Coverage)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Type field.
   * Type of coverage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoverageType getType() {
    return (typekey.CoverageType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the CovTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromCovTerms(entity.CovTerm element) {
    __getInternalInterface().removeArrayElement(COVTERMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CovTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCovTerms(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COVTERMS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Deductibles array. This is achieved by marking the element for removal.
   */
  public void removeFromDeductibles(entity.Deductible element) {
    __getInternalInterface().removeArrayElement(DEDUCTIBLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Deductibles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDeductibles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DEDUCTIBLES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CovTerms field.
   */
  public void setCovTerms(entity.CovTerm[] value) {
    __getInternalInterface().setFieldValue(COVTERMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Currency field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setCurrency(typekey.Currency value) {
    ((gw.cc.policy.entity.Coverage)__getDelegateManager().getImplementation("gw.cc.policy.entity.Coverage")).setCurrency(value);
  }
  
  /**
   * Sets the value of the Deductible field.
   * @deprecated Deprecated. Use the deductible from covterm
   */
  @java.lang.Deprecated
  public void setDeductible(gw.api.financials.CurrencyAmount value) {
    __getInternalInterface().setFieldValue(DEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Deductibles field.
   */
  public void setDeductibles(entity.Deductible[] value) {
    __getInternalInterface().setFieldValue(DEDUCTIBLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExposureLimit field.
   */
  public void setExposureLimit(gw.api.financials.CurrencyAmount value) {
    __getInternalInterface().setFieldValue(EXPOSURELIMIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncidentLimit field.
   */
  public void setIncidentLimit(gw.api.financials.CurrencyAmount value) {
    __getInternalInterface().setFieldValue(INCIDENTLIMIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LimitsIndicator field.
   */
  public void setLimitsIndicator(typekey.LimitsIndicator value) {
    __getInternalInterface().setFieldValue(LIMITSINDICATOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPolicy(entity.Policy value) {
    ((gw.cc.policy.entity.Coverage)__getDelegateManager().getImplementation("gw.cc.policy.entity.Coverage")).setPolicy(value);
  }
  
  /**
   * Sets the value of the PolicySystemId field.
   */
  public void setPolicySystemId(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYSYSTEMID_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value) {
    __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.Coverage value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.CoverageType value) {
    __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  static {
    com.guidewire._generated.entity.CoverageInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.Coverage, com.guidewire._generated.entity.CoverageInternal>() {
      public java.lang.Object getImplementation(entity.Coverage bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.CoverageInternal getInternalInterface(entity.Coverage bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}