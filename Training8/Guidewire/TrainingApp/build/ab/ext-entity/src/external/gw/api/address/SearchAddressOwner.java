package external.gw.api.address;

/**
 * A Wrapper for search contacts.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SearchAddressOwner extends external.gw.api.address.AbstractAddressOwner
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShowAddressSummary")
  public boolean isShowAddressSummary();

  /**
   * null
   *
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPlace")
  public boolean isPlace();

  /**
   * null
   *
   * @param fieldId 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isVisible")
  public boolean isVisible(external.gw.api.address.AddressOwnerFieldId fieldId);


  /**
   * Utility class for initializing an instance of external.gw.api.address.SearchAddressOwner
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param theAddress 

     */
    public static SearchAddressOwner newInstance(com.guidewire.ab.external.entity.Address theAddress)
    {
      return (SearchAddressOwner) gw.pl.external.Invoker.getInstance().construct(external.gw.api.address.SearchAddressOwner.class, new Class[]{ com.guidewire.ab.external.entity.Address.class} , new Object[]{ theAddress});
    }

  }
}
