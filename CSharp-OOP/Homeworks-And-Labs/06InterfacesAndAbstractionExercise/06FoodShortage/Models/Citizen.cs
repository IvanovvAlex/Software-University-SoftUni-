
using _06FoodShortage.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _06FoodShortage.Models
{
    public class Citizen : IBuyer
    {
        public Citizen(string name, int age, string id, string birthday)
        {
            Name = name;
            Age = age;
            Id = id;
            Birthday = birthday;
            Modifier = 10;
        }
        public string Name { get; private set; }
        public string Birthday { get; private set; }
        public int Age { get; set; }
        public string Id { get; private set; }
        public int Food { get; private set; }
        public int Modifier { get; private set; }

        public void BuyFood()
        {
            Food += Modifier;
        }
    }
}
