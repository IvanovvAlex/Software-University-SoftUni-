using System;
using System.Collections.Generic;

namespace _03ShoppingSpree
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            try
            {
                Dictionary<string, Person> peopleDict = new Dictionary<string, Person>();
                Dictionary<string, Product> productsDict = new Dictionary<string, Product>();

                string[] firstLine = Console.ReadLine()
                    .Split(';', StringSplitOptions.RemoveEmptyEntries);
                foreach (var people in firstLine)
                {
                    string[] info = people
                    .Split('=', StringSplitOptions.RemoveEmptyEntries);
                    Person person = new Person(info[0], decimal.Parse(info[1]));
                    peopleDict.Add(info[0], person);
                }

                string[] secondLine = Console.ReadLine()
                   .Split(';', StringSplitOptions.RemoveEmptyEntries);
                foreach (var products in secondLine)
                {
                    string[] info = products
                    .Split('=', StringSplitOptions.RemoveEmptyEntries);
                    Product product = new Product(info[0], decimal.Parse(info[1]));
                    productsDict.Add(info[0], product);
                }

                string[] cmd = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);
                while (cmd[0] != "END")
                {
                    string name = cmd[0];
                    string product = cmd[1];

                    if (peopleDict.ContainsKey(name) && productsDict.ContainsKey(product))
                    {
                        Person person = peopleDict[name];
                        Product currentProduct = productsDict[product];
                        person.BuyProduct(currentProduct);
                    }

                    cmd = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);
                }

                foreach (var people in peopleDict)
                {
                    if (people.Value.BagOfProducts.Count == 0)
                    {
                        Console.WriteLine($"{people.Value.Name} - Nothing bought");
                    }
                    else
                    {
                        Console.WriteLine($"{people.Value.Name} - {string.Join(", ", people.Value.ProductNames())}");
                       
                    }
                }
            }
            catch (Exception ex )
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
