package external.gw.api.address;

/**
 * An Wrapper around {@link Contact} when we need to satisfy the {@link AddressOwner}
interface for PCFs that modify the {@link Contact#PrimaryAddress} field.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactPrimaryAddressOwner extends external.gw.api.address.AbstractAddressOwner
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
  public com.guidewire.ab.external.entity.Contact getOwner();

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPlace")
  public boolean isPlace();


  /**
   * Utility class for initializing an instance of external.gw.api.address.ContactPrimaryAddressOwner
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param aContact 

     */
    public static ContactPrimaryAddressOwner newInstance(com.guidewire.ab.external.entity.Contact aContact)
    {
      return (ContactPrimaryAddressOwner) gw.pl.external.Invoker.getInstance().construct(external.gw.api.address.ContactPrimaryAddressOwner.class, new Class[]{ com.guidewire.ab.external.entity.Contact.class} , new Object[]{ aContact});
    }

  }
}
