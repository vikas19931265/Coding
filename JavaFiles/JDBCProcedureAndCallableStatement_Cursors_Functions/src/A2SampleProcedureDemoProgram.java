/*


Sample procedure demo program
===========================================


create or replace procedure addition(input1 in number, input2 in number, output out number) as

    BEGIN
            output:=input1+input2;
            
    END;
    
    /
    
  variable res number;
  
  execute addition (10,20,:res);
  
  print res;
    





*/