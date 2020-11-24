package com.guidewire.ab.plugin.util;

/**
 * Plugin to handle the field encryption
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IEncryption extends gw.plugin.IPlugin
{
  /**
   * The unique identifier for the encryption, used to assist encryption change control
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EncryptionIdentifier")
  public java.lang.String getEncryptionIdentifier();


  /**
   * Decrypt the string value.  Note neither the argument nor the return value should be null
   *
   * @return the decrypted value
   * @param value the string to decrypt
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "decrypt")
  public java.lang.String decrypt(java.lang.String value);



  /**
   * Encrypt the string value.  Note neither the argument nor the return value should be null
   *
   * @return the encrypted value
   * @param value the string to encrypt
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "encrypt")
  public java.lang.String encrypt(java.lang.String value);



  /**
   * The max length of the encrypted string for the property
   *
   * @return the max length of the encrypted string
   * @param maxEncryptedLength the max length of the dencrypted value
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEncryptedLength")
  public int getEncryptedLength(int maxEncryptedLength);

}
