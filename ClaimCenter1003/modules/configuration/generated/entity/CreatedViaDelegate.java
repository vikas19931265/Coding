package entity;

/**
 * CreatedViaDelegate
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CreatedViaDelegate.eti;CreatedViaDelegate.eix;CreatedViaDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface CreatedViaDelegate extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CreatedViaDelegate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CreatedViaDelegate>("entity.CreatedViaDelegate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CREATEDVIA_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("CreatedVia", "CreatedVia");
  
  /**
   * Gets the value of the CreatedVia field.
   * Which automation or user created the implementing object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CreatedVia getCreatedVia();
  
  
  /**
   * Sets the value of the CreatedVia field.
   */
  public void setCreatedVia(typekey.CreatedVia value);
  
  
  
}