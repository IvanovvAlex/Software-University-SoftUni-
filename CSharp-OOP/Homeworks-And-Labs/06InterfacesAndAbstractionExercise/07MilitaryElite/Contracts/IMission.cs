using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Contracts
{
    public interface IMission
    {
        string CodeName { get; }
        string State { get; }

        void CompleteMission();
    }
}
