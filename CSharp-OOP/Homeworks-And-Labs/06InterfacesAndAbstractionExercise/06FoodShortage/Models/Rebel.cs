using _06FoodShortage.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _06FoodShortage.Models
{
    class Rebel : IBuyer
    {
        public Rebel(string model,int age, string group)
        {
            Model = model;
            Age = age;
            Group = group;
            Modifier = 5;
        }
        public string Model { get; private set; }        
        public int Age { get; private set; }        
        public string Group { get; private set; }

        public int Food { get; private set; }
        public int Modifier { get; private set; }

        public void BuyFood()
        {
            Food += Modifier;
        }
    }
}
