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
            private set { codeName = value; }
        }

        public string State
        {
            get { return state; }
            private set
            {
                if (value == "inProgress" || value == "Finished")
                {
                    state = value;
                }
            }
        }
        public void CompleteMission()
        {
            State = "Finished";
        }
    }
}
