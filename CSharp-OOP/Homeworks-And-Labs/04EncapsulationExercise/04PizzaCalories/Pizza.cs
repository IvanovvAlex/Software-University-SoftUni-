using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _04PizzaCalories
{
    public class Pizza
    {
        private string name;
        private List<Topping> toppings;
        private Dough dough;
        private double totalCalories;


        public Pizza(string name, Dough dough)
        {
            Name = name;            
            Dough = dough;            
            toppings = new List<Topping>();
        }
       
        public double TotalCalories
        {
            get { return totalCalories; }
            private set { totalCalories = value; }
        }

        private string Name
        {
            get { return name; }
            set
            {
                if (string.IsNullOrEmpty(value) || value.Length > 15)
                {
                    throw new ArgumentException("Pizza name should be between 1 and 15 symbols.");
                }
                name = value; 
            }
        }
        private List<Topping> Toppings
        {
            get { return toppings; }
            set 
            {               
                toppings = value; 
            }
        }
        public Dough Dough
        {
            private get { return dough; }
            set 
            {
                totalCalories += value.Calories;                
                dough = value;
            }
        }

        public void AddTopping(Topping topping)
        {
            toppings.Add(topping);
            totalCalories += topping.Calories;
            if (toppings.Count < 0 || toppings.Count > 10)
            {
                throw new ArgumentException("Number of toppings should be in range [0..10].");
            }
        }
        public override string ToString()
        {
            return $"{Name} - {TotalCalories:f2} Calories."; 
        }
    }
}
