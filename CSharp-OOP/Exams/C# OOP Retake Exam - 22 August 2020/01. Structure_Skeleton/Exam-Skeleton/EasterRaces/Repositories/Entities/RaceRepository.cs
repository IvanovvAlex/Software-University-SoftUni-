using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Models.Races.Contracts;
using EasterRaces.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class RaceRepository : IRepository<IRace>
    {
        private List<IRace> carsRepository;
        public RaceRepository()
        {
            this.carsRepository = new List<IRace>();
        }
        public void Add(IRace model)
        {
            this.carsRepository.Add(model);
        }

        public IReadOnlyCollection<IRace> GetAll()
        {
            return this.carsRepository;
        }

        public IRace GetByName(string name)
        {
            return carsRepository.FirstOrDefault(c => c.Name == name);
        }

        public bool Remove(IRace model)
        {
            if (carsRepository.Contains(model))
            {
                carsRepository.Remove(model);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
