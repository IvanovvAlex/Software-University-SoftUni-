using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class LieutenantGeneral : Private, ILieutenantGeneral
    {
        private List<Private> setOfPrivates;
        public LieutenantGeneral(string id, string firstName, string lastName, decimal salary)
            : base(id, firstName,lastName,salary)
        {
            setOfPrivates = new List<Private>();
        }
    }
}
