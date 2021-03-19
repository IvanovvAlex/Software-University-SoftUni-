using System;
using System.Collections.Generic;
using System.Text;

namespace _04PizzaCalories
{
    public class Pizza
    {
        private string name;
        private List<Topping> toppings;
        private Dough dough;

        public Pizza(string name)
        {
            Name = name;
            toppings = new List<Topping>();
        }

        public string Name
        {
            get { return name; }
            private set { name = value; }
        }
        public List<Topping> Toppings
        {
            get { return toppings; }
            private set { toppings = value; }
        }
        public Dough Dough
        {
            get { return dough; }
            set { dough = value; }
        }

        public void AddTopping(Topping topping)
        {
            toppings.Add(topping);
        }
    }
}
