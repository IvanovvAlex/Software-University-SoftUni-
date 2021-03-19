using System;
using System.Collections.Generic;
using System.Text;

namespace _03ShoppingSpree
{
    public class Product
    {
        private string name;
        private decimal cost;

        public Product(string name, decimal cost)
        {
            Name = name;
            Cost = cost;
            if (string.IsNullOrEmpty(name) || string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("Name cannot be empty");
            }
            if (cost < 0)
            {
                throw new ArgumentException("Money cannot be negative");
            }
        }

        public string Name
        {
            get { return name; }
            private set
            {               
                    name = value;               
            }
        }
        public decimal Cost
        {
            get { return cost; }
            private set
            {                
                    cost = value;             
            }
        }
    }
}
