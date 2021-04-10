using AquaShop.Models.Fish.Contracts;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public class FreshwaterAquarium : Aquarium
    {
        public FreshwaterAquarium(string name) : base(name, 50)
        {
            
        }

        public override void AddFish(IFish fishToAdd)
        {
            if (this.Capacity > this.Fish.Count && fishToAdd.GetType().Name == "FreshwaterFish")
            {
                this.Fish.Add(fishToAdd);
            }
            else if (fishToAdd.GetType().Name != "FreshwaterFish")
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
