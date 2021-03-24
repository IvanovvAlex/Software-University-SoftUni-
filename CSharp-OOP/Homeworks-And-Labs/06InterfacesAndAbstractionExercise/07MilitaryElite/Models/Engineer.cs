using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class Engineer : SpecialisedSoldier, IEngineer
    {
        private List<Repair> setOfRepairs;
        public Engineer(int id, string firstName, string lastName, decimal salary, string corp)
          : base(id, firstName, lastName, salary, corp)
        {
            setOfRepairs = new List<Repair>();
        }       
        public List<Repair> SetOfRepairs
        {
            get { return setOfRepairs; }
            private set { setOfRepairs = value; }
        }

    }
}
