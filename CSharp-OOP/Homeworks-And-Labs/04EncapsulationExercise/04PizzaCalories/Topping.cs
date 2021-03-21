using System;
using System.Collections.Generic;
using System.Text;

namespace _04PizzaCalories
{
    public class Topping
    {
        private string toppingType;
        private double toppingTypeCals;       
        private double weight;
        private double calories;

        public Topping(string toppingType, double weight)
        {
            ToppingType = toppingType;
             Weight = weight;
            calories = 2 * weight * toppingTypeCals;
            Calories = calories;
        }

        private string ToppingType
        {
            get { return toppingType; }
            set
            {
                switch (value.ToLower())
                {
                    case "meat":    
                        toppingType = value;
                        toppingTypeCals = 1.2;
                        break;
                    case "veggies":
                        toppingType = value;
                        toppingTypeCals = 0.8;
                        break;
                    case "cheese":
                        toppingType = value;
                        toppingTypeCals = 1.1;
                        break;
                    case "sauce":
                        toppingType = value;
                        toppingTypeCals = 0.9;
                        break;
                    default:
                        throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }                
            }
        }

        private double Weight
        {
            get { return weight; }
            set
            {
                if (value < 1 || value > 50)
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
