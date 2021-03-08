package entity;

/**
 * CCRule
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CCRule.eti;CCRule.eix;CCRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class CCRule extends entity.Rule {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CCRule> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CCRule>("entity.CCRule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JURISDICTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jurisdictions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOSSTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LossTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyTypes");
  
  protected CCRule(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.CCRuleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.CCRuleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.CCRuleInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.AppCritJurisdiction element) {
    __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LossTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLossTypes(entity.AppCritLossType element) {
    __getInternalInterface().addArrayElement(LOSSTYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyTypes(entity.AppCritPolicyType element) {
    __getInternalInterface().addArrayElement(POLICYTYPES_PROP.get(), element);
  }
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritJurisdiction[] getJurisdictions() {
    return (entity.AppCritJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the LossTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritLossType[] getLossTypes() {
    return (entity.AppCritLossType[])__getInternalInterface().getFieldValue(LOSSTYPES_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritPolicyType[] getPolicyTypes() {
    return (entity.AppCritPolicyType[])__getInternalInterface().getFieldValue(POLICYTYPES_PROP.get());
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.AppCritJurisdiction element) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LossTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromLossTypes(entity.AppCritLossType element) {
    __getInternalInterface().removeArrayElement(LOSSTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LossTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLossTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOSSTYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyTypes(entity.AppCritPolicyType element) {
    __getInternalInterface().removeArrayElement(POLICYTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYTYPES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.AppCritJurisdiction[] value) {
    __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossTypes field.
   */
  public void setLossTypes(entity.AppCritLossType[] value) {
    __getInternalInterface().setFieldValue(LOSSTYPES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTypes field.
   */
  public void setPolicyTypes(entity.AppCritPolicyType[] value) {
    __getInternalInterface().setFieldValue(POLICYTYPES_PROP.get(), value);
  }
  
  static {
    com.guidewire._generated.entity.CCRuleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.CCRule, com.guidewire._generated.entity.CCRuleInternal>() {
      public java.lang.Object getImplementation(entity.CCRule bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.CCRuleInternal getInternalInterface(entity.CCRule bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}