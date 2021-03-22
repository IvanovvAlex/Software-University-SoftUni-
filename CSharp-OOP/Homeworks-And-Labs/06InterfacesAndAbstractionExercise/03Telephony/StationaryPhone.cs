using System;
using System.Collections.Generic;
using System.Text;

namespace _03Telephony
{
    
    public class StationaryPhone : ICallable
    {
        public string Call(string number)
        {
            return $"Dialing... {number}";
        }
    }
}

