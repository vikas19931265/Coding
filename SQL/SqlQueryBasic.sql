-- Subquery- find empno, ename and department name of the employee

select empno, ename ,(select dname from dept where deptno=emp.deptno)as dname from emp;