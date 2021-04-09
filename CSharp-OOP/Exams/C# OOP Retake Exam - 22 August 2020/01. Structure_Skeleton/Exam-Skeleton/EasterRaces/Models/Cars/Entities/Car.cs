using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasterRaces.Models.Cars.Entities
{
    public abstract class Car : ICar
    {
        private string model;
        private int horsePower;       
        private double cubicCentimeters;
        protected int minHorsePower;
        protected int maxHorsePower;
        public Car(string model, int horsePower, double cubicCentimeters, int minHorsePower, int maxHorsePower)
        {
            Model = model;
            HorsePower = horsePower;
            CubicCentimeters = cubicCentimeters;
            this.minHorsePower = minHorsePower;
            this.maxHorsePower = maxHorsePower;
        }
        public string Model
        {
            get { return model; }
            private set 
            {
                if (!string.IsNullOrWhiteSpace(value) && value.Length >= 4)
                {
                    model = value;
                }
                else
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidModel, value, 4));
                }
            }
        }

        public int HorsePower
        {
            get { return horsePower; }
            private set
            {
                if (this.minHorsePower <= value && value <= this.maxHorsePower)
                {
                    horsePower = value;
                }
                else
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidHorsePower, horsePower));
                }
            }
        }       

        public double CubicCentimeters
        {
            get { return cubicCentimeters; }
            private set
            {                
                    cubicCentimeters = value;               
            }
        }
        public double CalculateRacePoints(int laps)
        {
            return this.CubicCentimeters / this.HorsePower * laps;
        }           
    }
}
