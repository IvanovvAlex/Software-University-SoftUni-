using System;
using System.Collections.Generic;
using System.Text;

namespace _04PizzaCalories
{
    public class Dough 
    {
        private string flourType;
        private double flourTypeCals;
        private string bakingTechnique;
        private double bakingTechniqueCals;
        private double weight;
        private double calories;

        public Dough(string flourType, string bakingTechnique, double weight)
        {
            FlourType = flourType;
            Weight = weight;
            BakingTechnique = bakingTechnique;
            calories = (2 * weight) * flourTypeCals * bakingTechniqueCals;
            Calories = calories;
        }

        public string FlourType
        {
            get { return flourType; }
            private set
            {
                switch (value.ToLower())
                {
                    case "white":
                        flourType = value;
                        flourTypeCals = 1.5;
                        break;
                    case "wholegrain":
                        flourType = value;
                        flourTypeCals = 1d;
                        break;                   
                    default:
                        throw new ArgumentException("Invalid type of dough.");                        
                }
                flourType = value;
            }
        }
        public string BakingTechnique
        {
            get { return bakingTechnique; }
            private set
            {
                switch (value.ToLower())
                {                   
                    case "crispy":                        
                        bakingTechnique = value;
                        bakingTechniqueCals = 0.9;
                        break;
                    case "chewy":                        
                        bakingTechnique = value;
                        bakingTechniqueCals = 1.1;
                        break;
                    case "homemade":
                        bakingTechnique = value;
                        bakingTechniqueCals = 1d;
                        break;
                    default:
                        throw new ArgumentException("Invalid type of dough.");
                }
              
            }
        }
        public double Weight
        {
            get { return weight; }
            private set 
            {
                if (value < 1 || value > 200)
                {
                    throw new ArgumentException("Dough weight should be in the range [1..200].");
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
