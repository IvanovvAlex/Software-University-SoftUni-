using EasterRaces.Core.Contracts;
using EasterRaces.Repositories.Entities;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using EasterRaces.Models.Drivers.Entities;
using EasterRaces.Utilities.Messages;
using EasterRaces.Models.Races.Entities;
using EasterRaces.Models.Cars.Entities;
using EasterRaces.Models.Drivers.Contracts;

namespace EasterRaces.Core.Entities
{
    public class ChampionshipController : IChampionshipController
    {
        private readonly CarRepository carsRepository;
        private readonly DriverRepository driversRepository;
        private readonly RaceRepository racesRepository;
        public ChampionshipController()
        {
            carsRepository = new CarRepository();
            driversRepository = new DriverRepository();
            racesRepository = new RaceRepository();
        }

        public string AddCarToDriver(string driverName, string carModel)
        {
            if (driversRepository.GetByName(driverName) != null)
            {
                if (carsRepository.GetByName(carModel) != null)
                {
                    driversRepository.GetByName(driverName).AddCar(carsRepository.GetByName(carModel));
                }
                else
                {
                    throw new InvalidOperationException(string.Format(ExceptionMessages.CarNotFound, carModel));
                }
            }
            else
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.DriverNotFound, driverName));
            }
            return string.Format(OutputMessages.CarAdded, driverName, carModel);
        }

        public string AddDriverToRace(string raceName, string driverName)
        {
            if (racesRepository.GetByName(raceName) != null)
            {
                if (driversRepository.GetByName(driverName) != null)
                {
                    racesRepository.GetByName(raceName).AddDriver(driversRepository.GetByName(driverName));
                }
                else
                {
                    throw new InvalidOperationException(string.Format(ExceptionMessages.DriverNotFound, driverName));
                }
            }
            else
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.RaceNotFound, raceName));
            }
            return string.Format(OutputMessages.DriverAdded,driverName, raceName);
        }

        public string CreateCar(string type, string model, int horsePower)
        {
            if (carsRepository.GetByName(model) == null)
            {
                switch (type.ToLower())
                {
                    case "Muscle":
                        carsRepository.Add(new MuscleCar(model, horsePower));
                        break;
                    case "Sports":
                        carsRepository.Add(new SportsCar(model, horsePower));
                        break;
                }                
            }
            else
            {
                throw new ArgumentException(string.Format(ExceptionMessages.CarExists, model));
            }
            return string.Format(OutputMessages.CarCreated, type, model);
        }

        public string CreateDriver(string driverName)
        {
            if (driversRepository.GetByName(driverName) == null)
            {
                driversRepository.Add(new Driver(driverName));                
            }
            else
            {
                throw new ArgumentException(string.Format(ExceptionMessages.DriversExists, driverName));
            }
            return string.Format(OutputMessages.DriverCreated, driverName);
        }

        public string CreateRace(string name, int laps)
        {
            if (racesRepository.GetByName(name) == null)
            {
                racesRepository.Add(new Race(name, laps));
            }
            else
            {
                throw new ArgumentException(string.Format(ExceptionMessages.RaceExists, name));
            }
            return string.Format(OutputMessages.RaceCreated, name);
        }

        public string StartRace(string raceName)
        {
            var race = racesRepository.GetByName(raceName);
            if (race != null)
            {
                if (race.Drivers.Count < 3)
                {
                    throw new InvalidOperationException(string.Format(ExceptionMessages.RaceInvalid, raceName, 3));
                }
            }
            else
            {
                throw new InvalidOperationException(string.Format(ExceptionMessages.RaceNotFound, raceName));
            }
            List<IDriver> drivers = race.Drivers.OrderByDescending(d => d.Car.CalculateRacePoints(race.Laps)).ToList();
            string result = $"Driver {drivers[0].Name} wins {race.Name} race.\r\n" +
                            $"Driver {drivers[1].Name} is second in {race.Name} race.\r\n" +
                            $"Driver {drivers[2].Name} is third in {race.Name} race.";

            return result;
        }
    }
}
