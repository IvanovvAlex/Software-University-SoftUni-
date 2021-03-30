using System;
using System.Collections.Generic;
using System.Text;

namespace _02VehiclesExtension.Models
{
    public class Bus : Vehicle
    {
        public Bus(double fuelQuantity, double fuelConsumption, double tankCapacity)
           : base(fuelQuantity, fuelConsumption + 1.4, tankCapacity)
        {

        }
        public override bool Drive(double km)
        {
            return base.Drive(km);
        }
        public override bool DriveEmpty(double km)
        {
            return base.DriveEmpty(km); 
        }
        public override void Refuel(double liters)
        {
            base.Refuel(liters);
        }
    }
}
