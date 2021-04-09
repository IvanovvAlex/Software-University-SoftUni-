using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasterRaces.Models.Drivers.Entities
{
    public class Driver : IDriver
    {
        private string name;
        private ICar car;
        private int numberOfWins;
        private bool canParticipate;
        
        public Driver(string name)
        {
            Name = name;
            canParticipate = false;
        }
        public string Name
        {
            get { return name; }
            private set
            {
                if (!string.IsNullOrEmpty(value) && value.Length >= 5)
                {
                    name = value;
                }
                else
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidName, value, 5));
                }
            }
        }

        public ICar Car
        {
            get { return car; }
            private set
            {
                car = value;
            }
        }
        public int NumberOfWins
        {
            get { return numberOfWins; }
            private set
            {
                numberOfWins = value;
            }
        }
        public bool CanParticipate
        {
            get { return canParticipate; }
            private set
            {
                canParticipate = value;
            }
        }
        public void AddCar(ICar car)
        {
            if (car != null)
            {
                this.Car = car;
                this.CanParticipate = true;
            }
            else
            {
                throw new ArgumentException(string.Format(ExceptionMessages.CarInvalid));
            }
        }

        public void WinRace()
        {
            this.NumberOfWins++;
        }
    }
}
