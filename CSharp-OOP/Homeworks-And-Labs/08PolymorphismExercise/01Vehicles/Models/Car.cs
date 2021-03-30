using System;
using System.Collections.Generic;
using System.Text;

namespace _01Vehicles.Models
{
    public class Car : Vehicle
    {
        public Car(double fuelQuantity, double fuelConsumption)
            :base(fuelQuantity, fuelConsumption+0.9) 
        {
            
        }
        public override bool Drive(double km)
        {
            return base.Drive(km);
        }
        public override void Refuel(double liters)
        {
            base.Refuel(liters);
        }
    }
}
