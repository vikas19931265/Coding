/*

Properties 
================


In Java Program if anything which changes frequently(like jdbc url, username, pwd etc) then it is not
recommended to be hard code in our program.

The problem in this approach is if there is any change in java program,to reflect that change we
have to recompile,rebuild and redeploy total application and even some times server restart also
required,which creates a big business impact to the client.

To overcome this problem, we should go for Properties file. The variable things we have to
configure in Properties file and we have to read these properties from java program.

The main advantage of this approach is if there is any change in Properties file and to reflect that
change just redeployment is enough, which won't create any business impact to the client.









*/