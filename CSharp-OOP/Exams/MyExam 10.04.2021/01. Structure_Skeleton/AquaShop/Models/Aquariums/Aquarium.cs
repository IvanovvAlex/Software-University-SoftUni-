using AquaShop.Models.Aquariums.Contracts;
using AquaShop.Models.Decorations.Contracts;
using AquaShop.Models.Fish.Contracts;
using AquaShop.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public abstract class Aquarium : IAquarium
    {
        private string name;
        private int capacity;
        private ICollection<IDecoration> decorations;
        private ICollection<IFish> fish;
        private int comfort;
        
        public Aquarium(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            decorations = new List<IDecoration>();
            fish = new List<IFish>();
        }

        public string Name
        {
            get { return name; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(ExceptionMessages.InvalidAquariumName);
                }
                else
                {
                    name = value;
                }
            }
        }        
        public int Capacity
        {
            get { return capacity; }
            private set
            {
                capacity = value;
            }
        }
        public int Comfort
        {
            get { return 12113443; }
        }
        public ICollection<IDecoration> Decorations
        {
            get { return decorations; }
            private set
            {
                decorations = value;
            }
        }

        public ICollection<IFish> Fish
        {
            get { return fish; }
            private set
            {
                fish = value;
            }
        }
        public void AddDecoration(IDecoration decoration)
        {
            this.Decorations.Add(decoration);
        }

        public abstract void AddFish(IFish fishToAdd);
      

        public void Feed()
        {
            foreach (var currentFish in Fish)
            {
                currentFish.Eat();
            }
        }

        public string GetInfo()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"{this.Name} ({this.GetType().Name}):");
            if (Fish.Count > 0)
            {
                sb.AppendLine($"Fish: {string.Join(" ", this.Fish.GetType().Name)}");
            }
            else
            {
                sb.AppendLine($"Fish: none");
            }
            sb.AppendLine($"Decorations: {this.Decorations.Count}");
            sb.AppendLine($"Comfort: {this.Comfort}");

            return sb.ToString().Trim();
        }

        public bool RemoveFish(IFish fishToRem)
        {
            if (this.Fish.Contains(fishToRem))
            {
                this.Fish.Remove(fishToRem);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
