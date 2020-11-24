package external.gw.api.address;

/**
 * An Wrapper around {@link ABContact} when we need to satisfy the {@link AddressOwner}
interface for PCFs that modify the {@link ABContact#PrimaryAddress} field.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactPrimaryAddressOwner extends external.gw.api.address.AbstractAddressOwner
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Address")
  public com.guidewire.ab.external.entity.Address getAddress();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Address")
  public void setAddress(com.guidewire.ab.external.entity.Address value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Owner")
  public com.guidewire.ab.external.entity.ABContact getOwner();

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPlace")
  public boolean isPlace();


  /**
   * Utility class for initializing an instance of external.gw.api.address.ABContactPrimaryAddressOwner
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param aContact 

     */
    public static ABContactPrimaryAddressOwner newInstance(com.guidewire.ab.external.entity.ABContact aContact)
    {
      return (ABContactPrimaryAddressOwner) gw.pl.external.Invoker.getInstance().construct(external.gw.api.address.ABContactPrimaryAddressOwner.class, new Class[]{ com.guidewire.ab.external.entity.ABContact.class} , new Object[]{ aContact});
    }

  }
}
