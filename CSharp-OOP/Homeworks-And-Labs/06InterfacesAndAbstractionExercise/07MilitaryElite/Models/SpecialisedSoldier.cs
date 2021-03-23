using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class SpecialisedSoldier : Private, ISpecialisedSoldier
    {
        public SpecialisedSoldier(string id, string firstName, string lastName, decimal salary, string corp)
            :base (id, firstName, lastName, salary)
        {
            Corp = corp;
        }
        public string  Corp { get; set; }
    }
}
