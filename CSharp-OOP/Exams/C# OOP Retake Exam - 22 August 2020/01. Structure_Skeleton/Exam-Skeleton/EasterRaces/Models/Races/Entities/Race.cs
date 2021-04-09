using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Models.Races.Contracts;
using EasterRaces.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Models.Races.Entities
{
    public class Race : IRace
    {
        private string name;
        private int laps;
        private readonly ICollection<IDriver> drivers;
        public Race(string name, int laps)
        {
            Name = name;
            Laps = laps;
            drivers = new List<IDriver>();
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
                    throw new ArgumentException(ExceptionMessages.InvalidName);
                }
            }
        }
        public int Laps
        {
            get { return laps; }
            private set
            {
                if (1 <= value)
                {
                    laps = value;
                }
                else
                {
                    throw new ArgumentException(string.Format(ExceptionMessages.InvalidNumberOfLaps, 1));
                }
            }
        }
        public IReadOnlyCollection<IDriver> Drivers { get => this.drivers.ToList().AsReadOnly(); }

        public void AddDriver(IDriver driver)
        {
            if (driver == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.DriverInvalid));
            }
            else if (!driver.CanParticipate)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.DriverNotParticipate, driver.Name));
            }
            else if (this.drivers.Contains(driver))
            {
                throw new ArgumentException(string.Format(ExceptionMessages.DriverAlreadyAdded, driver.Name, this.Name));
            }

            this.drivers.Add(driver);
        }
    }
}
