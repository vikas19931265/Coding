
package extensions.ab.note.typekey;

import gw.pl.note.typekey.NoteSecurityType;
import gw.pl.note.typekey.NoteSecurityType.NoteSecurityTypeCache;

public final class NoteSecurityTypeExtConstants {

    public final static NoteSecurityTypeCache TC_PRIVATE = new NoteSecurityTypeCache(NoteSecurityType.TYPE, "private");
    public final static NoteSecurityTypeCache TC_PUBLIC = new NoteSecurityTypeCache(NoteSecurityType.TYPE, "public");
    public final static NoteSecurityTypeCache TC_SENSITIVE = new NoteSecurityTypeCache(NoteSecurityType.TYPE, "sensitive");

}
