using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    class Spy : Soldier, ISpy
    {
        private int codeNumber;
        public Spy(int id, string firstName, string lastName, int codeNumber)
            :base(id, firstName, lastName)
        {
            CodeNumber = codeNumber;
        }
        public int CodeNumber
        {
            get { return codeNumber; }
            private set { codeNumber = value; }
        }

    }
}
