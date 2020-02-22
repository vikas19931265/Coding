package external.gw.api.address;

/**
 * A Wrapper for secondary contacts.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SecondaryAddressOwner extends external.gw.api.address.AbstractAddressOwner
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
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPlace")
  public boolean isPlace();


  /**
   * Utility class for initializing an instance of external.gw.api.address.SecondaryAddressOwner
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param theAddress 

     */
    public static SecondaryAddressOwner newInstance(com.guidewire.ab.external.entity.Address theAddress)
    {
      return (SecondaryAddressOwner) gw.pl.external.Invoker.getInstance().construct(external.gw.api.address.SecondaryAddressOwner.class, new Class[]{ com.guidewire.ab.external.entity.Address.class} , new Object[]{ theAddress});
    }

  }
}
