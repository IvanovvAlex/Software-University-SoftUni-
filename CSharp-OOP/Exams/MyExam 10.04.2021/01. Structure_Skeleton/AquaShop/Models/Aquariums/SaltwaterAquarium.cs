using AquaShop.Models.Fish.Contracts;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public class SaltwaterAquarium : Aquarium
    {
        public SaltwaterAquarium(string name) : base(name, 25)
        {
            
        }

        public override void AddFish(IFish fishToAdd)
        {
            if (this.Capacity > this.Fish.Count && fishToAdd.GetType().Name == "SaltwaterFish")
            {
                this.Fish.Add(fishToAdd);
            }
            else if (fishToAdd.GetType().Name != "SaltwaterFish")
            {
                Console.WriteLine(OutputMessages.UnsuitableWater);
                return;
            }
            else
            {
                throw new InvalidOperationException(ExceptionMessages.NotEnoughCapacity);
            }
        }
    }
}
