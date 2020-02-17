package aInheritence_IS_A_Relationship;

/*

Example
============


The common methods which are required for housing loan, vehicle loan, and education loan
we can define in the separate class that is in parent class loan. So that automatically
these methods will be availalbe to every child class.


Example

*/


class Loan
{
    //Common methods which are required for any type of loan.
}

class HousingLoan extends Loan
{
    //Housing loan specific methods.
}

class EducationLoan extends Loan
{
    //Education loan specific methods.
}