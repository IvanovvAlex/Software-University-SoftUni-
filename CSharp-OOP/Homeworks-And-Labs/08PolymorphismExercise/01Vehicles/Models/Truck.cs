using System;
using System.Collections.Generic;
using System.Text;

namespace _01Vehicles.Models
{
    public class Truck : Vehicle
    {
        public Truck(double fuelQuantity, double fuelConsumption)
           : base(fuelQuantity, fuelConsumption + 1.6)
        {

        }
        public override bool Drive(double km)
        {
            return base.Drive(km);
        }
        public override void Refuel(double liters)
        {            
            base.Refuel(liters*0.95);
        }
    }
}
