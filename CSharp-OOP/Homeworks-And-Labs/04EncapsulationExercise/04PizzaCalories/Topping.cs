using System;
using System.Collections.Generic;
using System.Text;

namespace _04PizzaCalories
{
    public class Topping
    {
        private string toppingType;
        private double toppingTypeCals;       
        private int weight;
        private double calories;

        public Topping(string toppingType, int weight)
        {
            ToppingType = toppingType;
            Weight = weight;
            calories = (toppingTypeCals * weight);
            Calories = calories;
        }

        private string ToppingType
        {
            get { return toppingType; }
            set
            {
                switch (value)
                {
                    case "Meat":    
                        toppingType = value;
                        toppingTypeCals = 1.5;
                        break;
                    case "Veggies":
                        toppingType = value;
                        toppingTypeCals = 1d;
                        break;
                    case "Cheese":
                        toppingType = value;
                        toppingTypeCals = 1d;
                        break;
                    case "Sauce":
                        toppingType = value;
                        toppingTypeCals = 1d;
                        break;
                    default:
                        throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }                
            }
        }
       
        private int Weight
        {
            get { return weight; }
            set
            {
                if (value < 1 || value > 200)
                {
                    throw new ArgumentException($"{ToppingType} weight should be in the range [1..50].");
                }
                weight = value;
            }
        }

        public double Calories
        {
            get { return calories; }
            private set
            {
                calories = value;
            }
        }
    }
}
