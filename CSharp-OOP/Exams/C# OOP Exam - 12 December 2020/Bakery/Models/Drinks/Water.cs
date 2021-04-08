using System;
using System.Collections.Generic;
using System.Text;

namespace Bakery.Models.Drinks
{
    public class Water : Drink
    {
        public Water(string name, int portion, decimal price, string brand) : base(name, portion, 1.5m , brand)
        {
        }
    }
}
