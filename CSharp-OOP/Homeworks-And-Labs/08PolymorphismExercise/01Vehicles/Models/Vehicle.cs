using System;
using System.Collections.Generic;
using System.Text;

namespace _01Vehicles
{
    public class Vehicle
    {
        private double fuelQuantity;
        private double fuelConsumption;

        public Vehicle(double fuelQuantity, double fuelConsumption)
        {
            FuelQuantity = fuelQuantity;
            FuelConsumption = fuelConsumption;
        }

        public double FuelQuantity
        {
            get { return fuelQuantity; }
            private set { fuelQuantity = value; }
        }
        public double FuelConsumption
        {
            get { return fuelConsumption; }
            private set { fuelConsumption = value; }
        }
        public virtual bool Drive(double km)
        {
            if (IsFuelEnough(km))
            {
                FuelQuantity -= (fuelConsumption * km);
                return true;
            }
            else
            {
                return false;
            }
        }
        public virtual void Refuel(double liters)
        {
            FuelQuantity += liters;
        }
        public virtual bool IsFuelEnough(double km)
        {
            if (km * FuelConsumption <= FuelQuantity)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
