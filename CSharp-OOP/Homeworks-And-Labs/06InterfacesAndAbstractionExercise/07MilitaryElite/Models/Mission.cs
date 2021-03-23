using _07MilitaryElite.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Models
{
    public class Mission : IMission
    {
        private string codeName;
        private string state;
        public Mission(string codeName, string state)
        {
            CodeName = codeName;
            State = state;
        }

        public string CodeName
        {
            get { return codeName; }
            set { codeName = value; }
        }

        public string State
        {
            get { return state; }
            set { state = value; }
        }
    }
}
