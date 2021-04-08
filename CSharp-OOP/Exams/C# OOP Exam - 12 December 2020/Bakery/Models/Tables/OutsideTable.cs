using System;
using System.Collections.Generic;
using System.Text;

namespace Bakery.Models.Tables
{
    public class OutsideTable : Table
    {
        public OutsideTable(int tableNumber, int capacity, decimal pricePerPerson) 
            : base(tableNumber, capacity, 3.5m)
        {
        }
    }
}
