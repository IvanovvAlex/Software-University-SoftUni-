using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class LieutenantGeneral : Private, ILieutenantGeneral
    {
        private Dictionary<int, Private> setOfPrivates;
        public LieutenantGeneral(int id, string firstName, string lastName, decimal salary, Dictionary<int, Private> dict)
            : base(id, firstName,lastName,salary)
        {
            setOfPrivates = dict;
        }
        public Dictionary<int, Private> SetOfPrivates 
        {
            get { return setOfPrivates; }
            private set { setOfPrivates = value; }
        }
    }
}
