using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class Private : Soldier, IPrivate
    {
        public Private(int id, string firstName, string lastName, decimal salary)
            : base(id, firstName,lastName)
        {
            Salary = salary;
        }
        public decimal Salary { get; private set; }
    }
}
