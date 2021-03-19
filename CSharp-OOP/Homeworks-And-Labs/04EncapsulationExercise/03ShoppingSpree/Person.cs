using System;
using System.Collections.Generic;
using System.Text;

namespace _03ShoppingSpree
{
    public class Person
    {
        private string name;
        private decimal money;
        private List<Product> bagOfProducts;
        public Person(string name, decimal money)
        {
            Name = name;
            Money = money;
            if (string.IsNullOrEmpty(name) || string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("Name cannot be empty");
            }
            else if (money < 0)
            {
                throw new ArgumentException("Money cannot be negative");
            }
            bagOfProducts = new List<Product>();
        }

        public string Name
        {
            get { return name; }
            private set
            {
                name = value;
            }
        }
        public decimal Money
        {
            get { return money; }
            private set
            {
                money = value;
            }
        }
        public List<Product> BagOfProducts
        {
            get { return bagOfProducts; }
            private set { bagOfProducts = value; }
        }
        public void BuyProduct(Product product)
        {
            if (Money >= product.Cost)
            {
                Money -= product.Cost;
                bagOfProducts.Add(product);
                Console.WriteLine($"{Name} bought {product.Name}");
            }
            else
            {
                Console.WriteLine($"{Name} can't afford {product.Name}");
            }
        }
        public List<string> ProductNames()
        {
            List<string> list = new List<string>();

            foreach (var item in bagOfProducts)
            {
                list.Add(item.Name);
            }
            return list;

        }
    }
}
