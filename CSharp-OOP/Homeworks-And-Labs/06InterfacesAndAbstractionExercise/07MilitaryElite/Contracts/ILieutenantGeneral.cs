using _07MilitaryElite.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace _07MilitaryElite.Contracts
{
    public interface ILieutenantGeneral : IPrivate
    {
        public Dictionary<int, Private> SetOfPrivates { get; }
    }
}
