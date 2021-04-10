using AquaShop.Core.Contracts;
using AquaShop.Models.Aquariums;
using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations;
using AquaShop.Models.Fish;
using AquaShop.Repositories;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AquaShop.Core
{
    public class Controller : IController
    {
        private DecorationRepository decorations;
        private List<IAquarium> aquariums;
        public Controller()
        {
            decorations = new DecorationRepository();
            aquariums = new List<IAquarium>();
        }

        

        public string AddAquarium(string aquariumType, string aquariumName)
        {
            if (aquariumType == "FreshwaterAquarium")
            {
                aquariums.Add(new FreshwaterAquarium(aquariumName));
            }
            else if (aquariumType == "SaltwaterAquarium")
            {
                aquariums.Add(new SaltwaterAquarium(aquariumName));
            }
            else
            {
                throw new InvalidOperationException(ExceptionMessages.InvalidAquariumType);
            }
            return string.Format(OutputMessages.SuccessfullyAdded, aquariumType);
        }

        public string AddDecoration(string decorationType)
        {
            if (decorationType == "Ornament")
            {
                decorations.Add(new Ornament());
            }
            else if (decorationType == "Plant")
            {
                decorations.Add(new Plant());
            }
            else
            {
                throw new InvalidOperationException(ExceptionMessages.InvalidDecorationType);
            }
            return string.Format(OutputMessages.SuccessfullyAdded, decorationType);
        }

        public string AddFish(string aquariumName, string fishType, string fishName, string fishSpecies, decimal price)
        {
            var aquarium = aquariums.FirstOrDefault(a => a.Name == aquariumName);

            if (fishType == "FreshwaterFish")
            {               
                aquarium.AddFish(new FreshwaterFish(fishName, fishSpecies, price));

            }
            else if (fishType == "SaltwaterFish")
            {
                aquarium.AddFish(new FreshwaterFish(fishName, fishSpecies, price));
            }
            else
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.InvalidFishType));
            }


            return string.Format(OutputMessages.EntityAddedToAquarium, fishType, aquariumName);
        }

        public string CalculateValue(string aquariumName)
        {
            var aquarium = aquariums.FirstOrDefault(a => a.Name == aquariumName);
            decimal value = 0m;
            foreach (var fish in aquarium.Fish)
            {
                value += fish.Price;
            }
            foreach (var decoration in aquarium.Decorations)
            {
                value += decoration.Price;
            }
            return $"The value of Aquarium {aquariumName} is {value:f2}.";
        }

        public string FeedFish(string aquariumName)
        {
            var aquarium = aquariums.FirstOrDefault(a => a.Name == aquariumName);
            if (aquarium != null)
            {
                aquarium.Feed();
            }
            return $"Fish fed: {aquarium.Fish.Count}";
        }

        public string InsertDecoration(string aquariumName, string decorationType)
        {
            var aquarium = aquariums.FirstOrDefault(a => a.Name == aquariumName);
            
                if (decorationType == "Ornament")
                {
                    decorations.Add(new Ornament());

                }
                else if (decorationType == "Plant")
                {
                    decorations.Add(new Plant());
                }
                else
                {
                    throw new InvalidOperationException(string.Format(ExceptionMessages.InexistentDecoration, decorationType));
                }
           
            
            return string.Format(OutputMessages.EntityAddedToAquarium, decorationType, aquarium.Name);
        }

        public string Report()
        {
            string result = "";
            foreach (var aquarium in aquariums)
            {
                result += aquarium.GetInfo(); 
            }
            return result;
        }
    }
}
