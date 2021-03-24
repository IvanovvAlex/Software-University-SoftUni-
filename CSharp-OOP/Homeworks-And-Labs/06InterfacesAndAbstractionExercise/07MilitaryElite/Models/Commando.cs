using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class Commando : SpecialisedSoldier, ICommando
    {
        private List<Mission> setOfMissions;
        public Commando(int id, string firstName, string lastName, decimal salary, string corp)
          : base(id, firstName, lastName, salary, corp)
        {
            setOfMissions = new List<Mission>();
        }
       
        public List<Mission> SetOfMissions
        {
            get { return setOfMissions; }
            private set { setOfMissions = value; }
        }      
    }
}
