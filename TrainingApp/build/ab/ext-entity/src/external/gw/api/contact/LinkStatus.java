package external.gw.api.contact;

/**
 * Represents the status of a <code>Contact</code> with respect to the Address Book.
<p>The possible {@link com.guidewire.pl.domain.contact.ContactLinkStatus} enum values are:</p>
<dl>
<dt> <b>UNLINKED</b>
<dt> <b>BROKEN</b>
<dd>Linked but the contact was not found in the Address Book.
<dt> <b>NOT_SYNCED</b>
<dd> Linked but not in sync because the remote contact has changed. The local contact might or might not have changed since last sync.
<dt> <b>SYNCED_REMOTE</b>
<dd> Linked but not in sync because the local contact has changed. The remote contact has not changed since the last sync.
Compare the local and remote contact to see if key match fields were changed to prevent overwriting the remote contact
in error.
<dt> <b>SYNCED</b>
<dt> <b>UNKNOWN</b>
<dd> An Address Book error occurred.
</dl>
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LinkStatus
{


  /**
   * Tests if the current link status is broken or not.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Broken")
  public boolean isBroken();


  /**
   * <p>
Get a message with the types of relationships that are different between the local and remote contacts.
Only primary-relationships, as defined in the <code>contact-sync-config.xml</code>, are considered for this list.
We only return the TYPES of the relationships that are different because the full list of differences may be too
long for a message on the screen.
</p>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DifferentRelationshipsMessage")
  public java.lang.String getDifferentRelationshipsMessage();


  /**
   * Tests if the current link status is known or not.  The link status is always unknown when the Address Book is down.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Known")
  public boolean isKnown();


  /**
   * Returns the appropriate localized message, depending on the <code>linkStatus</code> as defined in
the display-property <code>Java.ContactLinkStatus.linkStatus</code>.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkStatusMessage")
  public java.lang.String getLinkStatusMessage();


  /**
   * Verifies a link status is one of:
<dl>
<dt> <b>BROKEN</b>
<dd>Linked but the contact was not found in the Address Book.
<dt><b>NOT_SYNCED</b>
<dd>Linked but not in sync because the remote contact has changed. The local contact might or might not have changed since last sync.
<dt><b>SYNCED_REMOTE</b>
<dd>Linked but not in sync because the local contact has changed. The remote contact has not changed since the last sync.
Compare the local and remote contact to see if key match fields were changed to prevent overwriting the remote contact
in error.
<dt><b>SYNCED</b>
<dd>Linked and the key local and remote contact fields are in agreement.
</dl>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Linked")
  public boolean isLinked();


  /**
   * Tests if the current link status is synced or not.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Synced")
  public boolean isSynced();


  /**
   * Verifies a link status is one of:
<dl>
<dt><b>SYNCED_REMOTE</b>
<dd>Linked but not in sync because the local contact has changed. The remote contact has not changed since the last sync.
Compare the local and remote contact to see if key match fields were changed to prevent overwriting the remote contact
in error.
<dt><b>SYNCED</b>
<dd>Linked and the key local and remote contact fields are in agreement.
</dl>
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SyncedRemote")
  public boolean isSyncedRemote();


  /**
   * Utility class for initializing an instance of external.gw.api.contact.LinkStatus
   */
  public static class CONSTRUCT
  {

  }
}
