/*

1.7 Version: try With Resources
========================================================

Usually we will close the Resources inside finally Block.


try

{
    Open Database Connection
}
catch(X e)
{

}

finally

{
    Close That Database Connection
}

But in Java 1.7 Version try with Resources Concept introduced.

The Advantage of this Concept is, whatever Resources we opened as the Part of try Block, will be
closed automatically once Control reaches End of try Block either Normally OR Abnormally. We
are not required to close explicitly.

Hence until 1.6 Version finally Block is just like Hero but from 1.7 Version onwards finally Block
became Zero.

try (Resource)
{
}

Eg:
try (Connection con = DM.getConnection(-,-,-))
{
    Use con based on our Requirement
    Once Control reaches End of try Block, automatically con will be closed, we are not
    required to close explicitly
}


*/