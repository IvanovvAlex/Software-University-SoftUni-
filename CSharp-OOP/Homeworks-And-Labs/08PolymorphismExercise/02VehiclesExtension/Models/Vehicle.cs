using System;
using System.Collections.Generic;
using System.Text;

namespace _02VehiclesExtension
{
    public class Vehicle
    {
        private double fuelQuantity;
        private double fuelConsumption;
        private double tankCapacity;

        public Vehicle(double fuelQuantity, double fuelConsumption, double tankCapacity)
        {
            FuelQuantity = fuelQuantity;
            FuelConsumption = fuelConsumption;
            TankCapacity = tankCapacity;
            if (FuelQuantity > TankCapacity)
            {
                FuelQuantity = 0;
            }
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
        public double TankCapacity
        {
            get { return tankCapacity; }
            private set { tankCapacity = value; }
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
        public virtual bool DriveEmpty(double km)
        {
            if (IsFuelEnough(km))
            {
                FuelQuantity -= ((fuelConsumption - 1.4) * km);
                return true;
            }
            else
            {
                return false;
            }
        }
        public virtual void Refuel(double liters)
        {
            if (FuelValidation(liters))
            {
                if (TankCapacity >= liters + FuelQuantity)
                {
                    FuelQuantity += liters;
                }
                else
                {
                    Console.WriteLine($"Cannot fit {liters} fuel in the tank");
                }
            }
        }

        private bool FuelValidation(double liters)
        {
            if (liters <= 0)
            {
                Console.WriteLine($"Fuel must be a positive number");
                return false;
            }
            else
            {
                return true;
            }
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
